'use strict';

describe('Controller: TareasCtrl', function () {

  // load the controller's module
  beforeEach(module('miProyectoAngularApp'));

  var TareasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TareasCtrl = $controller('TareasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TareasCtrl.awesomeThings.length).toBe(3);
  });
});
