var AppAngulardesign = angular.module('AngularTest',
		[		 
		 'ngRoute',
		 'AngularTest.Controllers.Global_controller',
		 'AngularTest.Controllers.Book_controller',
		 'AngularTest.Controllers.Login_controller',
		 'AngularTest.Services.Books'
		]);

//configure our routes
AppAngulardesign.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'app/views/home.html',
            controller  : 'globalCtrl'
        }).when('/books', {
            templateUrl : 'app/views/book.html',
            controller  : 'bookCtrl',
            controllerAs: 'bookCtrl'
        }).when('/', {
            templateUrl : 'app/views/login.html',
            controller  : 'loginCtrl',
            controllerAs: 'loginCtrl'
        });
    
});