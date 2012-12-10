require(['require'], function(require) {
    require(['views/EditorView'], function(EditorView) {
        var editorView = new EditorView();
        editorView.render();
    });
});