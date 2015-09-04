module app.services {
    'use strict';

    export interface IDataService {        
        createConference(conference: server.Conference): ng.IPromise<any>;
        deleteConference(id: number): ng.IPromise<any>;
        updateConference(conference: server.Conference): ng.IPromise<any>;

        getSpeakers: () => ng.IPromise<server.Speaker[]>;
    }

    class DataService implements IDataService {

        createConference(conference: server.Conference): ng.IPromise<any> {
            return this.$http
                .post('/Home/Conference/Create/', conference)
                .then((response: ng.IHttpPromiseCallbackArg<any>): ng.IPromise<any> => {
                    return response.data;
                })
                .catch((reason: any): any => {
                    this.toastr.error('Error when creating conference: ' + reason.statusText);
                    return this.$q.reject(reason);
                });
        }

        deleteConference(id: number): ng.IPromise<any> {
            return this.$http
                .delete('/Home/Conference/' + id)
                .then((response: ng.IHttpPromiseCallbackArg<any>): ng.IPromise<any> => {
                    return response.data;
                })
                .catch((reason: any): any => {
                    this.toastr.error('Error when deleting conference: ' + reason.statusText);
                    return this.$q.reject(reason);
                });
        }

        updateConference(conference: server.Conference): ng.IPromise<any> {
            return this.$http
                .put('/Home/Conference/Edit/', conference)
                .then((response: ng.IHttpPromiseCallbackArg<any>): ng.IPromise<any> => {
                    return response.data;
                })
                .catch((reason: any): any => {
                    this.toastr.error('Error when updating conference: ' + reason.statusText);
                    return this.$q.reject(reason);
                });
        }

        getSpeakers(): ng.IPromise<any> {
            return this.$http
                .get('/api/Speakers')
                .then((response: ng.IHttpPromiseCallbackArg<server.Speaker[]>): server.Speaker[] => {
                    return response.data;
                })
                .catch((reason: any): any => {
                    this.toastr.error('Error when getting speakers: ' + reason.statusText);
                    return this.$q.reject(reason);
                });
        }        

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private toastr: Toastr) {
        }
    }

    factory.$inject = [
        '$http',
        '$q',
        'toastr'
    ];

    function factory($http: ng.IHttpService, $q: ng.IQService, toastr: Toastr) {
        return new DataService($http, $q, toastr);
    }

    angular
        .module('app.services')
        .factory('dataservice',
            factory);
}
