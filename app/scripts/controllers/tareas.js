'use strict';

/**
 * @ngdoc function
 * @name miProyectoAngularApp.controller:TareasCtrl
 * @description
 * # TareasCtrl
 * Controller of the miProyectoAngularApp
 */
angular.module('miProyectoAngularApp')
  .controller('TareasCtrl', function ($scope) {

    $scope.pan = 'lactal';

    $scope.tareas = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.frutas = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  });
