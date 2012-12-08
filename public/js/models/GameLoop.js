define([], function() {
    return function(player, loop) {
        var game = {
            frame: 1 //Seed the frame rate to loop from 1 - 30
            , frameRate: 1000/32 //~30 fps

            , gameLoop: function() {
                game.frame = game.frame < 30 ? game.frame + 1 : 1; //Loop the frame count

                game.logic(); //Parse logic
                game.events(); //Check events
                game.render(); //Render images
            }

            , logic: function() {
                //Parse game logic
                
                //Is move available
                //Check for environment effects (damage, slow, poison)
                //Check for encounters
            }

            , events: function() {

            }

            , render: function() {
                game.animate();
                //Scroll the world
            }

            //Events
            , move: function() {
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

            , handleMovementKeys: function(keypress) {
                var movement = {
                        37: 'left'
                        , 38: 'up'
                        , 39: 'right'
                        , 40: 'down'
                    }
                    , keyName = movement[keypress.which];
                
                //var movementKeys = ['up', 'left', 'right', 'down'];
                if (typeof keyName !== 'undefined') {
                    //Move the player one block per direction
                    player.movementDirection = keyName;
                    switch (keyName){
                        case 'up':
                            //player.yMovement = -1;
                        break;
                        case 'down':
                            //player.yMovement = 1;
                        break;
                        case 'right':
                            //player.xMovement = 1;
                        break;
                        case 'left':
                            //player.xMovement = -1;
                        break;
                    }

                }
            }

            //Logic
            , moveAvailability: function() {
                //Check for obstructions
                var moveAvailable = true;

                return moveAvailable;
            }

            //Render Functions
            , animate: function() {
                game.walk();
            }

            , walk: function() {
                var step = game.frame <= 15 ? 0 : 1;
                //Only step the character every 15 frames
                if (player.step != step) {
                    player.step = step;
                    console.log(game.sprite4x2[player.movementDirection][player.step]);

                    this.playerSprite = game.sprite4x2[player.movementDirection][player.step];
                }
            }

            //Sprites that walk in four directions with a two frame walk
            , sprite4x2: {
                'left': {
                    0:  '0 -33px'
                    , 1: '-32px -33px'
                    // 0: 'Left Zero',
                    // 1: 'Left One'
                }
                , 'up': {
                    0: '-64px -33px'
                    , 1: '-96px -33px'
                    // 0: 'Up Zero',
                    // 1: 'Up One'
                }
                , 'right': {
                    0: '-65px 0'
                    , 1: '-97px 0'
                    // 0: 'Right Zero',
                    // 1: 'Right One'
                }
                , 'down': {
                    0: '0 0'
                    , 1: '-32px 0'
                    // 0: 'Down Zero',
                    // 1: 'Down One'
                }
            }

        };

        return game;
    };
});