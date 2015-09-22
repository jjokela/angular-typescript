describe('Conference directive', function () {
    var $compile,
        $rootScope;

    var conference = {
        name: 'conference name',
        id: 'conferenceid',
        description: 'desc',
        speaker: {
            name: 'speaker name'
        }
    };

    // Load the myApp module, which contains the directive
    beforeEach(module('app', 'app/components/conference.directive.html'));

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function (_$compile_, _$rootScope_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $rootScope.conference = conference;
    }));

    it('Replaces the element with the appropriate content', function () {
        // Compile a piece of HTML containing the directive
        var element = $compile('<app-conference-thumbnail conference="conference"></app-conference-thumbnail>')($rootScope);

        // fire all the watches, so the scope expression will be evaluated
        $rootScope.$digest();      

        var el = $(element.html());

        var id = el.attr('href');
        var name = el.attr('alt');
        var description = el.find('span').eq(1).text();
        var speaker = el.find('span').eq(3).text();

        // Check that the compiled element contains the templated content
        expect(id).toBe("/home/conference/conferenceid");
        expect(name).toBe("conference name");
        expect(description).toBe("desc");
        expect(speaker).toBe("speaker name");
    });
});