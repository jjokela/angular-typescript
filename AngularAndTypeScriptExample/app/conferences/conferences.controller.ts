module app.conferences {
    'use strict';

    interface IConferenceScope {
        // Variables
        conferences: server.Conference[];
    }

    class ConferenceController implements IConferenceScope {

        // Variables
        conferences: server.Conference[];

        static $inject = ['app.conferences.data'];

        constructor(data: server.Conference[], dataservice: app.services.IDataService) {
            var vm = this;            
            vm.conferences = data;                       
        }
    }
    angular
        .module('app.conferences')
        .controller('Conference', ConferenceController);
}
