var app;
(function (app) {
    var components;
    (function (components) {
        'use strict';
        var ConferenceThumbnailDirective = (function () {
            function ConferenceThumbnailDirective() {
                this.restrict = 'E';
                this.require = 'ngModel';
                this.templateUrl = 'app/components/conference.directive.html';
                this.scope = { conference: "=ngModel" };
            }
            ConferenceThumbnailDirective.instance = function () {
                return new ConferenceThumbnailDirective;
            };
            ConferenceThumbnailDirective.prototype.link = function (scope, element, attrs, ngModel) {
                //Validation code goes here
                // This is just an example of how to do custom validation
                //console.log(scope.$id);
                if (scope.$id === 13) {
                    ngModel.$setValidity('unique', false);
                }
            };
            return ConferenceThumbnailDirective;
        })();
        angular
            .module('app.components')
            .directive('appConferenceThumbnail', ConferenceThumbnailDirective.instance);
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
//# sourceMappingURL=conference.directive.js.map