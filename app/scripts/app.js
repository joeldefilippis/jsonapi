'use strict';

/**
 * @ngdoc overview
 * @name miProyectoAngularApp
 * @description
 * # miProyectoAngularApp
 *
 * Main module of the application.
 */
angular
  .module('miProyectoAngularApp', [
    'ui.router',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule',
    'angular-jsonapi',
  'angular-jsonapi-rest',
  'angular-jsonapi-local',
  'angular-jsonapi-parse'
  ])


  // .constant('apiURL', 'http://jsonapi-robot-wars.herokuapp.com/')


  .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/");
      $stateProvider
    //   .state('main', {
    //         url: '/',
    //         templateUrl: 'views/main.html',
    //         controller: 'MainCtrl'
    //       })


        .state('frame', {
          url: '',
          templateUrl: 'scripts/frame/frame.html',
          controller: 'FrameController',
          abstract: true
        })
        .state('frame.hello', {
          url: '',
          templateUrl: 'scripts/frame/hello.html'
        })
        .state('frame.request', {
          url: '/{type}',
          template: '<ui-view></ui-view>',
          controller: 'RequestController',
          abstract: true,
          resolve: {
            factory: function($jsonapi, $stateParams) {
              return $jsonapi.getResource($stateParams.type);
            }
          }
        })
        .state('frame.request.all', {
          url: '',
          templateUrl: 'scripts/request/all.html',
          controller: 'RequestAllController',
          resolve: {
            collection: function(factory, $location, $jsonapi) {
              var params = $jsonapi.sourceRest.decodeParams($location.search());

              return factory.all(params);
            }
          }
        })
        .state('frame.request.get', {
          url: '/{id}',
          templateUrl: 'views/request/get.html',
          controller: 'RequestGetController',
          resolve: {
            object: function(factory, $stateParams) {
              return factory.get($stateParams.id);
            }
          }
      })

  });
