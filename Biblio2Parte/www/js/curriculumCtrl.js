angular.module('CurriculumController',[])

.controller('curriculumCtrl',function($scope){
	$scope.works = [     
	{ date: '2011 - Actualidad', description: 'Ingeniera Sistemas Computacionales' },      
	{ date: '2008 - 2011', description: 'Tecnico en Informatica' },      
	{ date: '2005 - 2008', description: 'Certificado(electricidad)' } 
]; 
})