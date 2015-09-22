describe('Dataservice', function () {
    var $httpBackend, loggerMock, mockDataservice;
    beforeEach(function () {
        module('app');       
        loggerMock = jasmine.createSpyObj('toastr', ['error']);        

        module(function ($provide) {            
            $provide.value('toastr', loggerMock);            
        });
    });

    beforeEach(inject(function (_$httpBackend_, dataservice) {
        $httpBackend = _$httpBackend_;
        mockDataservice = dataservice;
    }));

    it('should call error when getting speakers responds error', function () {

        $httpBackend.whenGET('/api/Speakers').respond(500, '');
        var promise = mockDataservice.getSpeakers();
        $httpBackend.flush();

        expect(loggerMock.error).toHaveBeenCalled();
    });

    it('should succesfully get speakers', function () {

        var speakers = [{id: 1, name: 'test'}];

        $httpBackend.whenGET('/api/Speakers').respond(200, speakers);

        var promise = mockDataservice.getSpeakers();
        var actual;
        promise.then(function(data) {
            actual = data;
        });
        $httpBackend.flush();

        expect(actual).toEqual(speakers);
    });

    it('should call error when create conference responds error', function () {

        var conference = [{ id: 1, name: 'test' }];

        $httpBackend.whenPOST('/Home/Conference/Create/', conference).respond(500, '');
        var promise = mockDataservice.createConference(conference);
        $httpBackend.flush();

        expect(loggerMock.error).toHaveBeenCalled();
    });

    it('should return succesfully create conference', function () {

        var conference = [{ id: 1, name: 'test' }];

        $httpBackend.whenPOST('/Home/Conference/Create/', conference).respond(200, conference);

        var promise = mockDataservice.createConference(conference);

        var actual;
        promise.then(function (data) {
            actual = data;
        });
        $httpBackend.flush();

        expect(actual).toEqual(conference);
        expect(loggerMock.error).not.toHaveBeenCalled();
    });

    it('should call error when delete conference responds error', function () {

        var conference = [{ id: 1, name: 'test' }];
        var id = 123;

        $httpBackend.whenDELETE('/Home/Conference/' + id).respond(500, '');
        var promise = mockDataservice.deleteConference(id);
        $httpBackend.flush();

        expect(loggerMock.error).toHaveBeenCalled();
    });

    it('should return succesfully delete conference', function () {

        var conference = [{ id: 1, name: 'test' }];
        var id = 123;

        $httpBackend.whenDELETE('/Home/Conference/' + id).respond(200, conference);
        var promise = mockDataservice.deleteConference(id);

        var actual;
        promise.then(function (data) {
            actual = data;
        });
        $httpBackend.flush();

        expect(actual).toEqual(conference);
        expect(loggerMock.error).not.toHaveBeenCalled();
    });

    it('should call error when update conference responds error', function () {

        var conference = [{ id: 1, name: 'test' }];        

        $httpBackend.whenPUT('/Home/Conference/Edit/', conference).respond(500, '');
        var promise = mockDataservice.updateConference(conference);
        $httpBackend.flush();

        expect(loggerMock.error).toHaveBeenCalled();
    });

    it('should succesfully update conference', function () {

        var conference = [{ id: 1, name: 'test' }];
        var id = 123;

        $httpBackend.whenPUT('/Home/Conference/Edit/', conference).respond(200, conference);
        var promise = mockDataservice.updateConference(conference);

        var actual;
        promise.then(function (data) {
            actual = data;
        });
        $httpBackend.flush();

        expect(actual).toEqual(conference);
        expect(loggerMock.error).not.toHaveBeenCalled();
    });
});
