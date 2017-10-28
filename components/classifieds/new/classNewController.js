   (function () {
     'use strict';

      angular.module('ngClassifieds')
      .controller('classNewController', classNewController);

      classNewController.$inject = ['$state','$scope', '$mdSidenav', '$mdDialog','classifiedsFactory', '$timeout'];                             
      function classNewController($state, $scope, $mdSidenav, $mdDialog, classifiedsFactory, $timeout ){
        
        const vm = this;
        vm.closeSidebar = closeSidebar;
        vm.saveClassified = saveClassified;
   
        $timeout(function() {
           $mdSidenav('left').open();
         });

        $scope.$watch('vm.sidenavOpen', function (sidenav){
          if(sidenav === false){
            $mdSidenav('left')
            .close()
            .then(function() {
              $state.go('classifieds');
              });
            }
          });

          function closeSidebar() {
            vm.sidenavOpen = false;
          }
          
          function saveClassified(classified) {
            if(classified) {
              
             classified.contact = {//fake user, should get data from signed in user
              name: "Marina Shemesh",
              phone: "054-444-444-4",
              email: "thisismy@email.com"
              }

            $scope.$emit('newClassified', classified);//send info to the parent controller
            vm.sidenavOpen = false;
            }
          }

      }

   })();