app = angular.module("Application", ["ngMessages"]);

app.controller("contactsCtrl", function($scope){

	$scope.title = "Phonebook Application";

	$scope.listContacts = [
		{ name: "Marcos Rosada", number: +5521980147515, color: "#990000", date: new Date(), company: { name: "Oi", code: 14, category: "Celular"} },
		{ name: "Talita Vespa", number: +5521979276633, color: "#000099", date: new Date(), company: { name: "Vivo", code: 15, category: "Celular"} },
		{ name: "Joniorrrrrrr", number: +552799998888, color: "#CCCCCC", date: new Date(), company: { name: "Tim", code: 41, category: "Celular"} }
	];

	$scope.companies = [
		{ code: 14, name: "Oi", category: "Celular", preco: 2 },
		{ code: 15, name: "Vivo", category: "Celular", preco: 1 },
		{ code: 41, name: "Tim", category: "Celular", preco: 3 },
		{ code: 25, name: "GVT", category: "Fixo", preco: 1 },
		{ code: 21, name: "Embratel", category: "Fixo", preco: 2 }
	];

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
});