// to complete login
// send username and password to login
// return is the user authed or not authed
// gets the id of signed in user
// if fail: just get a string message


function LoginFactory($resource) {
  return $resource('/api/user'
   , {}, {
    post: {method: 'POST', isArray: false }
  })
}

function loginController(Login) {
  var vm = this;
  vm.login = login;

  function login(name, passphrase) {
    Login.post({name: name, passphrase: passphrase}, function(response) {
      if(response.user) {
        console.log(response.user.id);
        vm.onLogin({user: response.user});
      }
    }, function(error) {
      console.error(error);
    });
  }
}

var loginComponent = {
  templateUrl: './js/login/login.html',
  controller: loginController,
  bindings: {
    onLogin: '&'
  }
};

angular.module('picco.login', ['ngResource'])
  .controller('loginController', loginController)
  .factory('Login', LoginFactory)
  .component('login', loginComponent)
;
