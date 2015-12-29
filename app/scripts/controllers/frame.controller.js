(function() {
  'use strict';

  angular.module('miProyectoAngularApp')
    .controller('FrameController', frameController);

  function frameController(
    $jsonapi,
    $scope
  ) {
    $scope.names = $jsonapi.listResources();

    $scope.localStoreSize = $jsonapi.sourceLocal.size;
  }
})();
