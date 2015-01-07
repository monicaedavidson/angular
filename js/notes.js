(function() {
	var notesApp = angular.module('notesApp', ['ngRoute']);
	notesApp.config(['$routeProvider', function($routeProvider) {
		$routeProvider
		.when('/notes' , {
			templateUrl: '/templates/notes_template.html',
			controller: 'notesCtrl'
		})
	}]);
})();
