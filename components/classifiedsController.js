      angular.module('ngClassifieds')
             .controller('ClassifiedsController', ClassifiedsController);


      ClassifiedsController.$inject = ['$scope', '$http',
                                        'classifiedsFactory', '$mdSidenav',
                                         '$mdToast'];
      function ClassifiedsController($scope, $http, classifiedsFactory, $mdSidenav, $mdToast){
      
      // const vm = this;
      // vm.firstname = "marina";
         classifiedsFactory.getClassifieds()
          .then(function (classAds) {
              $scope.classifieds = classAds.data;
               // console.log(classAds.data);
          });

          var contact = {//fake user, should get data from signed in user
            name: "Marina Shemesh",
            phone: "054-444-444-4",
            email: "thisismy@email.com"
          }

       
        $scope.openSidebar = function(){
           $mdSidenav('left').open();
        }

        $scope.closeSidebar = function(){
          $mdSidenav('left').close();
        }
       
         $scope.saveClassified = function(classified){
            if(classified) {
            $scope.contact = contact; //from the fake user
              // console.log("contact", contact);
              // console.log("$scope.contact", $scope.contact);
            $scope.classifieds.push(classified);
            $scope.classified = {};
            $scope.closeSidebar();
            $mdToast.show(
              $mdToast.simple()
               .content("Your classified has been saved!")
               .position("top")
               .theme('error-toast')
               .hideDelay(3000)
              );
          }
      }
 
  }
