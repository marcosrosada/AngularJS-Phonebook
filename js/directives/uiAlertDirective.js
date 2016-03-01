angular.module("AppPhoneBook").directive("uiAlert", function () {

	return {
		templateUrl: "./view/alert.html",
		replace: true,
		restrict: "E",
		scope: {
			title: "@"/*,
			error: "=message"*/
		},
		transclude: true
	};
});