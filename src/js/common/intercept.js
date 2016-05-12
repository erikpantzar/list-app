'use strict';
/// authInterceptor module
module.exports = function ($localStorage, $q) {
	"ngInject";

	return {
		request: function (config) {
			var token = null;
			token = $localStorage.token;

			config.headers = config.headers || {};
			if (token !== null) {
				// sets header x-access-token to all requests
				config.headers['x-access-token'] = token;
			}
			return config;
		},
		response: function (response) {
			if (response.status === 401) {
				// handle the case where the user is not authenticated
				// could have error handlers here
				console.log('no auth');
			}
			return response || $q.when(response);
		}
	};
};
