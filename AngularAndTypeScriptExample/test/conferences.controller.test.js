/// <reference path="_references.js" />
describe('Conferences controller', function () {
    var controller, rootScope, dataServiceMock;
    beforeEach(function () {
        module('app');

        module(function ($provide) {
            $provide.value('dataservice', dataServiceMock);            
            $provide.value('app.conferences.data', [{
                'Name': 'res1',
                Traps: [
                    { 'Key': '' },
                    { 'Key': 123 },
                    { 'Key': 456 }
                ]
            }]);
        });
    });

    beforeEach(inject(function ($controller, $rootScope) {
        controller = $controller('Conference');
        $rootScope.$apply();        
        rootScope = $rootScope;
    }));

    it('should create "conferences" model with one conference', function () {

        expect(controller.conferences.length).toBe(1);
        expect(controller.conferences[0].Name).toEqual('res1');
    });
});