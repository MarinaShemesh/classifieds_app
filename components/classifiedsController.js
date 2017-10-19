      angular.module('ngClassifieds')
             .controller('ClassifiedsController', ClassifiedsController);

      ClassifiedsController.$inject = ['$scope', '$http', 'classifiedsFactory'];
      function ClassifiedsController($scope, $http, classifiedsFactory){
      
      // const vm = this;
      // vm.firstname = "marina";
         classifiedsFactory.getClassifieds()
          .then(function (classAds) {
              $scope.classifieds = classAds.data;
               // console.log(classAds.data);
          });
 
  }
