require(['require', 'config'], function(require) {
    require(['backbone'], function() {
        require(['views/DragonWarriorView'], function(DragonWarriorView) {
            var dragonWarriorView = new DragonWarriorView();
            dragonWarriorView.render();
        });
    });
});