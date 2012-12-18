define(['models/NodeModel'], function(Model) {
    var collection = Backbone.Collection.extend({
        model: Model

        , url: 'https://www.mongolab.com/api/1/databases/heroku_app9863758/collections/test?apiKey=50c75bede4b07fb7d902856e'
    });

    return collection;
});