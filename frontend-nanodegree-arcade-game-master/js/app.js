// Enemies our player must avoid
var Enemy = function(x, y , speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
this.x = x;
this.y = y;
this.speed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
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
var Player = function(){

    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 300;

}

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

Player.prototype.handleInput = function(allowedKeys){
    if (allowedKeys == 'left'){
        this.x -= 10;
    };
     if (allowedKeys == 'right'){
        this.x += 10;
        };
        if (allowedKeys == 'up'){
        this.y -= 10;
        };
        if (allowedKeys == 'down'){
        this.y += 10;
        };

}

Player.prototype.checkCollisions = function(){
for(var i = 0; i < allEnemies.length; i++){
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


var allEnemies = [];
for (var i=6; i >= 1; i--){
var enemy = new Enemy(0, [i]*35, (Math.random()*100)+40);
  allEnemies.push(enemy);
  i--;
};

var player = new Player();





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
