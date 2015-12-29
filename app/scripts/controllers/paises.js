'use strict';


angular.module('miProyectoAngularApp')

  .controller('PaisesCtrl', function ($scope, $http) {
    var urlPaises = 'https://restcountries.eu/rest/v1/region/';
    $scope.leer_paises = function () {
      console.log("seleccionado: " + $scope.codigo_region);
      $http.get(urlPaises+$scope.codigo_region).success(function(listaObtenida){
        console.log(listaObtenida);
        $scope.paises = listaObtenida;
      })
    }
  });
