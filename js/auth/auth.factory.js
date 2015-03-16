angular
  .module('news')
  .factory('authFactory', authFactory);

function authFactory(BASE_URL) {
  return {
    isLoggedIn: function () {
      var fb = new Firebase(BASE_URL);

      return !!fb.getAuth();
    },

    logout: function (cb) {
      var fb = new Firebase(BASE_URL);

      fb.unauth(cb);
    },

    getAuth: function () {
      var fb = new Firebase(BASE_URL);

      return fb.getAuth();
    }
  };
}