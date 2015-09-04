var app;
(function (app) {
    var services;
    (function (services) {
        'use strict';
        var DataService = (function () {
            function DataService($http, $q, toastr) {
                this.$http = $http;
                this.$q = $q;
                this.toastr = toastr;
            }
            DataService.prototype.createConference = function (conference) {
                var _this = this;
                return this.$http
                    .post('/Home/Conference/Create/', conference)
                    .then(function (response) {
                    return response.data;
                })
                    .catch(function (reason) {
                    _this.toastr.error('Error when creating conference: ' + reason.statusText);
                    return _this.$q.reject(reason);
                });
            };
            DataService.prototype.deleteConference = function (id) {
                var _this = this;
                return this.$http
                    .delete('/Home/Conference/' + id)
                    .then(function (response) {
                    return response.data;
                })
                    .catch(function (reason) {
                    _this.toastr.error('Error when deleting conference: ' + reason.statusText);
                    return _this.$q.reject(reason);
                });
            };
            DataService.prototype.updateConference = function (conference) {
                var _this = this;
                return this.$http
                    .put('/Home/Conference/Edit/', conference)
                    .then(function (response) {
                    return response.data;
                })
                    .catch(function (reason) {
                    _this.toastr.error('Error when updating conference: ' + reason.statusText);
                    return _this.$q.reject(reason);
                });
            };
            DataService.prototype.getSpeakers = function () {
                var _this = this;
                return this.$http
                    .get('/api/Speakers')
                    .then(function (response) {
                    return response.data;
                })
                    .catch(function (reason) {
                    _this.toastr.error('Error when getting speakers: ' + reason.statusText);
                    return _this.$q.reject(reason);
                });
            };
            return DataService;
        })();
        factory.$inject = [
            '$http',
            '$q',
            'toastr'
        ];
        function factory($http, $q, toastr) {
            return new DataService($http, $q, toastr);
        }
        angular
            .module('app.services')
            .factory('dataservice', factory);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
//# sourceMappingURL=data.services.js.map