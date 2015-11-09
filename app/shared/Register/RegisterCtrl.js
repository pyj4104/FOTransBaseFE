'use strict';

angular
	.module('Register')
	.controller('RegisterCtrl', ["$scope", "$rootScope", "$location", "$log", "User",
		function($scope, $rootScope, $location, $log, User)
		{
			$scope.defaultText = {'idLabel': '아이디', 'pwdLabel': '비밀번호'};
			$scope.id = '';
			$scope.password = '';

			User.usrServices.ClearCredentials();
			
			$scope.login = function()
			{
				User.usrServices.Login($scope.id, $scope.password, function(response){
					if(response.success){
						User.usrServices.SetCredentials($scope.id, $scope.password);
						alert('success');
					} else {
						alert('failed');
					}
				})
				//TODO
				// Connect to python restful API
				// Retrieve the info
				// If correct, move to main page
			}
		}]
	);
