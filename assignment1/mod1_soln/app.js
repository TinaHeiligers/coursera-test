(function () {
'use strict';

angular.module('NameCalculator', [])

.controller('NameCalculatorController', function ($scope) {
  $scope.name = "";
  $scope.totalValue = 0;
  $scope.message = "message";

  $scope.displayNumeric = function () {
    var totalNameValue = calculatNumericForString($scope.name);
    $scope.totalValue = totalNameValue;
  };


  function calculatNumericForString(string) {
    var totalStringValue = 0;
    totalStringValue = string.split(",").length;
    return totalStringValue;
  }

  function messageForItemsCount() {
    var totalItemsCount = displayNumeric($scope.totalValue);
    var message = "";
    if (totalItemsCount == "") {
      $scope.message = "Please enter data first";
    }
    else if (totalItemsCount <= 3) {
      $scope.message = "Enjoy!";
    }
    else {
      $scope.message = "Too much!";
    }
    return $scope.message
  }
    
});


})();