define(['models/NodeModel'], function(Node) {
    return Backbone.View.extend({
        tagName: 'div'
        , className: 'mapNode empty'

        , events: {
            'dragenter': 'dragEnter'
            , 'dragover': 'dragOver'
            , 'drop': 'handleDrop'
        }

        , initialize: function() {
            this.model = new Node({
                x: this.options.x,
                y: this.options.y
            });

            this.dnd = 'application/json';
        }

        , render: function() {
            this.$el.addClass('coords[' + this.options.x +', ' + this.options.y +']');
            this.$el.attr('title', this.options.x +', ' + this.options.y);
            this.$el.attr('dropzone', 'copy application/json');

            return this;
        }

        , dragEnter: function(event) {
              event.dataTransfer.dropEffect = 'move';
              event.preventDefault();
              return false;
        }

        , dragOver: function(event) {
           event.dataTransfer.dropEffect = 'move';
           event.preventDefault();
           return false;
        }

        , handleDrop: function(event) {
            var data = event.dataTransfer.getData(this.dnd);

            //Add the new attributes to the node
            this.model.set(JSON.parse(data));

            var image = this.createTileImage();
            this.$el.html(image);
            this.$el.removeClass('empty');
        }

        , createTileImage: function() {
            var image = document.createElement('img');
            image.height = 32;
            image.width = 32;
            image.src = this.model.get('data');
            image.title = this.model.get('name');

            return image;
        }
    });
});