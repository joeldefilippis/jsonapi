'use strict';

angular.module('miProyectoAngularApp')

  .controller('MainCtrl', function ($scope, localStorageService, $jsonapi) {
    var tareasEnAlmacen = localStorageService.get('tareas');
    $scope.tareas = tareasEnAlmacen && tareasEnAlmacen.split('\n') || [];
    $scope.$watch('tareas', function(){
      localStorageService.add('tareas', $scope.tareas.join('\n'));
    }, true);

    $scope.addTarea = function(){
      $scope.tareas.push($scope.tarea);
      $scope.tarea = '';
    }
    $scope.eliminarTarea = function(index){
      $scope.tareas.splice(index,1);
    }


    $scope.names = $jsonapi.listResources();
    console.log($scope.names);

    $scope.objetos = $jsonapi.allResources();
    console.log($scope.objetos);

    var uno = $jsonapi.getResource('jobs');
    console.log(uno);

});
