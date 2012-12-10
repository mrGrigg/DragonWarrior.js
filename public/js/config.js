require.config({
paths: {
        'jquery': 'lib/jquery-1.8.2.min'
        , 'underscore': 'lib/underscore-min'
        , 'backbone': 'lib/backbone-min'
    }
    , shim: {
        'backbone':{
            deps:['underscore', 'jquery']
            , exports: 'Backbone'
        }
    }
});