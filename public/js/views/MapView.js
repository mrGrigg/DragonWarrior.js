define(['views/NodeView'], function(NodeView) {
    return Backbone.View.extend({
        tagName: 'div'
        , id: 'map'

        , initialize: function() {
            this.width = this.options.width;
            this.height = this.options.height;
        }

        , render: function() {
            this.setMapDimensions();

            return this;
        }

        , setMapDimensions: function() {
            this.$el.css({
                'width': this.width * 32,
                'height': this.height * 32
            });

            var nodeArray = this.generateNodeArray(this.width, this.height);
            this.drawNodes(nodeArray);
        }

        , generateNodeArray: function(width, height) {
            //Create the node array for the map
            var nodeArray = new Array(height);
            
            for (y=0; y < height; y++) {
                (function(y) { //Create a closure for y
                    nodeArray[y] = new Array(width);
                
                    for(x=0; x < width; x++) {
                        (function(x) {
                            nodeArray[y][x] = node = new NodeView({
                                y: y,
                                x: x
                            });
                        })(x); //Create a closure for x

                    }
                })(y);
            }

            return nodeArray;
        }

        , drawNodes: function(nodeArray) {
            _.each(nodeArray, function(nodeRow) {

                _.each(nodeRow, function(node) {
                    this.$el.append(node.render().el);
                }, this);

            }, this);
        }
    });
})