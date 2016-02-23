app = angular.module("Application", []);

app.controller("contactsCtrl", function($scope){

	$scope.title = "Phonebook Application";

	$scope.list = [
		{ name: "Marcos Rosada", number: +5521980147515 },
		{ name: "Talita Vespa", number: +5521979276633 },
		{ name: "Joniorrrrrrr", number: +552799998888 }
	];
});