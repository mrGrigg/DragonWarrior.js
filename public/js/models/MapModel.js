define([], function() {
    var model = Backbone.Model.extend({
        idAttribute: '_id'
    });

    return model;
});