
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
d3.select("body")
  .append('div')
  .attr('class', 'gameboard')


//
var enemy = [{x: 5, y: 4, id: 'a1', 'class': 'enemy'}];

d3.select('.gameboard').selectAll('span')
  .data([1,2])
  .enter()
  .append('span')
  .attr('class', 'enemy');









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
