   (function () {
     'use strict';

      angular.module('ngClassifieds')
      .controller('classNewController', classNewController);

      classNewController.$inject = ['$mdSidenav', '$mdDialog','classifiedsFactory', '$timeout'];                             
      function classNewController($mdSidenav, $mdDialog, classifiedsFactory, $timeout ){
        
        const vm = this;
   
        $timeout(function() {
           $mdSidenav('left').open();
         });
    
      }

   })();