angular.module("AppPhoneBook").filter("camelCase", function () {
	return function (input) {
		var listNames = input.split(" ");
		var listNamesFormated = listNames.map(function (name) {
			if (/(da|de)/.test(name)) return name;
			return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
		});
		return listNamesFormated.join(" ");
	};
});