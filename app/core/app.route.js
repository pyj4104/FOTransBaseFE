angular
	.module("FOTransBaseFE")
	.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: './../../app/shared/Authentication/loginView.html',
					action: 'Authentication.AuthenticationCtrl'
				})
	}]);