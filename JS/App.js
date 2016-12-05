var app=angular.module("myApp",['ngRoute','Contrl']);
myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when('/template1',{
		templateUrl:'pages/template1.html',
	controller:'page1Ctrl'
	}).
	when('/template2',{
		templateUrl:'pages/template2.html',
	controller:'page2Ctrl'
	}).
	otherwise({
		redirectTo:'/template1'
});
});