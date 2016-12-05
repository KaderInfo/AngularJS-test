var perCtrl=angular.module("Contrl",[]);

perCtrl.controller("page1Ctrl",function ($scope){
	$scope.name1='hello how are you doing?';
});
perCtrl.controller("page2Ctrl",function ($scope){
	$scope.name2='salut, comment allez vous?';
});