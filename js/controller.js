var app = angular.module("reddit")
.controller("PostsController", function($scope, FirebaseService) {

	var getPost = function() {
		FirebaseService.getPosts().then(function(data){
			$scope.posts = data;
		})
	}

	getPost();

	$scope.addPost = function() {	
		FirebaseService.addPost($scope.newPost).then(function(response) {
			getPost();
		})
	}

})