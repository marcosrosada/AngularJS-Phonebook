app.controller("contactsCtrl", function($scope, contactAPI, companiesAPI, serialGenerator){

	$scope.title 		= "Phonebook Application";
	$scope.listContacts = [];
	$scope.companies 	= [];

	var getListContacts = function (){
		contactAPI.getContacts().success(function(data) {
			$scope.listContacts = data;
		});
	};

	var getListCompanies = function () {
		companiesAPI.getCompanies().success(function (data) {
				$scope.companies = data;
			});
	};
	$scope.addContact = function(contact){
		contact.serial = serialGenerator.generate();
		contact.date = new Date();
		contactAPI.saveContact(contact).success(function (data) {
			delete $scope.contact;
			$scope.contactForm.$setPristine();
			getListContacts();
		});
	};

	$scope.removeContacts = function(contacts) {
		$scope.listContacts = contacts.filter(function(contact) {
			if (!contact.selected) return contact;
		});
	};

	$scope.isSelected = function(contacts) {
		return contacts.some(function (contact) {
			return false;//contact.selected;
		});
	};

	$scope.setOrderBy = function (value) {
		$scope.fieldOrderBy = value;
		$scope.directionOrderBy = !$scope.directionOrderBy;
	};

	getListContacts();
	getListCompanies();
});