angular
  .module('news')
  .controller('AuthController', AuthController);

function AuthController (BASE_URL) {
  var vm = this;
  vm.user = {};

  vm.login = function () {
    var fb = new Firebase(BASE_URL);

    fb.authWithPassword(vm.user, function(error, auth) {
      if(error) {
        console.log('nope', error);
      } else {
        console.log('yup', auth);
      }
    });


  };
}
