define([], function() {
    return function() {
        var defaults = {
            step: 0
            , movementDirection: 'down'
            , x: 0 //x coordinate
            , y: 0 //y coordinate
            , xMovement: 0 // delta value for x-movement
            , yMovement: 0 // delta value for y-movement
            , isMoving: false
        };

        var functions = {
            xMove: function(value) {
                this.isMoving = true;

                this.xMovement = value;
            }

            , yMove: function(value) {
                this.isMoving = true;

                this.yMovement = value;
            }

            , setMovement: function() {
                
            }
        };

        _.extend(this, defaults, functions);

        return this;
    };
});