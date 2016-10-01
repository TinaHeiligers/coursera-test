(function () {
'use strict';

angular.module('NameCalculator', [])

.controller('NameCalculatorController', function ($scope) {
  $scope.name = "";
  $scope.totalValue = 0;

  $scope.displayNumeric = function () {
    var totalNameValue = calculatNumericForString($scope.name);
    $scope.totalValue = totalNameValue;
  };


  function calculatNumericForString(string) {
    var totalStringValue = 0;
    totalStringValue = string.split(",").length;
    return totalStringValue;
  }

});


})();