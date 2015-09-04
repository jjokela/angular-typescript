module app.conferences {
    'use strict';

    interface IConferenceScope {
        // Variables
        conferences: server.Conference[];
        dataservice: app.services.IDataService;
    }

    class ConferenceController implements IConferenceScope {

        // Variables
        conferences: server.Conference[];
        dataservice: app.services.IDataService;

        static $inject = ['dataservice', 'app.conferences.data'];

        constructor(dataservice: app.services.IDataService, data: server.Conference[], toastr: Toastr) {
            var vm = this;            
            vm.dataservice = dataservice;
            vm.conferences = data;            
        }
    }
    angular
        .module('app.conferences')
        .controller('Conference', ConferenceController);
}
