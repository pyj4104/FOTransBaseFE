'use strict';

angular
	.module('Register')
	.controller('RegisterCtrl', ["$scope", "$rootScope", "$location", "$log",
		function($scope, $rootScope, $location, $log)
		{
			$scope.defaultText = {'idLabel': '아이디', 'pwdLabel': '비밀번호'};
			$scope.id = '';
			$scope.password = '';
			
			$scope.register = function() {
			}
		}]
	);
