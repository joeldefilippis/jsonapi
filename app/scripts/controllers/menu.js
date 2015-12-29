'use strict';

angular.module('miProyectoAngularApp')
  .controller('MenuCtrl', function ($scope) {

      $scope.selected = 'None';
      $scope.items = [
          { name: 'John', otherProperty: 'Foo' },
          { name: 'Joe', otherProperty: 'Bar' }
      ];

      $scope.menuOptions = [
          ['Select', function ($itemScope) {
              $scope.selected = $itemScope.item.name;
          }],
          null, // Dividier
          ['Remove', function ($itemScope) {
              $scope.items.splice($itemScope.$index, 1);
          }]
      ];


});
