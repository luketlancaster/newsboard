angular
  .module('news')
  .filter('datePretty', function () {
    return function (date) {
      var relDate = date ? moment(date).fromNow() : 'No Date Provided';
      return relDate;
    };
  });