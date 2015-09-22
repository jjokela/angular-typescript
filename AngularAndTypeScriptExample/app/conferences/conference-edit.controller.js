var app;
(function (app) {
    var conferences;
    (function (conferences) {
        'use strict';
        var ConferenceEditController = (function () {
            function ConferenceEditController(details, dataservice, toastr, $timeout, $window) {
                var vm = this;
                vm.conferenceDetails = details;
                vm.dataservice = dataservice;
                vm.speakers = [];
                vm.timeout = $timeout;
                vm.toastr = toastr;
                vm.window = $window;
                this.getSpeakers();
            }
            ConferenceEditController.prototype.cancel = function () {
                this.window.location.href = '/home/conference/' + this.conferenceDetails.id;
            };
            ConferenceEditController.prototype.getSpeakers = function () {
                var _this = this;
                this.dataservice.getSpeakers().then(function (data) {
                    _this.speakers = data;
                });
            };
            ConferenceEditController.prototype.save = function () {
                var _this = this;
                if (this.conferenceDetails) {
                    this.dataservice.updateConference(this.conferenceDetails).then(function () {
                        _this.toastr.success('Conference updated succesfully');
                        _this.timeout(function () {
                            _this.window.location.href = '/home/conference/' + _this.conferenceDetails.id;
                        }, 1000);
                    });
                }
            };
            ConferenceEditController.$inject = ['app.conferences.details', 'dataservice', 'toastr', '$timeout', '$window'];
            return ConferenceEditController;
        })();
        angular
            .module('app.conferences')
            .controller('ConferenceEdit', ConferenceEditController);
    })(conferences = app.conferences || (app.conferences = {}));
})(app || (app = {}));
//# sourceMappingURL=conference-edit.controller.js.map