angular
  .module('news')
  .controller('ArticleTableCtrl', ArticleTableCtrl);

function ArticleTableCtrl($http) {
  var vm = this;

  vm.post = function () {
    var data = vm.articles;
    $http
      .put('https://newsagg.firebaseio.com/articles/.json', data)
      .success(function () {
        console.log('works');
      }). error(function() {console.log('nope')});
  };

  $http
    .get('https://newsagg.firebaseio.com/articles/.json')
    .success(function (data){
      vm.articles = data;
    });
}
