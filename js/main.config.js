angular
  .module('news')
  .config( function newsConfig($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'js/articles/table.html',
      controller: 'ArticleTableCtrl',
      controllerAs: 'table'
    })
    .when('/submit', {
      templateUrl: 'js/articles/new.html',
      controller: 'NewArticleCtrl',
      controllerAs: 'article'
    })
    .when('/login', {
      templateUrl: 'js/auth/auth.html',
      controller: 'AuthController',
      controllerAs: 'auth'
    });
});