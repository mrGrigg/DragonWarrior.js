define([], function() {
    var model = Backbone.Model.extend({
        //url: 'https://www.mongolab.com/api/1/databases/maps/collections/mapNames?apiKey=50c75bede4b07fb7d902856e'
        urlRoot: 'https://www.mongolab.com/api/1/databases/maps/collections/mapNames?apiKey=50c75bede4b07fb7d902856e'

        , parse: function(data) {
            var maps = {
                id: data[0]._id.$oid
                , mapNames: _.toArray(data[0].mapNames)
            };

            return maps;
        }

        // , parse: function(data) {
        //     data.shift(); data.shift();
            
        //     return data;
        // }
    });

    return model;
});