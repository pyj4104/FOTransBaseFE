'use strict';

angular
	.module('Authentication')
	.service('usrServices')
	.controller('AuthenticationCtrl',
		["$scope", "$rootScope", "$location", "$log", "usrServices",
		function ($scope, $rootScope, $location, $log, usrServices) {
			$scope.defaultText = {'idLabel': '아이디', 'pwdLabel': '비밀번호'};
			$scope.id = '';
			$scope.password = '';

			usrServices.ClearCredentials();
			
			$scope.login = function() {
				var resp = usrServices.Login($scope.id, $scope.password,
					function(resp) {
						if (resp){
							alert('success');
						} else {
							alert('failed');
						}
					},
					function() {
						alert('connection error');
					}
				);
			}

			$scope.clearLabel = function(labelID) {
				var label = document.getElementById(labelID);
				label.innerHTML = "";
			}

			$scope.blurLabel = function(fieldID, labelID) {
				var fieldByLabelID = {};
				fieldByLabelID['idLabel'] = $scope.id;
				fieldByLabelID['pwdLabel'] = $scope.password;
				var label = document.getElementById(labelID);
				if(fieldByLabelID[labelID] == ""){
					label.innerHTML = $scope.defaultText[labelID];
				}
			}
		}]
	);
