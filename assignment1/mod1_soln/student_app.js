"use strict";

(function () {

  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];

  function LunchCheckController($scope) {
    $scope.string = "";
    $scope.check = function () {
      if (!$scope.string)
        $scope.msg = "Please enter data first";
      else {
        if ($scope.string.split(",").length < 4)
          $scope.msg = "Enjoy!";
        else
          $scope.msg = "Too much!";
      }
    };
  }
}());