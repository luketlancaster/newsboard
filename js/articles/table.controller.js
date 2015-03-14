angular
  .module('news')
  .controller('ArticleTableCtrl', ArticleTableCtrl);

function ArticleTableCtrl($http) {
  var vm   = this,
      user = 'annon';

  vm.vote = function (direction, uuid) {
    var data       = vm.articles[uuid],
        vote       = {};
        vote[uuid] = direction;

    if(!vm.usersVotes[uuid]) {
      if (direction === 'up') {
        data.votes.up++;
      } else {
        data.votes.down++;
      }

      vm.usersVotes[uuid] = vote;

      $http.put('https://newsagg.firebaseio.com/articles/' + uuid + '.json', data);
      $http.patch('https://newsagg.firebaseio.com/votes/' + user + '/.json', vote);
    }
  };

  $http
    .get('https://newsagg.firebaseio.com/articles/.json')
    .success(function (data){
      vm.articles = data;
    });

  $http
    .get('https://newsagg.firebaseio.com/votes/' + user + '/.json')
    .success(function (data) {
      vm.usersVotes = data || {};
    });
}
