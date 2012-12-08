define(function(require) {
    var view
        // , Tiles = require('modules/Tiles')
        , TileView = require('modules/TileView');

    view Backbone.View.extend({
        id: 'palette'

        , initialize: function() {

        }

        , render: function() {
            // _.each(Tiles, this.renderTile, this);

            // return this;
        }

        , renderTile: function(data, name) {
            // var tileView = new TileView({
            //     data: data,
            //     name: name
            // });

            // this.$el.append(tileView.render().el);
        }
    });

    return view;
});
