define(['modules/Tiles', 'views/TileView'], function(Tiles, TileView) {
    return Backbone.View.extend({
        id: 'palette'

        , initialize: function() {

        }

        , render: function() {
            var tiles = $('<div></div>');
            _.each(Tiles, function(data, name) {
                var tileView = new TileView({
                    data: data,
                    name: name
                });

                tiles.append(tileView.render().el);
            }, this);

            this.$el.html(tiles);

            return this;
        }
    });
});
