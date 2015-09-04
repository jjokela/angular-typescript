var app;
(function (app) {
    var components;
    (function (components) {
        'use strict';
        var ConferenceThumbnailDirective = (function () {
            function ConferenceThumbnailDirective() {
                this.restrict = 'E';
                this.templateUrl = '../app/components/conference.directive.html';
                this.scope = { conference: "=conference" };
            }
            ConferenceThumbnailDirective.instance = function () {
                return new ConferenceThumbnailDirective;
            };
            return ConferenceThumbnailDirective;
        })();
        angular
            .module('app.components')
            .directive('appConferenceThumbnail', ConferenceThumbnailDirective.instance);
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
//# sourceMappingURL=conference.directive.js.map