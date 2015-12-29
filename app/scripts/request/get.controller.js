(function() {
  'use strict';

  angular.module('miProyectoAngularApp')
    .controller('RequestGetController', RequestGetController);

  function RequestGetController(
    $scope, object
  ) {
    $scope.object = object;
  }
})();
