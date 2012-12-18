define([], function() {
    return Backbone.Model.extend({
        defaults: {
            x: 0
            , y: 0
            , name: 'grass'
            , move: 1
            , damage: 0
            , action: {
                search: ''
                , talk: ''
                , stairs: ''
                , auto: false
            }
            , encounter: {
                level: '1-2'
                , monster: 'random'
                , percentage: 0.25
            }
        }
    });
});