define(['views/NodeView', 'models/NodeCollection'], function(NodeView, NodeCollection) {
    return Backbone.View.extend({
        tagName: 'div'
        , id: 'map'

        , initialize: function() {
           // this.testMap = new TestMap();

            Backbone.Events.on('node:create', this.addNode, this);

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

        // , createColumnFunction: function(width) {
        //     return function(y) {
        //         var nodeArray[] = new Array(width);
        //         for (var x = 0; x < width; x++) {

        //         }
        //     };
        // }

        , addNode: function(node) {
            this.testMap.add(node);
            //console.log(node);
        }
    });
});