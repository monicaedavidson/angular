(function() {
	var notesApp = angular.module('notesApp');
	notesApp.controller('notesCtrl', ['$scope', function($scope){
		$scope.notes = [];

		$scope.createNote = function() {
			$scope.notes.push($scope.newNote);
			$scope.newNote = null;
		};

		$scope.deleteNote = function(note) {
			$scope.notes.splice($scope.notes.indexOf(note), 1);
		};
	}]);
})();
