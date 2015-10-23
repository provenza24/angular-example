'use strict';
angular.module('AngularTest.Controllers.Book_controller',[]).
	controller("bookCtrl",
		["$scope","$injector",
		 function($scope, $injector) {
			
			var bookService = $injector.get("bookService");
			
			bookService.query(function(data) {						
				$scope.books = data;						
			}, function(error) {
				console.log(error);
			});
											
			$scope.addBook = function(book) {
				if ($scope.bookForm.$valid) {
					$scope.books.push(book);								
					$scope.newBook = {};		
					$scope.$emit('addBookEvent', book);
				}				
			};
												
			$scope.deleteBook = function(id) {
				
				var idToDelete = -1;
				
				for (var i = 0; i < $scope.books.length; i++) { 
					if ($scope.books[i].id == id) {
						idToDelete = i;
					}
				}
				if (idToDelete!=-1) {
					$scope.books.splice(idToDelete, 1);
					console.log("Suppression du livre" + id);			
				}				
			}
						
		}]
);
