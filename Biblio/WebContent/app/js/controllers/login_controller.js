'use strict';
angular.module('AngularTest.Controllers.Login_controller',[]).
	controller("loginCtrl",
		["$scope", "$window",
		 function($scope, $window) {
			
			var vm = this;
			
			vm.users=[ {id: '1', name:'ADMIN' , password:'ADMIN'} ]
						
			vm.checkLogin = function() {				
				$scope.$parent.setAccessType('USER');
				for (var i = 0; i < vm.users.length; i++) { 
					if (vm.users[i].name == vm.login &&
							vm.users[i].password == vm.password) {
						$scope.$parent.setAccessType('ADMIN');
					}
				}				
				$window.location.href = '#/books';
			};			
		}]
);
