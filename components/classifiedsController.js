      angular.module('ngClassifieds')
             .controller('ClassifiedsController', ClassifiedsController);


      ClassifiedsController.$inject = ['$scope', '$http',
                                        'classifiedsFactory', '$mdSidenav',
                                         '$mdToast', '$mdDialog'];
      function ClassifiedsController($scope, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog){
      
      // const vm = this;
      // vm.firstname = "marina";
         classifiedsFactory.getClassifieds()
          .then(function (classAds) {
              $scope.classifieds = classAds.data;
              $scope.categories = getCategories($scope.classifieds);
               // console.log(classAds.data);
          });

          const contact = {//fake user, should get data from signed in user
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
            showToast(" Your classified has been saved!")
           }
        }

        $scope.editClassified = function(addEditing){
          $scope.editing = true;
          $scope.openSidebar();
          $scope.classified = addEditing;
        }

        $scope.saveEdit = function(){
          $scope.editing = false;
          $scope.classified = {};
          $scope.closeSidebar();
          showToast("Your edit has been saved.")
        }

        $scope.deleteClassified = function(event, classified){
         const confirm = $mdDialog.confirm()
          .title("Are you sure you want to delete " + classified.title + "?")
          .ok("Yes please")
          .cancel("No, don't delete it")
          .targetEvent(event);

        $mdDialog.show(confirm).then(function(){
          const index = $scope.classifieds.indexOf(classified);
           $scope.classifieds.splice(index, 1);
            }, function(){ //when we don't want to delete

          });
      
       }

        function showToast(message) {
           $mdToast.show(
                $mdToast.simple()
                 .content(message)
                 .position("top, left")
                 .theme('error-toast')
                 .hideDelay(3000)
                );
        }

        function getCategories(classifieds){
          const categories = [];
          
          angular.forEach(classifieds, function (item){
            angular.forEach(item.categories, function (category){
              categories.push(category);
            });
          });

          return _.uniq(categories);

        }
     
  }
