angular
	.module("FOTransBaseFE")
	.config(['$routeProvider', '$logProvider',
		function ($routeProvider, $logProvider) {
			$logProvider.debugEnabled(true);
			$routeProvider
				.when('/', {
					templateUrl: './app/shared/Authentication/loginView.html',
					controller: 'AuthenticationCtrl'
				})
				.when('/register', {
					templateUrl: './app/shared/Register/RegisterView.html',
					controller: 'RegisterCtrl'
				})
		}
	]);