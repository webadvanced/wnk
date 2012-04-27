(function ($, exports) {
    var app = {},
        bootstrapper = [];
    app.bootstrap = function (func) {
        bootstrapper.push(func);
    };
    app.init = function () {
        $(function () {
            bootstrapper.each(function (func) {
                func();
            });
        });
    };
    if (!exports.app) {
        exports.app = app;
    }
})(jQuery, window);