"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function once(fn) {
    var called = false, result;
    return function func() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (called) {
            return result;
        }
        called = true;
        result = fn.apply(this, args);
        fn = null;
        return result;
    };
}
exports.once = once;
