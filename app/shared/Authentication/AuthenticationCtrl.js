'use strict';

angular
	.module('Authentication')
	.controller('AuthenticationCtrl',
		["$scope", "$rootScope", "$location", "$log", "AuthenticationService",
		function($scope, $rootScope, $location, $log, AuthenticationService){
			$scope.defaultText = {'idLabel': '아이디', 'pwdLabel': '비밀번호'};
			$scope.id = '';
			$scope.password = '';

			AuthenticationService.ClearCredentials();
			
			$scope.login = function(){
				AuthenticationService.Login($scope.id, $scope.password, function(response){
					if(response.success){
						AuthenticationService.SetCredentials($scope.id, $scope.password);
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

			$scope.clearLabel = function(labelID){
				var label = document.getElementById(labelID);
				label.innerHTML = "";
			}

			$scope.blurLabel = function(fieldID, labelID){
				var fieldByLabelID = {};
				fieldByLabelID['idLabel'] = $scope.id;
				fieldByLabelID['pwdLabel'] = $scope.password;
				var label = document.getElementById(labelID);
				if(fieldByLabelID[labelID] == ""){
					label.innerHTML = $scope.defaultText[labelID];
				}
			}
	}]);
