angular
	.module("FOTransBaseFE")
	.config(['$routeProvider',
		function($routeProvider)
		{
			$routeProvider
				.when('/',
				{
					templateUrl: './app/shared/Authentication/loginView.html',
					controller: 'AuthenticationCtrl'
				})
				.when('/register',
				{
					templateUrl: './app/shared/RegisterView.html',
					controller: 'RegisterCtrl'
				})
		}
	]);