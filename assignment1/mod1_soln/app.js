(function () {
'use strict';

angular.module('LunchCheck', [])

// .controller('NameCalculatorController', function ($scope) {
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.name = "";
  $scope.totalValue = 0;
  $scope.messageText = "";

  $scope.displayNumeric = function () {
    var totalStringValue = calculatNumericForString($scope.name);
    $scope.totalValue = totalStringValue;    
    var messageText = displayMessage($scope.totalValue)
    $scope.messageText = messageText
  };

  function displayMessage(totalStringValue) {
    var messageText = calculatNumericForString($scope.name);
    if (messageText == "") {
      $scope.messageText = "Please enter data first";
    }
    else if (messageText <= 3) {
      $scope.messageText = "Enjoy!";
    }
    else {
      $scope.messageText = "Too much!";
    }
    return $scope.messageText
  };

  function calculatNumericForString(string) {
    var totalStringValue = 0;
    if (string != "") {
      totalStringValue = string.split(",").length;
    }
    return totalStringValue;
  }
};
})();