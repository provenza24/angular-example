angular.module('AngularTest.Services.Books', []).
		factory('bookService', function ($resource) {			
			
			return $resource('http://localhost:8080/Biblio/livres/:id', { id: '@_id' }, {
					'query':  {method:'GET', isArray:true}					 			   
			  });
						
});