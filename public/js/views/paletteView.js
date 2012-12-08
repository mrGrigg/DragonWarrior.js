define(['views/TileView'], function(TileView) {
    return Backbone.View.extend({
        id: 'palette'

        , initialize: function() {

        }

        , render: function() {
            _.each(Tiles, this.renderTile, this);

            return this;
        }

        , renderTile: function(data, name) {
            var tileView = new TileView({
                data: data,
                name: name
            });

            this.$el.append(tileView.render().el);
        }
    });
});
