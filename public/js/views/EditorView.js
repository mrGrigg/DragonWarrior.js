define(['views/PaletteView', 'views/MapView'], function(Palette, Map) {
    var view;

    view = Backbone.View.extend({
        events: {
            'click .generateMap' : 'generateMap'
        }

        , initialize: function() {

        }

        , render: function() {
            var options = this.template();
            this.$el.html(options);

            return this;
        }

        , generateMap: function() {
            var width = parseInt(this.$('.mapWidth').val(), 10);
            var height = parseInt(this.$('.mapHeight').val(), 10);

            if (_.isNaN(width) || _.isNaN(height)) return false;

            var map = new Map({
                width: width,
                height: height
            });

            this.$('.newMapOptions').hide();
            this.$('.mapCommands').show();

            this.showPalette();

            this.$el.append(map.render().el);
        }

        , showPalette: function() {
            var palette = new Palette();
            this.$el.append(palette.render().el);
        }

        , template: _.template('<div class="options"> \
                                                    <span class="newMapOptions"> \
                                                        <input type="text" class="mapHeight" placeholder="Map height" /> \
                                                        <input type="text" class="mapWidth" placeholder="Map width" /> \
                                                        <button class="generateMap">Generate map</button> \
                                                    </span> \
                                                </div>')
    });
    return view;
});