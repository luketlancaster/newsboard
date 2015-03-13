angular
  .module('news')
  .controller('ArticleTableCtrl', ArticleTableCtrl);

function ArticleTableCtrl($http) {
  var vm = this;

  // ArticleTableFacto.findAll( function (artcs) {
  //   vm.articles = artcs;
  // });

  $http
    .get('https://newsagg.firebaseio.com/articles/.json')
    .success(function (data){
      vm.articles = data;
    });
}
