      angular.module('ngClassifieds')
             .controller('ClassifiedsController', ClassifiedsController);


      ClassifiedsController.$inject = ['$scope', '$http',
                                        'classifiedsFactory', '$mdSidenav',
                                         '$mdToast', '$mdDialog'];
      function ClassifiedsController($scope, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog){
      
       const vm = this;
        vm.openSidebar = openSidebar;
        vm.closeSidebar = closeSidebar;
        vm.saveClassified = saveClassified;
        vm.editClassified = editClassified;
        vm.saveEdit = saveEdit;
        vm.deleteClassified = deleteClassified;

        vm.classifieds;
        vm.categories;
        vm.editing;
        vm.classified;
   
         classifiedsFactory.getClassifieds()
          .then(function (classAds) {
              vm.classifieds = classAds.data;
              vm.categories = getCategories(vm.classifieds);
               // console.log(classAds.data);
               // console.log($scope.classifieds);
          });

          const contact = {//fake user, should get data from signed in user
            name: "Marina Shemesh",
            phone: "054-444-444-4",
            email: "thisismy@email.com"
          }

    
        function openSidebar () {
          $mdSidenav('left').open();
        }

        function closeSidebar (){
          $mdSidenav('left').close();
        }
       
        function saveClassified (classified){
            if(classified) {
            classified.contact = contact; //from the fake user
              // console.log("contact", contact);
              // console.log("$scope.contact", $scope.contact);
            vm.classifieds.push(classified);
            vm.classified = {};
            closeSidebar();
            showToast(" Your classified has been saved!")
           }
        }

       function editClassified (addEditing){
          vm.editing = true;
          openSidebar();
          vm.classified = addEditing;
        }

        function saveEdit (){
          vm.editing = false;
          vm.classified = {};
          closeSidebar();
          showToast("Your edit has been saved.")
        }

        function deleteClassified (event, classified){
         const confirm = $mdDialog.confirm()
          .title("Are you sure you want to delete " + classified.title + "?")
          .ok("Yes please")
          .cancel("No, don't delete it")
          .targetEvent(event);

        $mdDialog.show(confirm).then(function(){
          const index = $scope.classifieds.indexOf(classified);
           vm.classifieds.splice(index, 1);
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
