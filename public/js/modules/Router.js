define(['views/GameView', 'views/MapEditorView'], function(GameDemoView, MapEditorView) {
    return Backbone.Router.extend({
        initialize: function() {
            //All routable views are registered in this view array
            this.routeViews = {
                GameDemoView: require('views/GameView')
                , MapEditorView: require('views/MapEditorView')
            };
        }

        , routes: {
            '': 'getDemoView',
            'editor': 'getEditorView'
        }

        , getDemoView: function() {
            Backbone.Events.trigger('render:childView', this.routeViews.GameDemoView);
        }

        , getEditorView: function() {
            Backbone.Events.trigger('render:childView', this.routeViews.MapEditorView);
        }

        // , getHomeView: function() {
        //     //Trigger the view selected event
        //     Backbone.Events.trigger('render:childView', this.routeViews['GameDemoView']);
        // }

        // //Get the course selection view
        // , getRouteView: function(route) {
        //     var routeArray = this.getRouteArray(route)
        //         , viewName = this.matchRouteView(routeArray)
        //         , viewClass = this.routeViews[viewName];

        //     //Trigger the view selected event
        //     Backbone.Events.trigger('render:childView', viewClass);
        // }

        // //Iterate over the routes by order of specificity or return the default view
        // , matchRouteView: function(routeArray) {
        //     //Window starts out the same size as the length of the route array
        //     var windowSize = routeArray.length
        //         , viewName;

        //     //Each iteration will shrink the window size by one
        //     for (var i = 0; i < routeArray.length; i++) {

        //         //Shift the view from right to left
        //         for (var index = i; index >= 0; index--) {
        //             //See if the value of the window matches a view name
        //             viewName = this.getViewName(routeArray, windowSize, index);

        //             //Use the viewName to look for a View
        //             if (this.routeViews.hasOwnProperty(viewName + 'View')) {
        //                 return viewName + 'View';
        //             }
        //         }

        //         //The window size will shrink from full length down to a single index
        //         windowSize --;
        //     }

        //     //When now view matches the default view is returned
        //     return this.defaultView;
        // }

        // //Build a veiwName based on the current route window
        // , getViewName: function(routeArray, windowSize, start) {
        //     var viewName = ''
        //         , item;

        //     //Build the viewName from each of the items within the window
        //     for (item = start; item < windowSize; item++) {
        //         //Add each item to the viewName and look for a matching view
        //         viewName = viewName + routeArray[item];
        //     }

        //     return viewName;
        // }

        // //Split the route into an array and capitalize each value
        // , getRouteArray: function(route) {
        //     route = _.compact(route.split('/'));

        //     //I'm using underscore for browser compatability
        //     _.each(route, function(value, index, array) {
        //         //Hax for memorize routes
        //         if (value === 'All-Verses' || value === 'Pick-a-Verse') {
        //             //Just get the first word of the value
        //             value = value.split('-')[0];
        //         }

        //         //Make sure each piece starts with a capitol letter
        //         array[index] = value.charAt(0).toUpperCase() + value.slice(1);
        //     }, this);

        //     return route;
        // }

        // , matchViewName: function(viewName) {
        //     return this.getView.hasOwnProperty(viewName);
        // }
    });
});