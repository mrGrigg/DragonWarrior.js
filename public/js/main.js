require(['require'], function(require) {
    // require(['backbone'], function() {
        require(['views/DragonWarriorView'], function(DragonWarriorView) {
            var dragonWarriorView = new DragonWarriorView();
            dragonWarriorView.render();

            // var router = new Router();
            // Backbone.history.start({ pushState: true });
        });
    // });
});