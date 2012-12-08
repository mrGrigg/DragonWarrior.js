define(function() {
    return Backbone.View.extend({
        className: 'player',

        initialize: function() {
            _.bindAll(this, 'keyHandler', 'animate');
            
            var keyHandler = _.throttle(this.keyHandler, 250);
            $(document).bind('keydown', keyHandler);
        },

        render: function() {

            return this;
        }
    });
});