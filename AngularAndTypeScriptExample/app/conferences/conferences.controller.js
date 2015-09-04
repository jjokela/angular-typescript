var app;
(function (app) {
    var conferences;
    (function (conferences) {
        'use strict';
        var ConferenceController = (function () {
            function ConferenceController(dataservice, data, toastr) {
                var vm = this;
                vm.dataservice = dataservice;
                vm.conferences = data;
            }
            ConferenceController.$inject = ['dataservice', 'app.conferences.data'];
            return ConferenceController;
        })();
        angular
            .module('app.conferences')
            .controller('Conference', ConferenceController);
    })(conferences = app.conferences || (app.conferences = {}));
})(app || (app = {}));
//# sourceMappingURL=conferences.controller.js.map