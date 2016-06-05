/*The x and y for the Player and Enemy classes will be inherited from 
Object.prototype.move property.*/ 

"use strict";

Object.prototype.loc = function(x,y){
this.x = x;
this.y = y;

};

// Enemies our player must avoid

//var Enemy is the Enemy class, taking x, y and speed as parameters.
var Enemy = function(speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

this.speed = speed;



    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
//In the update method, if the enemy reaches the right end of the canvas it will be returned back the left side 
// of it.
Enemy.prototype.update = function(dt) {

this.x += this.speed * dt;
if (this.x > 505){
    this.x = -100 ;
}
};

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.



// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
//The Player class object:
var Player = function(){

    this.sprite = 'images/char-boy.png';


};
//When the player reaches the river the player wins and informed through the alert window.
//the checkCollisions property is called within the update property.
Player.prototype.update = function(dt){
this.checkCollisions();
this.x*dt;
 this.y*dt;

if (this.y == 0){
    alert("You won");
    this.x = 200;
    this.y = 300;
 }
};

Player.prototype.render = function(){
 ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};
//The handleInput property moves the player instance in the pressed direction by the user. 
Player.prototype.handleInput = function(allowedKeys){
    if (allowedKeys == 'left'){
        this.x -= 10;
    }
     if (allowedKeys == 'right'){
        this.x += 10;
        }
        if (allowedKeys == 'up'){
        this.y -= 10;
        }
        if (allowedKeys == 'down'){
        this.y += 10;
        }

};

Player.prototype.checkCollisions = function(){
for(var i = 0, len = 3;i < len; i++){
var enemy = allEnemies[i];
    if (this.x >= enemy.x + 0 &&
        this.x < enemy.x + 40 &&
        this.y >= enemy.y +0 &&
        this.y < enemy.y + 85) {
 alert("Game Over");
    this.x = 200;
    this.y = 300;

 }
    }


            };

//Instantiates the Enemies and pushes them into the allEnemies array.
var allEnemies = [];
for (var i=0, len =3; i < len; i++){
var enemy = new Enemy((Math.random()*100)+40);
  allEnemies.push(enemy);
 enemy.loc(0, (Math.random()*260)+35);


}

//Instantiates the player object
var player = new Player();
player.loc(200,300);





// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
