app.service("companiesAPI", function ($http) {
	this.getCompanies = function () {
		return $http.get("http://localhost:3000/companies");
	};
});