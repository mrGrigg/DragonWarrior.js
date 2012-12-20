define(function() {
    var that;

    return Backbone.View.extend({
        id: 'player'
        
        , initialize: function() {
            that = this;
            _.bindAll(this);

            this.currentKey = undefined; //records the current keypressed
            this.charStep = true; //Adjusted for the two sprite walk
            this.charSpeed = 600; //how fast the char moves
            this.stageWidth = 640;
            this.stageHeight = 480;
            
            $(document).keydown(this.handleKeyDown);
            $(document).keyup(this.handleKeyUp);
        }

        , render: function() {

            return this;
        }

        , handleKeyDown: function(event) {
            var hasQueue = this.$el.queue('fx').length >= 1;

            if (! this.currentKey && ! hasQueue) {
                this.currentKey = event.keyCode;

                switch(event.keyCode) {
                    case 38: this.moveCharacter('up');    break;
                    case 39: this.moveCharacter('right'); break;
                    case 40: this.moveCharacter('down');  break;
                    case 37: this.moveCharacter('left');  break;
                }
            }
        }

        , handleKeyUp: function(event) {
            //don't stop the walk if the player is pushing other buttons
            //only stop the walk if the key that started the walk is released
            if (event.keyCode === this.currentKey) {
                this.currentKey = false;
            }
        }

        , moveCharacter: function(direction) {
            //a player could switch key mid-animation
            //record the key that was down when animation started
            var that = this
                , moveDirection = {}
                , animationSpeed = this.charSpeed / 3
                , stepClass = this.setStepClass(direction)
                , continueMove = this.setContinueMove(direction, this.currentKey);

            //Initial step is right
            if (this.stepCharacter()) {
                stepClass('left');
                setTimeout(function() {
                    that.stepCharacter();
                    stepClass('right');
                }, animationSpeed);
                setTimeout(function() {
                    that.stepCharacter();
                    stepClass('left');
                }, animationSpeed * 2);
            }
            else {
                stepClass('right');
                setTimeout(function() {
                    that.stepCharacter();
                    stepClass('left');
                }, animationSpeed);
                setTimeout(function() {
                    that.stepCharacter();
                    stepClass('right');
                }, animationSpeed * 2);
            }

            if (! that.checkMove(direction)) {
                return false;
            }

            //Move the character
            switch (direction) {
                case 'down':
                    moveDirection = { top: '+=32' };
                    break;

                case 'up':
                    moveDirection = { top: '-=32' };
                    break;

                case 'left':
                    moveDirection = { left: '-=32' };
                    break;

                case 'right':
                    moveDirection = { left: '+=32' };
                    break;
            }

            this.$el.animate(moveDirection , that.charSpeed , 'linear', continueMove);
        }

        , checkMove: function(direction) {
            var characterTop = this.$el.position().top
                , characterLeft = this.$el.position().left;

            switch(direction) {
                case 'down':
                    return characterTop + 32 < this.stageHeight;

                case 'up':
                    return characterTop - 32 >= 0;

                case 'left':
                    return characterLeft -32 >= 0;

                case 'right':
                    return characterLeft + 32 < this.stageWidth;
            }
        }

        , stepCharacter: function() {
            this.charStep = ! this.charStep;

            return this.charStep;
        }

        , setContinueMove: function(direction, movementKey) {
            return function() {
                if (that.currentKey === movementKey) {
                    that.moveCharacter(direction);
                }
            };
        }

        , setStepClass: function(direction) {
            return function(className) {
                var stepClass = direction + '-' + className;
                that.$el.removeClass();
                that.$el.addClass(stepClass);
            };
        }
    });
});