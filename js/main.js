app = angular.module("Application", []);

app.controller("contactsCtrl", function($scope){

	$scope.title = "Phonebook Application";

	$scope.listContacts = [
		{ name: "Marcos Rosada", number: +5521980147515 },
		{ name: "Talita Vespa", number: +5521979276633 },
		{ name: "Joniorrrrrrr", number: +552799998888 }
	];

	$scope.companies = [
		{ code: 14, name: "Oi"},
		{ code: 15, name: "Vivo"},
		{ code: 41, name: "Tim"}
	];

	$scope.addContact = function(contact){
		$scope.listContacts.push( angular.copy(contact));
		delete $scope.contact;
	};
});