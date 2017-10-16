      angular.module('ngClassifieds')
              .controller('ClassifiedsController', ClassifiedsController);

      ClassifiedsController.$inject = ['$scope'];
      function ClassifiedsController($scope){
      
      const vm = this;
      vm.firstname = "marina";
      $scope.message = "Shalom planet"
      }
