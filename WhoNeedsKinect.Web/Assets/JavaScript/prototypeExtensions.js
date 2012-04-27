var utils = (function () {
    var utils = {};
    utils.each = function (items, func) {
        var i = 0, l = items.length;
        for (i; i < l; i++) {
            func(items[i]);
        }
    };
    return utils;
})();

(function (Array, String, utils) {
    Array.prototype.each = function (func) {
        var items = this;
        utils.each(items, func);
    };
    Array.prototype.max = function () {
        return Math.max.apply(Math, this);
    };

    Array.prototype.min = function () {
        return Math.min.apply(Math, this);
    };
    String.prototype.startsWith = function (str) {
        return this.slice(0, str.length).toLowerCase() === str.toLowerCase();
    };
})(Array, String, utils);

(function (String) {
    String.prototype.formatWith = function (obj) {
        var str = this,
        type = typeof obj,
        i,
        l = arguments.length;
        if (type === 'object' && l === 1) {
            for (var prop in obj) {
                var r = new RegExp('{' + prop + '}', 'gi');
                str = str.replace(r, obj[prop]);
            }
        } else {
            for (i = 0; i < l; i += 1) {
                str = str.replace('{' + i + '}', arguments[i]);
            }
        }

        return str;
    };

})(String);
