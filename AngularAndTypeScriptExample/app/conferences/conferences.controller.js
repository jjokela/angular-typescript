var app;
(function (app) {
    var conferences;
    (function (conferences) {
        'use strict';
        var ConferenceController = (function () {
            function ConferenceController(data, dataservice) {
                var vm = this;
                vm.conferences = data;
            }
            ConferenceController.$inject = ['app.conferences.data'];
            return ConferenceController;
        })();
        angular
            .module('app.conferences')
            .controller('Conference', ConferenceController);
    })(conferences = app.conferences || (app.conferences = {}));
})(app || (app = {}));
//# sourceMappingURL=conferences.controller.js.map