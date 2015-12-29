(function() {
  'use strict';

  angular.module('miProyectoAngularApp')
    .controller('RequestAllController', RequestAllController);

  function RequestAllController(
    $scope, collection
  ) {
    $scope.collection = collection;
  }
})();
