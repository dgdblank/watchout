
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

var rand = function(n){ return Math.random() * n};
var randX = function(){ return rand(gameBoard.width)};
var randY = function(){ return rand(gameBoard.height)};

//Create Gameboard
var gameBoardSvg = d3.select(".gameboard").append('svg')
	.attr("width", gameBoard.width)
	.attr("height", gameBoard.height)
	.append("g")
	.attr("padding", gameBoard.padding);


// create SVG for player
var playerSvg = function(){

	
  function dragged() {
	  var x = d3.event.x;
	  var y = d3.event.y;
	  d3.select(this).attr("cx", x).attr("cy", y);
}

  // function dragstart() {
  // 	  d3.event.SourceEvent.stopPropogation();
  // }

	var drag = d3.behavior.drag()
		// .on("dragstart", dragstart)
		.on("drag", dragged)  
		// function(){
		// (this).event.SourceEvent.stopPropogation();

	gameBoardSvg.append("circle")
		.attr('cx', player.x)
		.attr('cy', player.y)
		.attr('r', player.rad)
		.attr('fill', player.fill)
		.attr('stroke', player.borderColor)
		.attr('stroke-width', player.borderWidth)
		// .attr("transform", "translate(" + player.x + "," + player.y + ")")
		.call(drag);
		
}

var renderPlayer = function(){
	playerSvg();
}


// update score
var updateScore = function(){

	d3.select('.high span').text(gameStats.bestScore = Math.max(gameOptions.score, gameOptions.bestScore));
	d3.select('.current span').text(gameOptions.score);
}

// var updateBestScore = function(){
// 	gameOptions.bestScore = gameStats.score > gameStats.bestScore ? gameStats.score : gameStats.bestScore;
// 	d3.select('.high span').text(gameStats.bestScore);
// }

// set-up enemy
var enemy = {
	x: 0,
	y: 0,
	rad : 15,
	fill: 'black',
	id: 0
}

// TO DO: Add padding
// Add enemy SVG with random position
// var asteroids = gameBoardSvg.selectAll('div')
// 	.data(d3.range(gameOptions.nEnemies))
// 	.enter().append('div')
// 	.style({
// 		top: randY,
// 		left: randX,
// 		width: enemy.rad,
// 		height: enemy.rad
// 	})
// 	.attr('class', 'enemy')

// add enemies SVG
var enemies = gameBoardSvg.selectAll('circle')
	.data(d3.range(gameOptions.nEnemies))
	.enter().append('circle')
	.attr('cx', randX)
	.attr('cy', randY)
	.attr('r', enemy.rad)
	.attr('class', 'enemy')
	.attr('fill', enemy.fill)
	// .attr('id', enemy.id);

	// enemy.id++;
// }

// move asteroids
var enemyMovement = function(element){
	element.transition().duration(gameOptions.duration)
		.attr('cx', randX)
		.attr('cy', randY)
		.each('end', function(){ // REVIEW
			enemyMovement(d3.select(this));
		})
}

enemyMovement(enemies);

d3.transition

// function renderEnemies(){
// 	for(var i = 0; i < gameOptions.nEnemies; i++){
// 		addEnemySvg();
// 	}
// }

//initialize first position of player and enemies
var init = function(){
	renderPlayer();
	// renderEnemies();
}

init();





// TO DO:
// Change enemy position
// Set up a timer to continuosly change positions
// Restart scoreboard when enemy touches player
// Style scoreboard