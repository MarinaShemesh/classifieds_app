(function() {

  "use strict";

  angular
    .module('ngClassifieds', ['ngMaterial', 'ui.router'])
    .config(function ($mdThemingProvider, $stateProvider, $urlRouterProvider) {

      $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('orange');

      $urlRouterProvider.otherwise('/classifieds');

      $stateProvider
        .state('classifieds', {
          url: '/classifieds',
          templateUrl: 'components/classifieds/classifieds.html',
          controller: 'ClassifiedsController as vm'
      
        });
    });
    
})();

