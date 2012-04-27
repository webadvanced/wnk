(function ($, app) {
    var events = {},
        render,
        hub,
        elements = {
            ball: $('#ball')
        };

    events.load = function () {
        $.connection.hub.start();
    };

    render = function (position) {
        elements.ball.css({ top: position.Y + 'px', left: position.X + 'px' });
    };

    app.positionController = {};
    app.positionController.init = function () {
        hub = $.connection.communicationHub;
        hub.renderPosition = render;
        app.bootstrap(events.load);
    };
})($, app);