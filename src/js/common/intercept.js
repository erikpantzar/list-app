'use strict';
/// authInterceptor module
module.exports = ['$localStorage', '$q', function ($localStorage, $q) {


	return {
		request: function (config) {
			var token = null;
			token = $localStorage.token;

			config.headers = config.headers || {};
			if (token !== null) {
				config.headers['x-access-token'] = token;
			}
			return config;
		},
		response: function (response) {
			if (response.status === 401) {
				// handle the case where the user is not authenticated
				console.log('no auth');
			}
			return response || $q.when(response);
		}
	};
}];
