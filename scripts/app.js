      angular.module("ngClassifieds", ["ngMaterial"])
             .config(function ($mdThemingProvider) {
         
             $mdThemingProvider.theme('default')
              .primaryPalette('teal')
              .accentPalette('orange');
           })


             .directive("helloWorld", function(){
               return {
                template: "<h1>{{message}}</h1>"
               }
             });

//papa-john syntax
      // angular.module('ngClassifieds')
      //     .config(ThemeConfig);

      //     ThemeConfig.$inject = ['$mdThemingProvider'];
      //     function ThemeConfig($mdThemingProvider){
      //        $mdThemingProvider.theme('default')
      //         .primaryPalette('teal')
      //         .accentPalette('orange')

           
      //     }
