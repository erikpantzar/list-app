'use strict';

var api = require('../common/api');


// List service
module.exports = List;


function List ($http) {
	"ngInject";

	return {
		add: add,
		del: del,
		list: list,
		get: get,
		update: update
	};


	// METHODS

	function add (name, userID) {
		return $http.post(api.lists, { name: name, accessBy: userID });
	}

	function del (id) {
		return $http.delete(api.lists + '/' + id);
	}

	function update(id, data) {		
		return $http.put(api.lists+'/'+id, data);
	}

	function get (id) {
		return $http.get(api.lists + '/' + id);
	}

	function list () {
		return $http.get(api.lists);
	}
}