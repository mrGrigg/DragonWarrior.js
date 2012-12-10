define(function(require) {
    var view = Backbone.View.extend({
        el: 'body'

        , initialize: function() {
            Backbone.Events.on('render:childView', this.renderChildView, this);
        }

        , render: function() {
            return this;
        }

        //Gets a view from the router and renders it as a singleton here
        , renderChildView: function(ViewClass) {
            if (typeof this.currentView !== 'undefined') {
                this.currentView.remove();
            }

            this.currentView = new ViewClass();

            this.$el.html(this.currentView.render().el);
        }
    });

    return view;
});