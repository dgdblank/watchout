
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
  nEnemies: 30
}

var player = {
	x : gameBoard.width / 2,
	y : gameBoard.height / 2,
	fill : '#ff6600',
	borderColor : 'black',
	borderWidth : 2,
	rad : 15
}



//Create Gameboard
var gameBoardSvg = d3.select(".gameboard").append('svg')
	.attr("width", gameBoard.width)
	.attr("height", gameBoard.height)
	.attr("padding", gameBoard.padding);


// create SVG for player
// TO DO, add dragging functionality
var playerSvg = function(){
	gameBoardSvg.append("circle")
		.attr('cx', player.x)
		.attr('cy', player.y)
		.attr('r', player.rad)
		.attr('fill', player.fill)
		.attr('stroke', player.borderColor)
		.attr('stroke-width', player.borderWidth)
		// .attr('transform', "translate("+ player.x + "," + player.y + ")")
}

var renderPlayer = function(){
	playerSvg();
}


// update score
var updateScore = function(){
	gameOptions.score += 50;
	d3.select('.current span').text(gameOptions.score);
}

var updateBestScore = function(){
	gameOptions.bestScore = gameStats.score > gameStats.bestScore ? gameStats.score : gameStats.bestScore;
	d3.select('.high span').text(gameStats.bestScore);
}

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
function addEnemySvg(){
gameBoardSvg.append('circle')
	.attr('cx', Math.floor(Math.random() * gameBoard.width))
	.attr('cy', Math.floor(Math.random() * gameBoard.height))
	.attr('r', enemy.rad)
	.attr('class', 'enemy')
	.attr('fill', enemy.fill)
	.attr('id', enemy.id);

	enemy.id++;
}

function renderEnemies(){
	for(var i = 0; i < gameOptions.nEnemies; i++){
		addEnemySvg();
	}
}

// initialize first position of player and enemies
var init = function(){
	renderPlayer();
	renderEnemies();
}

init();

// TO DO:
// Change enemy positions
// Set up a timer to continuosly change positions
// Style scoreboard