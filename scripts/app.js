(function() {

  "use strict";

  angular
    .module('ngClassifieds', ['ngMaterial', 'ui.router'])
    .config(function ($mdThemingProvider, $stateProvider, $urlRouterProvider) {

      $mdThemingProvider.theme('indigo')
        .primaryPalette('indigo')
        .accentPalette('pink');

      $urlRouterProvider.otherwise('/classifieds');
      $stateProvider
        .state('classifieds', {
          url: '/classifieds',
          templateUrl: 'components/classifieds/classifieds.html',
          controller: 'ClassifiedsController as vm'
      
        })

          .state('classifieds.new', {
          url: '/new',
          templateUrl: 'components/classifieds/new/classNew.html',
          controller: 'classNewController as vm'
      
        })

         .state('classifieds.edit', {
          url: '/edit/:id',
          templateUrl: 'components/classifieds/edit/classEdit.html',
          controller: 'classEditController as vm',
          params: {
            classified: null
          }
      
        });

    });
    
})();

