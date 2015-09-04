module app.conferences {
    'use strict';

    interface IConferenceDetailsScope {
        // Variables
        conferenceDetails: server.Conference;
        dataservice: app.services.IDataService;
        timeout: ng.ITimeoutService;
        toastr: Toastr;
        window: ng.IWindowService;

        // Functions
        delete: () => void;
    }

    class ConferenceDetailsController implements IConferenceDetailsScope {

        // Variables
        conferenceDetails: server.Conference;
        dataservice: app.services.IDataService;
        timeout: ng.ITimeoutService;
        toastr: Toastr;
        window: ng.IWindowService;

        static $inject = ['app.conferences.details', 'dataservice', 'toastr', '$timeout', '$window'];        

        constructor(details: server.Conference, dataservice: app.services.IDataService, toastr: Toastr, $timeout: ng.ITimeoutService, $window: ng.IWindowService) {
                    
            var vm = this;
            vm.conferenceDetails = details;
            vm.dataservice = dataservice;
            vm.timeout = $timeout;
            vm.toastr = toastr;
            vm.window = $window;
        }

        delete(): void {
            if (this.conferenceDetails) {
                this.dataservice.deleteConference(this.conferenceDetails.id).then(() => {
                    this.toastr.success('Conference deleted succesfully');
                    this.timeout(() => {
                        this.window.location.href = '/home';                    
                    }, 1000);
                });
            }
        }        
    }
    angular
        .module('app.conferences')
        .controller('ConferenceDetails', ConferenceDetailsController);
}
