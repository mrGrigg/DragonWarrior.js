//DragonWarrior game loop

var rint = require('readline').createInterface( process.stdin, {} );
require('tty').setRawMode(true);

//Binding the movement keys
rint.input.on('keypress', handleMovementKeys);

//Player
var Player = function() {
    this.x = 0; //x coordinate
    this.y = 0; //y coordinate
    this.xMovement = 0;  // delta value for x-movement
    this.yMovement = 0;  // delta value for y-movement
    this.step = 0; //Animation step
    this.movementDirection = 'down';  // Current direction
};

var player = new Player();
var frameRate = 1000/32; //~30 FPS
var frame = 1; //Seed the frame rate to loop from 1 - 30

setInterval(gameLoop, frameRate);

function gameLoop() {
    frame = frame < 30 ? frame + 1 : 1; //Loop the frame count

    logic(); //Parse logic
    events(); //Check events
    render(); //Render images
}

function events() {
    //Handle movement events
    move();
}

function logic() {
    //Parse game logic
    
    //Is move available
    //Check for environment effects (damage, slow, poison)
    //Check for encounters
}

function render() {
    animate();
    //Scroll the world
}

//Event functions

function move() {
    //Calculate new movement
    player.x += player.xMovement;
    player.y += player.yMovement;

    if (player.xMovement !== 0 || player.yMovement !== 0) {
        console.log('Moving to: ', player.x, player.y);
    }

    //Reset x and y movement
    player.xMovement = 0;
    player.yMovement = 0;
}

function handleMovementKeys(char, key) {
    if (key.name == 'escape') {
        process.exit();
    }

    var movementKeys = ['up', 'left', 'right', 'down'];
    if (movementKeys.indexOf(key.name) != -1) {
        //Move the player one block per direction
        player.movementDirection = key.name;

        switch (key.name){
            case 'up':
                player.yMovement = -1;
            break;
            case 'down':
                player.yMovement = 1;
            break;
            case 'right':
                player.xMovement = 1;
            break;
            case 'left':
                player.xMovement = -1;
            break;
        }

    }
}

//Logic Functions
function moveAvailability() {
    
}

//Render Functions
function animate() {
    walk();
}

function walk() {
    var step = frame <= 15 ? 0 : 1;
    //Only step the character every 15 frames
    if (player.step != step) {
        player.step = step;
        console.log(sprite4x2[player.movementDirection][player.step]);
    }
}

//Sprites that walk in four directions with a two frame walk
var sprite4x2 = {
    'up': {
        0: 'Up Zero', //These will be the coordinates of the sprite
        1: 'Up One'
    },
    'down': {
        0: 'Down Zero',
        1: 'Down One'
    },
    'left': {
        0: 'Left Zero',
        1: 'Left One'
    },
    'right': {
        0: 'Right Zero',
        1: 'Right One'
    }
};