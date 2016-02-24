app = angular.module("Application", ["ngMessages"]);

app.controller("contactsCtrl", function($scope, $http){

	$scope.title = "Phonebook Application";

	$scope.listContacts = [];
	$scope.companies 	= [];

	var getListContacts = function (){
		$http.get("http://localhost:3000/contacts")
			.success(function(data) {
				$scope.listContacts = data;
			});
	};

	var getListCompanies = function () {
		$http.get("http://localhost:3000/companies")
			.success(function (data) {
				$scope.companies = data;
			});
	};
	$scope.addContact = function(contact){
		$scope.listContacts.push( angular.copy(contact));
		delete $scope.contact;

		$scope.contactForm.$setPristine();
	};

	$scope.removeContacts = function(contacts) {
		$scope.listContacts = contacts.filter(function(contact) {
			if (!contact.selected) return contact;
		});
	};

	$scope.isSelected = function(contacts) {
		return contacts.some(function (contact) {
			return contact.selected;
		});
	};

	$scope.setOrderBy = function (value) {
		$scope.fieldOrderBy = value;
		$scope.directionOrderBy = !$scope.directionOrderBy;
	};

	getListContacts();
	getListCompanies();
});