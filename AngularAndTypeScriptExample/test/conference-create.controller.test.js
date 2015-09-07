/// <reference path="_references.js" />
describe('ConferenceCreate controller', function () {
    var controller, $q, $timeout, rootScope, dataServiceMock, loggerMock, windowMock;
    beforeEach(function () {
        module('app');
        dataServiceMock = jasmine.createSpyObj('dataservice', ['getSpeakers', 'createConference']);
        loggerMock = jasmine.createSpyObj('toastr', ['success']);
        windowMock = { location: { href: jasmine.createSpy() } };

        module(function ($provide) {
            $provide.value('dataservice', dataServiceMock);
            $provide.value('toastr', loggerMock);
            $provide.value('$window', windowMock);
            $provide.value('app.conferences.details', [{
                'Name': 'res1',
                'id': '123',
                Traps: [
                    { 'Key': '' },
                    { 'Key': 123 },
                    { 'Key': 456 }
                ]
            }]);
        });
    });

    beforeEach(inject(function ($controller, $rootScope, _$q_, _$timeout_) {
        $q = _$q_;
        $timeout = _$timeout_;
        rootScope = $rootScope;

        dataServiceMock.getSpeakers.and.returnValue($q.when([{ 'id': 1, 'name': 'test' }]));

        controller = $controller('ConferenceCreate');

        $rootScope.$apply();
    }));

    it('should create "conferenceDetails" model with one conference', function () {

        expect(controller.conferenceDetails.length).toBe(1);
        expect(controller.conferenceDetails[0].Name).toEqual('res1');
    });

    it('should do redirect when cancelling action', function () {

        controller.cancel();

        expect(windowMock.location.href).toContain('/home');
    });

    it('should create the conference', inject(function ($rootScope, $controller) {
        dataServiceMock.createConference.and.returnValue($q.when('returndata'));

        $scope = $rootScope.$new();

        var ctrl = $controller('ConferenceCreate', { $scope: $scope });

        ctrl.save({ 'id': 123 });

        $scope.$apply();

        expect(loggerMock.success).toHaveBeenCalled();

        $timeout.flush();

        expect(windowMock.location.href).toContain('/home');
    }));
});
