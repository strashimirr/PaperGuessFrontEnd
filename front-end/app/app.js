(function () {
    'use strict';
    // var env = {};

    // Import variables if present (from env.js)
    // if (window) {
    //     if (typeof Object.assign != 'function') {
    //         Object.assign = function (target) {
    //             'use strict';
    //             if (target == null) {
    //                 throw new TypeError('Cannot convert undefined or null to object');
    //             }
    //
    //             target = Object(target);
    //             for (var index = 1; index < arguments.length; index++) {
    //                 var source = arguments[index];
    //                 if (source != null) {
    //                     for (var key in source) {
    //                         if (Object.prototype.hasOwnProperty.call(source, key)) {
    //                             target[key] = source[key];
    //                         }
    //                     }
    //                 }
    //             }
    //             return target;
    //         };
    //     }
    //     Object.assign(env, window.__env);
    //
    // }
    angular
        .module('MoviesApp', [
            'ngMaterial',
            'ngRoute',
            'ngMessages',
            'angularUtils.directives.dirPagination',
            'ui.router'
        ]);
})();