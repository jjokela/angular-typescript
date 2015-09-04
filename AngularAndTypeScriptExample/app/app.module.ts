((): void => {
    "use strict";

    angular.module("app", [
        'app.services',
        'app.conferences',
        'app.components',
        'ngSanitize',
        'ngAnimate',
        'ui.select',
        'toastr'
    ]);
})(); 