/* Register angular module with custom name myapp, all other Angular objects will add it to this custom angular module, 
Here Other Anulag objects used are Controller, Service, RouteProvider etc. */

var myapp = angular.module('myapp', ['ngRoute'])

         myapp.config(function ($routeProvider) {
             $routeProvider.
                when('/persondelete/:id', {
                    templateUrl: 'app/views/persondelete.html',
                    controller: 'PersonDetailsController'
                }).
                when('/person/:id', {
                    templateUrl: 'app/views/listperson.html',
                    controller: 'PersonDetailsController'
                }).
                when('/allperson', {
                    templateUrl: 'app/views/allperson.html',
                    controller: 'MyController'
                }).             
                when('/addperson', {
                    templateUrl: 'app/views/addperson.html',
                    controller: 'MyController'
                }).
                when('/personsearch', {
                    templateUrl: 'app/views/personsearch.html',
                    controller: 'MyController'
                }).
                when('/personupdate/:id', {
                    templateUrl: 'app/views/personupdate.html',
                    controller: 'PersonDetailsController'
                }).
                otherwise({
                    redirectTo: '/addperson'
                });
            });

            

           