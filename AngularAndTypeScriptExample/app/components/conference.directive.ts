module app.components {
    'use strict';
   
    class ConferenceThumbnailDirective implements ng.IDirective {
        static instance(): ng.IDirective {
            return new ConferenceThumbnailDirective;
        }

        restrict = 'E';
        templateUrl = 'app/components/conference.directive.html';
        
        scope = { conference: "=conference"};
    }

    angular
        .module('app.components')
        .directive('appConferenceThumbnail', ConferenceThumbnailDirective.instance);
}

