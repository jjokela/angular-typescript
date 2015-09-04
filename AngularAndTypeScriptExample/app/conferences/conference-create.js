var app;
(function (app) {
    var conferences;
    (function (conferences) {
        'use strict';
        var ConferenceCreateController = (function () {
            function ConferenceCreateController(dataservice, details, $window) {
                var vm = this;
                vm.title = 'didle';
                vm.dataservice = dataservice;
                vm.conferenceDetails = details;
                vm.window = $window;
                vm.speakers = [];
                this.getSpeakers();
            }
            ConferenceCreateController.prototype.save = function () {
                var _this = this;
                if (this.conferenceDetails) {
                    this.dataservice.createConference(this.conferenceDetails).then(function () {
                        _this.window.location.href = '/home';
                    });
                }
            };
            ConferenceCreateController.prototype.getSpeakers = function () {
                var _this = this;
                this.dataservice.getSpeakers().then(function (data) {
                    _this.speakers = data;
                    console.log('laddad jee');
                });
            };
            ConferenceCreateController.$inject = ['dataservice', 'app.conferences.details', '$window'];
            return ConferenceCreateController;
        })();
        angular
            .module('app.conferences')
            .controller('ConferenceCreate', ConferenceCreateController);
    })(conferences = app.conferences || (app.conferences = {}));
})(app || (app = {}));
//# sourceMappingURL=conference-create.js.map