define(function(require) {
    var Player = require('models/Player')
        , view = Backbone.View.extend({
            className: 'gameView'
                    
            , _pressed: {}
            , _left: 37
            , _up: 38
            , _right: 39
            , _down: 40

            , initialize: function() {
                var that = this;

                _.bindAll(this, 'gameLoop');

                $(document).on('keydown', function(event) {
                    //that.onKeydown(event);
                    that._pressed[event.keyCode] = true;
                    // console.log('keydown:', that._pressed);
                });

                $(document).on('keyup', function(event) {
                    //that.onKeyup(event);
                    //delete that._pressed[event.keyCode];
                    // console.log('keyup:', that._pressed);
                });

                this.frame = 1; //Seed the frame rate to loop from 1 - 30
                //this.fps = 1000/64; //~30 fps
                this.fps = 1000/32; //~30 fps
                //this.fps = 1000/100; //~10 fps
                this.frameRate = Math.round(this.fps);

                var player = new Player();
                this.player = player.toJSON();
                //this.game = new GameLoop(this.player.toJSON(), this.loop);
            }

            , render: function() {
                this.drawPlayer();

                this.loop = setInterval(this.gameLoop, this.fps);

                return this;
            }

            , drawPlayer: function() {
                this.$el.append('<div class="player" />');
            }

            , gameLoop: function() {
                this.frame = this.frame < this.frameRate ? this.frame + 1 : 1; //Loop the frame count

                this.gameLogic(); //Parse logic
                this.gameEvents(); //Check events
                this.gameRender(); //Render images
            }

            , gameLogic: function() {
                //Parse game logic
                
                //Is move available
                //Check for environment effects (damage, slow, poison)
                //Check for encounters
            }

            , gameEvents: function() {

            }

            , gameRender: function() {
                this.step();
                this.move();
                //Scroll the world
            }

            //Events
            , move: function() {
                if (this._pressed[this._left]) {
                    this.player.xMovement = -32;
                    this.player.movementDirection = 'left';
                    // console.log('left');
                }

                if (this._pressed[this._up]) {
                    this.player.yMovement = -32;
                    this.player.movementDirection = 'up';
                    // console.log('up');
                }

                if (this._pressed[this._right]) {
                    this.player.xMovement = 32;
                    this.player.movementDirection = 'right';
                    // console.log('right');
                }

                if (this._pressed[this._down]) {
                    this.player.yMovement = 32;
                    this.player.movementDirection = 'down';
                    // console.log('down');
                }

                this._pressed = {};

                if (this.player.xMovement === 0 && this.player.yMovement === 0) {
                    return false; //no movement
                }

                if (! this.moveAvailable()) {
                    this.player.xMovement = 0;
                    this.player.yMovement = 0;

                    return false;
                }

                //console.log('movement:', this.player.xMovement, this.player.yMovement);

                //Calculate new movement
                this.player.x = this.player.x + this.player.xMovement;
                this.player.y = this.player.y + this.player.yMovement;
                
                //Reset x and y movement
                this.player.xMovement = 0;
                this.player.yMovement = 0;

                //delete that._pressed[event.keyCode];
                this.direction();
                this.$('.player').animate({
                    top: this.player.y
                    , left: this.player.x
                }, 0);
            }

            //Logic
            , moveAvailable: function() {
                //Check for obstructions
                var moveAvailable = true
                    , position = {};

                this.max = {
                    top: 0,
                    left: 0,
                    right: this.$el.width() - 32,
                    bottom: this.$el.height() - 32
                };

                position.left = this.player.x + this.player.xMovement;
                position.top = this.player.y + this.player.yMovement;

                if (position.top < this.max.top) moveAvailable = false;
                if (position.top > this.max.bottom) moveAvailable = false;
                if (position.left < this.max.left) moveAvailable = false;
                if (position.left > this.max.right) moveAvailable = false;
                
                // console.log('move available:', moveAvailable, 'position:', position, 'max:', this.max);
                
                return moveAvailable;
            }

            //Render Functions
            , step: function() {
                var stepRate = Math.round(this.frameRate / 2);
                var step = this.frame <= stepRate ? 0 : 1;

                if (this.player.step != step) {
                    this.player.step = step;

                    this.setPlayerSprite(this.sprite4x2[this.player.movementDirection][this.player.step]);
                }
            }

            , direction: function() {
                this.setPlayerSprite(this.sprite4x2[this.player.movementDirection][this.player.step]);
            }

            // , walk: function(direction) {
            //     this.player.movementDirection = direction;

            //     this.setPlayerSprite(this.sprite4x2[this.player.movementDirection][this.player.step]);
            //     this.move(direction);
            // }

            , setPlayerSprite: function(playerSprite) {
                this.$('.player').css({ 'background-position': playerSprite });
            }

            //Sprites that walk in four directions with a two frame walk
            , sprite4x2: {
                'left': {
                    0:  '0 -33px'
                    , 1: '-32px -33px'
                }
                , 'up': {
                    0: '-64px -33px'
                    , 1: '-96px -33px'
                }
                , 'right': {
                    0: '-65px 0'
                    , 1: '-97px 0'
                }
                , 'down': {
                    0: '0 0'
                    , 1: '-32px 0'
                }
            }
        });

    return view;
});