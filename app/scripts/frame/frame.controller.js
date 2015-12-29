(function() {
  'use strict';

  angular.module('miProyectoAngularApp')
    .controller('FrameController', frameController);

  function frameController(
    $jsonapi,
    $scope
  ) {
    $scope.names = $jsonapi.listResources();
    console.log($scope.names);

    // $scope.localStoreSize = $jsonapi.sourceLocal.size;

    var job = $jsonapi.getResource('jobs');
    console.log(job);
  }
})();
