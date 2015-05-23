
var options = {
  height: 580,
  width: 800,
  nEnemies: 30
}

var gameStats = {
  score: 0,
  bestScore: 0
}

// create board
// d3.select("body")
//   .append('div')
//   .attr('class', 'gameboard');

//Create Gameboard
var gameboard = d3.select("body").append('svg')
	.attr("width", options.width)
	.attr("height", options.height)
	.attr("class", "gameboard")
	.append("g");

// update score
var updateScore = d3.select('.current span').text(gameStats.score);


// find highest score
gameStats.bestScore = gameStats.score > gameStats.bestScore ? gameStats.score : gameStats.bestScore;
// update highest score
var bestScore = d3.select('.high span').text(gameStats.bestScore);


// create enemy data with random position on board
var enemies = [];
for(var i = 0; i < options.nEnemies; i++){
	enemies.push({
		id : i,
		x : Math.floor(Math.random() * options.width),
		y : Math.floor(Math.random() * options.height)
	})
}

gameboard.selectAll('div')
	.data(enemies)
	.enter()
	.append('svg:circle')
	.attr('class', 'enemy')
	.attr('cx', function(d){ return d.x})
	.attr('cy', function(d){ return d.y})
	.attr('r', 0)
	.style("color: black; height: 50px, width: 50px");









// start slingin' some d3 here.

//Step 1: Set-up the environment
//parameters
// game Stats
  // .


// Step 2: Set up the game board
// axes
// game board (svg region)
// scores
//
// positioned relative
// div for board
  // coordinate boundaries using offset prop
  // top and left
  // FIGURE OUT BOUNDARIES
  // absolutely positioned elements at top-l and bottom-r


// create super class for our pieces
var Pieces = function(top, left){
  this.top = top;
  this.left = left;
};

var Player = function(top, left){
  Pieces.call(this, top, left);
}

Player.prototype = Object.create(Pieces.prototype)
Player.prototype.constructor = Player;
// Step 3: Set up the player
// the image
// player can drag # find a library
// create a player class
// svg path, perhaps?
// state of the player
// restrict motion
//

var Enemy = function(top, left){
  Pieces.call(this, top, left);
}

Enemy.prototype = Object.create(Pieces.prototype)
Enemy.prototype.constructor = Enemy;

// Enemy.prototype.move = function(newLocation) {
//   var oldLocation = this.location;
// }
// Step 4: Set up the Enemies
// array of simple objects
  // have positions, an id, radius attribute
  // set random position


// Perhaps have super class for both Enemies and Player
// for commonalities


// Step 5: Render the gameboard
// add players/enemies to the board
// collision detection
// custom tween
  // tests if enemy has collided with player on each tick
  //
