(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.items = "";
    $scope.totalValue = 0;

    $scope.checkItems = function () {
      var totalItemsCount = calculateNumericForString($scope.items);
      $scope.totalCount = totalItemsCount;
    }; 

    function calculateNumericForString(string) {
      var totalCount = 0;
      var items = string.split(",");

      for (var i = 0; i < items.length; i++) {
        totalCount += items(i)
      }
      return totalCount;
    }

  };
})();