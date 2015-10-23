'use strict';
angular.module('AngularTest.Controllers.Global_controller',[]).
	controller("globalCtrl",
		["$scope",
		 function($scope) {	
			$scope.$on('addBookEvent', function(event, data) {				
				console.log("Ajout du livre: "+data.title); 
			});
						
			$scope.setAccessType = function(access) {
				$scope.accessType = access; 
			}						
		}]
);
