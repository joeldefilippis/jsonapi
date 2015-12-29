'use strict';

describe('Controller: MaximilianCtrl', function () {

  // load the controller's module
  beforeEach(module('miProyectoAngularApp'));

  var MaximilianCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MaximilianCtrl = $controller('MaximilianCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MaximilianCtrl.awesomeThings.length).toBe(3);
  });
});
