// Establish Piece Constructor Functions

var Pieces = function(top, left){
  this.top = top;
  this.left = left;
};

var Player = function(top, left){
  Pieces.call(this, top, left);
  this.id = 'player';
}

Player.prototype = Object.create(Pieces.prototype)
Player.prototype.constructor = Player;

var Enemy = function(top, left){
  Pieces.call(this, top, left);
}

Enemy.prototype = Object.create(Pieces.prototype)
Enemy.prototype.constructor = Enemy;

// Set Some Game Options

var options = {
  height: 580,
  width: 800,
  nEnemies: 30
}

var gameStats = {
  score: 0,
  bestScore: 0
}

// Create The Game Board

d3.select("body")
  .append('div')
  .attr('class', 'gameboard')

// get board coordinates
d3.select('.gameboard')

debugger
// find board center
var centerY = 'SOMETHING'
var centerX = 'SOMETHING';

// Create the Player
//
var player = new Player(centerY, centerX);

// append the player to the game baord
d3.select('.gameboard')
  .selectAll('span')
  .data([player])
  .enter()
  .append('span')
  .attr('class', 'piece player')

// create an array of enemies
var enemies = [];

for(var i = 0; i < options.nEnemies; i++) {
  randomTop = 'SOMETHING';
  randomLeft = 'SOMETHING';
  // id = "enemy" + (i+1);
  enemies.push(new Enemy(randomTop, randomLeft));
}

//append enemies to the gameboard
d3.select('.gameboard')
  .selectAll('span')
  .data(enemies)
  .enter()
  .append('span')
  .attr('class', 'piece enemy')









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
// Step 3: Set up the player
// the image
// player can drag # find a library
// create a player class
// svg path, perhaps?
// state of the player
// restrict motion
//

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
