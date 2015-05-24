// set-up the environment
var gameBoard = {
  height: 580,
  width: 800,
  nEnemies: 30,
  padding: 20
}

var gameOptions = {
  score: 0,
  bestScore: 0,
  collisions: 0,
  nEnemies: 30,
  duration: 1000
}

var player = {
	x : gameBoard.width / 2,
	y : gameBoard.height / 2,
	fill : '#ff6600',
	borderColor : 'black',
	borderWidth : 2,
	rad : 15
}

// store rand function into variable for multiple uses
var rand = function(n){ return Math.random() * n};
var randX = function(){ return rand(gameBoard.width)};
var randY = function(){ return rand(gameBoard.height)};

//Create Gameboard
var gameBoardSvg = d3.select(".gameboard").append('svg')
	.attr("width", gameBoard.width)
	.attr("height", gameBoard.height)
	.append("g")


// create SVG for player
var playerSvg = function(){

	function dragged() {
		  var x = d3.event.x;
		  var y = d3.event.y;
		  d3.select(this).attr("cx", x).attr("cy", y);
	}

	var drag = d3.behavior.drag()
		.on("drag", dragged)  

	gameBoardSvg.append("circle")
		.attr('class', 'player')
		.attr('cx', player.x)
		.attr('cy', player.y)
		.attr('r', player.rad)
		.attr('fill', player.fill)
		.attr('stroke', player.borderColor)
		.attr('stroke-width', player.borderWidth)
		.call(drag);
		
}

// render player with drag abilities
playerSvg();


// set-up enemy
var enemy = {
	rad : 15,
	fill: '#f0e68c',
	borderColor : 'black',
	borderWidth : 2,
}


// add enemy SVG's
var enemies = gameBoardSvg.selectAll('circle')
	.data(d3.range(gameOptions.nEnemies))
	.enter().append('circle')
	.attr('cx', randX)
	.attr('cy', randY)
	.attr('r', enemy.rad)
	.attr('stroke', enemy.borderColor)
	.attr('stroke-width', player.borderWidth)
	.attr('class', 'enemy')
	.attr('fill', enemy.fill)


// move enemies in random directions
var enemyMovement = function(element){
	element.transition().duration(gameOptions.duration)
		.attr('cx', randX)
		.attr('cy', randY)
		.each('end', function(){ // REVIEW
			enemyMovement(d3.select(this));
		})
}

enemyMovement(enemies);


// update score
var updateScore = function(){
	d3.select('.high span').text(gameOptions.bestScore);
	d3.select('.current span').text(gameOptions.score);
	d3.select('.collisions span').text(gameOptions.collisions);
}

// increase score, set bestScore when player beats bestScore, updates scoreboard
var scoreTicker = function(){
	gameOptions.score += 1;
	gameOptions.bestScore = Math.max(gameOptions.score, gameOptions.bestScore);
	updateScore();
}

// Updates score every 100ms
setInterval(scoreTicker, 100);


// count the number of collisions
var collisionAlready = false;
var countCollisions = function(){
	var collision = false;

	// each enemy 
	enemies.each(function(enemy){
		// collect position in space
		var cx = d3.select(this).attr('cx');
		var cy = d3.select(this).attr('cy');
		// determine how far away the enemy is from player
		var x = cx - d3.select('.player').attr('cx');;
		var y = cy - d3.select('.player').attr('cy');
			// if within region of player
		if(Math.sqrt(x*x + y*y) < player.rad*2){
			collision = true;
		}
	})

		// if collision happens
		if(collision){
			// reset score
			gameOptions.score = 0;
			// increase collisions
			if(collisionAlready !== collision){
				gameOptions.collisions++;
			}
		}

		collisionAlready = collision;

};	

// continuously call countCollisions
d3.timer(countCollisions);		
