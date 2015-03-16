angular
  .module('news')
  .run(privateRoutes);

  function privateRoutes($rootScope, authFactory, $location){
    $rootScope.$on('$routeChangeStart', function (event, nextRoute) {

      $rootScope.user = authFactory.getAuth();

      if (nextRoute.$$route.private && !authFactory.isLoggedIn()) {
        $location.path('/login');
      }
    });
  }