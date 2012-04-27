(function ($, app) {
    var template;
    app.position = {};
    app.position.render = function (position, container) {
        container.prepend(template.formatWith(position));
    };
    template = '<li>Position X : {X} Position Y : {Y}</li>';
})(jQuery, app);