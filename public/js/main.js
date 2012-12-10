require(['require', 'config'], function(require) {
    require(['backbone'], function() {
        require(['views/DragonWarriorView', 'modules/Router'], function(DragonWarriorView, Router) {
            var dragonWarriorView = new DragonWarriorView();
            dragonWarriorView.render();

            var router = new Router();
            Backbone.history.start({ pushState: true });
        });
    });
});