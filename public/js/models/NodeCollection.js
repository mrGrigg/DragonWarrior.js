define(['models/NodeModel'], function(Model) {
    var collection = Backbone.Collection.extend({
        model: Model

        , url: ''
    });

    return collection;
});