module app.conferences {
    'use strict';

    export interface IConferenceEditScope {
        // Variables
        conferenceDetails: server.Conference;
        dataservice: app.services.IDataService;
        speakers: server.Speaker[];
        timeout: ng.ITimeoutService;
        toastr: Toastr;
        window: ng.IWindowService;

        // Functions
        cancel: () => void;
        getSpeakers: () => void;
        save: () => void;
    }

    class ConferenceEditController implements IConferenceEditScope {

        // Variables
        conferenceDetails: server.Conference;
        dataservice: app.services.IDataService;
        speakers: server.Speaker[];
        timeout: ng.ITimeoutService;
        toastr: Toastr;
        window: ng.IWindowService;

        static $inject = ['app.conferences.details', 'dataservice', 'toastr', '$timeout', '$window'];

        constructor(details: server.Conference, dataservice: app.services.IDataService, toastr: Toastr, $timeout: ng.ITimeoutService, $window: ng.IWindowService) {

            var vm = this;
            vm.conferenceDetails = details;
            vm.dataservice = dataservice;
            vm.speakers = [];
            vm.timeout = $timeout;
            vm.toastr = toastr;
            vm.window = $window;

            this.getSpeakers();
        }

        cancel(): void {
            this.window.location.href = '/home/conference/' + this.conferenceDetails.id;
        }

        getSpeakers(): void {
            this.dataservice.getSpeakers().then((data: server.Speaker[]) => {
                this.speakers = data;
            });
        }

        save(): void {
            if (this.conferenceDetails) {
                this.dataservice.updateConference(this.conferenceDetails).then(() => {
                    this.toastr.success('Conference updated succesfully');
                    this.timeout(() => {
                        this.window.location.href = '/home/conference/' + this.conferenceDetails.id;
                    }, 1000);
                });
            }
        }
    }
    angular
        .module('app.conferences')
        .controller('ConferenceEdit', ConferenceEditController);
}
