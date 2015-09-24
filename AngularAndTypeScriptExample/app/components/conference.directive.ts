module app.components {
    'use strict';
   
    class ConferenceThumbnailDirective implements ng.IDirective {
        static instance(): ng.IDirective {
            return new ConferenceThumbnailDirective;
        }

        restrict = 'E';
        require = 'ngModel';

        link(scope, element, attrs, ngModel) {            
            
            //Validation code goes here
            // This is just an example of how to do custom validation
            //console.log(scope.$id);
            if (scope.$id === 13) {
                ngModel.$setValidity('unique', false);
            }
        }

        templateUrl = 'app/components/conference.directive.html';
        
        scope = { conference: "=ngModel"};
    }

    angular
        .module('app.components')
        .directive('appConferenceThumbnail', ConferenceThumbnailDirective.instance);
}

