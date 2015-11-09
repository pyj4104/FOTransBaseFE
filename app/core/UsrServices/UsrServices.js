'use strict';

angular.module('FOTransBaseFE')
.factory('usrServices', ['Base64', '$http', '$cookieStore', '$rootScope', '$timeout', '$resource', "$log",
	function (Base64, $http, $cookieStore, $rootScope, $timeout, $resource, $log)
	{
		var service = {};

        service.Login = function (username, password, successAction, errorAction)
        {
            var entry = $resource('http://localhost:6543/usr/:testID', null, {'get': { method:'GET' }});
            var resp = entry.get({testID: 'test'}, successAction(resp), errorAction());
            $log.log(resp);
        };

        service.SetCredentials = function (username, password)
        {
            var authdata = Base64.encode(username + ':' + password);
 
            $rootScope.globals = {
                currentUser: {
                    username: username,
                    authdata: authdata
                }
            };
 
            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
            $cookieStore.put('globals', $rootScope.globals);
        };
 
        service.ClearCredentials = function ()
        {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
            $http.defaults.headers.common.Authorization = 'Basic ';
        };

        service.register = function (username, password, callback)
        {
            var entry = $resource('http://localhost:6543/usr/:testID', null, {'get': { method:'GET' }});
            var resp = entry.get({testID: 'test'});
            $log.log(resp);
        };
 
        return service;	
	}]
);