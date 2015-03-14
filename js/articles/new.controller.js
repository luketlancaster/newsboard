angular
  .module('news')
  .controller('NewArticleCtrl', NewArticleCtrl);

function NewArticleCtrl($http, $location) {
  var vm = this;

  vm.newPost = {};

  vm.postData = function () {
    vm.newPost.postDate = (new Date()).toJSON();
    vm.newPost.submittedBy = 'Anonymous';
    vm.newPost.votes = {up: 0, down: 0};

    $http
      .post('https://newsagg.firebaseio.com/articles.json', vm.newPost)
      .success(function() {
        $location.path('/');
      });
  };

}