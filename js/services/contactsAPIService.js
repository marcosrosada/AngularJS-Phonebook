app.factory("contactAPI", function ($http) {

	var _getContacts = function () {
		return $http.get("http://localhost:3000/contacts");
	};

	var _saveContact = function (contact) {
		return $http.post("http://localhost:3000/contacts", contact);
	}
	return {
		getContacts : _getContacts,
		saveContact : _saveContact
	};
});