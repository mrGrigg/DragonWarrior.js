define(['views/PaletteView', 'views/MapView', 'models/ExistingMaps'], function(Palette, Map, ExistingMaps) {
    var view;

    view = Backbone.View.extend({
        events: {
            'click .generateMap': 'generateMap'
            , 'click .loadExisting': 'loadExistingMap'
        }

        , initialize: function() {
            this.existingMaps = new ExistingMaps();
            this.existingMaps.fetch();
        }

        , render: function() {
            var options = this.template();
            this.$el.html(options);

            return this;
        }

        , getMapList: function() {

        }

        , loadExistingMap: function() {
            this.$el.append('<ul class="existing-maps"></ul>');
            var names = this.existingMaps.get('mapNames');

            _.each(names, function(name) {
                this.$('.existing-maps').append(this.existingMapTemplate(name));
            }, this);
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

        , addTile: function(tile) {
            this.testMap.add(tile);
        }

        , template: _.template('<div class="options"> \
                                            <span class="newMapOptions"> \
                                                <input type="text" class="mapHeight" placeholder="Map height" /> \
                                                <input type="text" class="mapWidth" placeholder="Map width" /> \
                                                <button class="generateMap">Generate map</button> \
                                                <button class="loadExisting">Load existing map</button> \
                                            </span> \
                                        </div>')

        , existingMapTemplate: _.template('<li><%= obj %></li>')
    });
    return view;
});