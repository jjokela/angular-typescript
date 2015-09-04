/// <reference path="_references.js" />
describe('Conferences controller', function () {
    var controller, q, rootScope, dataServiceMock, loggerMock;
    beforeEach(function () {
        module('app');
        //dataServiceMock = jasmine.createSpyObj('dataservice', ['postTraps', 'deleteTrap']);
        //loggerMock = jasmine.createSpyObj('logger', ['success']);

        // handle html5 confirm
        //spyOn(window, 'confirm').and.callFake(function () {
        //    return true;
        //});

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

    beforeEach(inject(function ($controller, $rootScope, _$q_) {
        controller = $controller('Conference');
        $rootScope.$apply();        
        rootScope = $rootScope;
    }));
    //beforeEach(inject(function ($controller, $rootScope, _$q_) {
    //    controller = $controller('Conference');
    //    $rootScope.$apply();
    //    $q = _$q_;
    //    rootScope = $rootScope;

    //}));

    it('should create "conferences" model with one conference', function () {

        expect(controller.conferences.length).toBe(1);
        expect(controller.conferences[0].Name).toEqual('res1');
    });
});