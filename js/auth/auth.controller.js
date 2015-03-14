angular
  .module('news')
  .controller('AuthController', AuthController);

function AuthController (BASE_URL, $location, $scope) {
  var vm = this;
  vm.user = {};

  vm.login = function () {
    var fb = new Firebase(BASE_URL);

    fb.authWithPassword(vm.user, function (error, authData) {
      if(error) {
        console.log('nope', error);
      } else {
        console.log('yup', authData);
        $location.path('/');
        $scope.$apply();
      }
    });
  };

  vm.register = function () {
    var fb = new Firebase(BASE_URL);

    fb.createUser(vm.user, function (err, authData) {
      if (err && err.code === 'EMAIL_TAKEN') {
        console.log('Error creating user', err);
        vm.login();
      } else if (err) {
        console.log('Error creating user', err);
      } else {
        console.log('You did it! You are in!', authData);
        $location.path('/');
        $scope.$apply();
      }
    });
  };
}
