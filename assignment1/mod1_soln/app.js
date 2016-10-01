(function () {
'use strict';

angular.module('NameCalculator', [])

.controller('NameCalculatorController', function ($scope) {
  $scope.name = "";
  $scope.totalValue = 0;
  $scope.messageText = "";
  // console.log($scope.messageText)

  $scope.displayNumeric = function () {
    var totalStringValue = calculatNumericForString($scope.name);
    $scope.totalValue = totalStringValue;
    // console.log("above messageText call totalValue is:")
    // console.log($scope.totalValue)
    
    var messageText = displayMessage($scope.totalValue)
    $scope.messageText = messageText
  };

  function displayMessage(totalStringValue) {
    var messageText = calculatNumericForString($scope.name);
    // console.log("in displayMessageTop")
    if (messageText == "") {
      $scope.messageText = "Please enter data first";
      // console.log($scope.messageText)
    }
    else if (messageText <= 3) {
      $scope.messageText = "Enjoy!";
      // console.log($scope.messageText)
    }
    else {
      $scope.messageText = "Too much!";
    }
    return $scope.messageText
  };

  function calculatNumericForString(string) {
    var totalStringValue = 0;
    // console.log("In calculatNumericForString")
    // console.log(totalStringValue)
    if (string != "") {
      totalStringValue = string.split(",").length;
    
      // console.log("After totalStringValue count")
      // console.log(totalStringValue)
    }
    
    return totalStringValue;
    
  }
    
});


})();