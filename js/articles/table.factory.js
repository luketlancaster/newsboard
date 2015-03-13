angular
  .module('news')
  .factory('ArticleTableFacto', ArticleTableFacto);

function ArticleTableFacto($http) {
  var articles = {};

  return {
    articles.findAll = function (cb) {
      $http
        .get('https://newsagg.firebaseio.com/articles/.json')
        .success(function (data){
          cb(data);
        });
      }
  };
}