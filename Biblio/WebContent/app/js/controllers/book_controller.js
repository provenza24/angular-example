'use strict';
angular.module('AngularTest.Controllers.Book_controller',[]).
	controller("bookCtrl",
		["$scope",
		 function($scope) {	
			$scope.books=[ {id: '1', title:'Central Park' , firstName:'Guillaume', lastName:'Musso', creationDate: '20140313T00:00:00'} ]
			$scope.books.push({id: '2', title:'La fille de papier' , firstName:'Guillaume', lastName:'Musso', creationDate: '20100521T00:00:00'});
			$scope.books.push({id: '3', title:"L'appel de l'ange" , firstName:'Guillaume', lastName:'Musso', creationDate: '20150103T00:00:00'});
			$scope.books.push({id: '4', title:"Parce que je t'aime" , firstName:'Guillaume', lastName:'Musso', creationDate: '20140313T00:00:00'});
			
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
