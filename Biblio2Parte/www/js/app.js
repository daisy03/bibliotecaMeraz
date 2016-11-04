angular.module('starter', ['ionic','MainController','AuthorController','CurriculumController','BibliotecaController','BookController'])

.config(function($urlRouterProvider,$stateProvider){

      $stateProvider  
      .state('main',{
        url:'/main',
        templateUrl:'templates/main.html',
        controller:'HomeCtrl'
      })
      .state('acceso',{
        url:'/acceso',
        templateUrl:'templates/ibiblioteca.html',
        controller:'ibibliotecaCtrl'
      })
      .state('consulta',{
        url:'/consulta',
        templateUrl:'templates/author.html',
        controller:'authorCtrl'
      })
      .state('curriculum',{
        url:'/curriculum',
        templateUrl:'templates/curriculum.html',
        controller:'curriculumCtrl'
      })
      .state('bookDetail',{
        url:'/book/:id',
        templateUrl:'templates/book.html',
        controller:'bookCtrl'
      })

      $urlRouterProvider.otherwise('main');
})
.factory('bookService', function() {     
var books = [       
      { title: 'La Sombra del mar', year: '2005', author: 'Margarit Subrings', cover: 'img/lib1.jpg' }, 
      { title: 'Detectives Salvajes', year: '1988', author: 'Roberto Bolaño', cover: 'img/lib2.jpg' }, 
      { title: 'Plata Quemada', year: '1956', author: 'Ricardo Piglia', cover: 'img/lib3.jpg' }, 
      { title: 'Angosta', year: '2000', author: 'Hector Abad', cover: 'img/lib4.jpg' }
     
      ];     
  return {         
    getBooks: function() {             
      return books;         
    },         
    getBook: function(id) {             
      return books[id];         
    },     
  } 
});

