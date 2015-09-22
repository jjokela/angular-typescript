var app;
(function (app) {
    var conferences;
    (function (conferences) {
        'use strict';
        var ConferenceDetailsController = (function () {
            function ConferenceDetailsController(details, dataservice, toastr, $timeout, $window) {
                var vm = this;
                vm.conferenceDetails = details;
                vm.dataservice = dataservice;
                vm.timeout = $timeout;
                vm.toastr = toastr;
                vm.window = $window;
            }
            ConferenceDetailsController.prototype.delete = function () {
                var _this = this;
                if (this.conferenceDetails) {
                    this.dataservice.deleteConference(this.conferenceDetails.id).then(function () {
                        _this.toastr.success('Conference deleted succesfully');
                        _this.timeout(function () {
                            _this.window.location.href = '/home';
                        }, 1000);
                    });
                }
            };
            ConferenceDetailsController.$inject = ['app.conferences.details', 'dataservice', 'toastr', '$timeout', '$window'];
            return ConferenceDetailsController;
        })();
        angular
            .module('app.conferences')
            .controller('ConferenceDetails', ConferenceDetailsController);
    })(conferences = app.conferences || (app.conferences = {}));
})(app || (app = {}));
