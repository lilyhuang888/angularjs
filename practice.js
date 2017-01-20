// JavaScript Document

(function(){
	
	var app = angular.module('myApp', []);
	
	app.service('WorldService', function(){
		this.name = "world";
	});
	
	app.service('JackService', function(){
		this.name = "Jack";
	});
	
	app.controller('MainController', ['JackService', function(NameService){
		
		console.log(NameService.name);
									  
	}]);
	
})();