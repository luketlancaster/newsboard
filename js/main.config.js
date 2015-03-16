angular
  .module('news')
  .config( function newsConfig($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'js/articles/table.html',
      controller: 'ArticleTableCtrl',
      controllerAs: 'table',
      private: true
    })
    .when('/submit', {
      templateUrl: 'js/articles/new.html',
      controller: 'NewArticleCtrl',
      controllerAs: 'article',
      private: true
    })
    .when('/login', {
      templateUrl: 'js/auth/auth.html',
      controller: 'AuthController',
      controllerAs: 'auth',
      resolve: {
        data: function($location, authFactory) {
          if(authFactory.isLoggedIn()) {
            $location.path('/');
          }
        }
      }
    })
    .when('/logout', {
      template: '',
      controller: 'LogoutController'
    })
    .otherwise({
      redirectTo: '/login'
    });
});