define(function(require) {
    var that
        , view
        , Player = require('views/PlayerView');

    view = Backbone.View.extend({
        className: 'gameView'

        , events: {

        }
        
        , initialize: function() {

        }

        , render: function() {
            var player = new Player();
            this.$el.append(player.render().el);

            return this;
        }
    });

    return view;
});