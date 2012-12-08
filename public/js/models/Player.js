define([], function() {
    return Backbone.Model.extend({
        defaults: {
            step: 0
            , movementDirection: 'down'
            , x: 0 //x coordinate
            , y: 0 //y coordinate
            , xMovement: 0 // delta value for x-movement
            , yMovement: 0 // delta value for y-movement
        }

        // move: function(direction) {
        //     //Player's current position
        //     var newPosition = {
        //         top: this.get('position').top,
        //         left: this.get('position').left
        //     };

        //     switch (direction) {
        //         case 'left':
        //             newPosition.left = newPosition.left - 32;
        //             break;
        //         case 'up':
        //             newPosition.top = newPosition.top - 32;
        //             break;
        //         case 'right':
        //             newPosition.left = newPosition.left + 32;
        //             break;
        //         case 'down':
        //             newPosition.top = newPosition.top + 32;
        //             break;
        //     }

        //     if (this.maxPosition(newPosition)) {
        //         this.set({position: newPosition});
        //         Backbone.Events.trigger('player:move', this.get('position'));
        //     }
        //     else {
        //         Backbone.Events.trigger('player:bump');
        //     }
        // },

        // step: function() {
        //     //Alternate the step
        //     var sprite = this.get('sprite');
        //     this.set({ sprite: !sprite }, {silent: true});

        //     //return the background coordinates
        //     switch (this.get('direction')) {
        //         case 'left':
        //             return sprite ? '0 -33px' : '-32px -33px';
        //         case 'up':
        //             return sprite ? '-64px -33px' : '-96px -33px';
        //         case 'right':
        //             return sprite ? '-65px 0' : '-97px 0';
        //         case 'down':
        //             return sprite ? '0 0' : '-32px 0';
        //     }
        // },

        // maxPosition: function(position) {
        //     var max = {
        //         top: 0,
        //         left: 0,
        //         right: this.get('screen').width - 32,
        //         bottom: this.get('screen').height - 32
        //     };

        //     if (position.top < max.top) return false;
        //     if (position.top > max.bottom) return false;
        //     if (position.left < max.left) return false;
        //     if (position.left > max.right) return false;

        //     return true;
        // }
    });
});