var app;
(function (app) {
    var conferences;
    (function (conferences) {
        'use strict';
        var ConferenceCreateController = (function () {
            function ConferenceCreateController(details, dataservice, toastr, $timeout, $window) {
                var vm = this;
                vm.conferenceDetails = details;
                vm.dataservice = dataservice;
                vm.speakers = [];
                vm.timeout = $timeout;
                vm.toastr = toastr;
                vm.window = $window;
                this.getSpeakers();
            }
            ConferenceCreateController.prototype.cancel = function () {
                this.window.location.href = '/home';
            };
            ConferenceCreateController.prototype.getSpeakers = function () {
                var _this = this;
                this.dataservice.getSpeakers().then(function (data) {
                    _this.speakers = data;
                });
            };
            ConferenceCreateController.prototype.save = function () {
                var _this = this;
                if (this.conferenceDetails) {
                    this.dataservice.createConference(this.conferenceDetails).then(function () {
                        _this.toastr.success('Conference created succesfully');
                        _this.timeout(function () {
                            _this.window.location.href = '/home';
                        }, 1000);
                    });
                }
            };
            ConferenceCreateController.$inject = ['app.conferences.details', 'dataservice', 'toastr', '$timeout', '$window'];
            return ConferenceCreateController;
        })();
        angular
            .module('app.conferences')
            .controller('ConferenceCreate', ConferenceCreateController);
    })(conferences = app.conferences || (app.conferences = {}));
})(app || (app = {}));
