angular
  .module('news')
  .controller('ArticleTableCtrl', ArticleTableCtrl);

function ArticleTableCtrl($http) {
  var vm = this;

  vm.vote = function (direction, uuid) {
    var data = vm.articles[uuid];

    if (direction === 'up') {
      data.votes.up++;
    } else if (direction === 'down') {
      data.votes.down++;
    }

    $http.put('https://newsagg.firebaseio.com/articles/' + uuid + '.json', data);
  };

  $http
    .get('https://newsagg.firebaseio.com/articles/.json')
    .success(function (data){
      vm.articles = data;
    });
}
