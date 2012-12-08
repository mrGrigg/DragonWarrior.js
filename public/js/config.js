require.config({
paths: {
        'jquery': 'lib/jquery-1.8.2.min'
        , 'underscore': 'lib/underscore-min'
        , 'backbone': 'lib/backbone-min'
        , 'handlebars': 'lib/handlebars-1.0.rc.1'
    }
    , shim: {
        'backbone':{
            deps:['underscore', 'jquery']
            , exports: 'Backbone'
        }
    }
});