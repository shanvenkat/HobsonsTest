/* Controller Registered under Module named myapp, Here controller calls to scope, Services Javascript object 
to further process and return data stored in scope, Scope is inturn glued to the view*/

// Controller # 1
myapp.controller('MyController', function ($scope, $routeParams, MyService, $filter, $location) {
    // Initialize to load default data to populate the page    

    init();
    function init() {
        $scope.persons = MyService.getpersons();
        $scope.personscount = MyService.getpersons().length;
    }

    $scope.addperson = function () {
        var firstName = $scope.newperson.FirstName;
        var lastName = $scope.newperson.LastName;
        var age = $scope.newperson.Age;
       
        MyService.insertperson(firstName, lastName, age);
        $location.path('/allperson');
   };

   
     $scope.deleteemployee = function (id) {
        MyService.deleteperson(id);
    };

    // Customer Filter in Controller as Javascript function
    $scope.$watch("filterValue", function (filterInput) {
        if (filterInput == undefined) {
            $scope.filteredPersons = MyService.getpersons();
        }
        else {
            var persons = MyService.getpersons();
            $scope.filteredPersons = $filter("PersonFilter")(persons, filterInput);                       
        }
    });

});

 
// Contgroller # 2
myapp.controller('PersonDetailsController', function ($scope, $routeParams, MyService, $location) {
     $scope.getperson = {};   
    init();
    function init() {        
       // get Employeeid from RouteParams and parse to make sure it is Integer.   
        var id = ($routeParams.id) ? parseInt($routeParams.id) : 0;
        if (id > 0) {
            $scope.getperson = MyService.getperson(id);
        }
    }

    
     $scope.deleteemployee = function (id) {
        MyService.deleteperson(id);
        $location.path('/allperson');
    };


});

// Controller 3 for Navigation stuff
myapp.controller('navCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        return page === currentRoute ? 'active' : '';
    };
} ]);