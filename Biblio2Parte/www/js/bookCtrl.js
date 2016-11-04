angular.module('BookController',[])

.controller('bookCtrl',function($scope,bookService,$stateParams){

	$scope.articulo = books[$stateParams.id];

})
var books = [       
      { title: 'La Sombra del mar', year: '2005', author: 'Margarit Subrings', cover: 'img/lib1.jpg' }, 
      { title: 'Detectives Salvajes', year: '1988', author: 'Roberto Bolaño', cover: 'img/lib2.jpg' }, 
      { title: 'Plata Quemada', year: '1956', author: 'Ricardo Piglia', cover: 'img/lib3.jpg' }, 
      { title: 'Angosta', year: '2000', author: 'Hector Abad', cover: 'img/lib4.jpg' }
         
      ];  