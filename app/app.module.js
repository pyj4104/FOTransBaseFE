"use strict";

// Declare all the modules
angular.module('Authentication', ['User']);
angular.module('Register', ['User']);
angular.module('User', []);

// Declare the main
angular.module("FOTransBaseFE", [
	'ngRoute',
	'ngCookies',
	'ngResource',
	'User',
	'Authentication',
	'Register']);