define(function() {
    return Backbone.View.extend({
        className: 'paletteTile'

        , events: {
            'dragstart': 'dragStart'
        }

        , initialize: function() {
            jQuery.event.props.push('dataTransfer');

            this.model = {
                name: this.options.name,
                data: this.options.data
            };

            this.dnd = 'application/json';
        }

        , render: function() {
            this.$el.attr('id', this.options.name);
            
            var image = this.createTileImage();
            this.$el.append(image);
            this.$el.attr('draggable', true);

            return this;
        }

        , createTileImage: function() {
            var image = document.createElement('img');
            image.height = 32;
            image.width = 32;
            image.src = this.model.data;
            image.title = this.model.name;

            return image;
        }

        , dragStart: function(event) {
            if (event.target instanceof(HTMLImageElement)) {       
                var data = JSON.stringify(this.model);
                event.dataTransfer.setData(this.dnd, data);
                event.dataTransfer.setDragImage(event.target, 0, 0);
            }
            else {
                event.preventDefault();
            }
        }
    });
})