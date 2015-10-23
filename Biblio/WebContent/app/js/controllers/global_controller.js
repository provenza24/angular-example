'use strict';
angular.module('AngularTest.Controllers.Global_controller',[]).
	controller("globalCtrl",
		["$scope", "$location",
		 function($scope, $location) {
			
			$scope.$on('$routeChangeSuccess', function () {
	            var path = $location.path();
	            console.log(path);
	        });

			
			$scope.$on('addBookEvent', function(event, data) {				
				console.log("Ajout du livre: "+data.title); 
			});
						
			$scope.setAccessType = function(access) {
				$scope.accessType = access; 
			}						
		}]
);
