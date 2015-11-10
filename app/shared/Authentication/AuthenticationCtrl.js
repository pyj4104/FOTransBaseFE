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
			$scope.ServerDown = '';

			usrServices.ClearCredentials();
			
			$scope.login = function() {
				var retVal = {};
				retVal['ID'] = $scope.id;
				retVal['password'] = $scope.password;
				retVal['success'] = false;
				var resp = usrServices.Login(retVal,
					function(resp) {
						if (resp){
							alert('success');
							$log.log(resp);
							$log.log(resp.id);
						} else {
							alert('failed');
						}
					},
					function(resp) {
						$log.log(resp);
						$scope.ServerDown = '서버 다운.';
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
