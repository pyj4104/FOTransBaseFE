"use strict";

// Declare all the modules
angular.module('Authentication', []);
angular.module('Register', []);

// Declare the main
angular.module("FOTransBaseFE", [
	'ngRoute',
	'ngCookies',
	'ngResource',
	'Authentication',
	'Register']);