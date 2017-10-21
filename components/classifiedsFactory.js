   (function () {
     'use strict';

      angular.module('ngClassifieds')
      .factory('classifiedsFactory', classifiedsFactory);

      classifiedsFactory.$inject = ['$http'];
      function classifiedsFactory ($http){
       
         function getClassifieds() {
           return $http.get('data/classifieds.json');
            }
               return {
                 getClassifieds: getClassifieds //property: function
             }
      }

   })();