angular
	.module("FOTransBaseFE")
	.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: './app/shared/Authentication/loginView.html',
					action: 'Authentication.AuthenticationCtrl'
				})
				.when('/register', {
					templateUrl: './app/shared/RegisterView.html',
					action: 'Register.RegisterCtrl'
				})
		}
	]);