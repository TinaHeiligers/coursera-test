"use strict";

(function () {

  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];

  function LunchCheckController($scope) {
    $scope.string = "";
    // $scope.message = "";
    $scope.status = "";
    $scope.col = "";

    $scope.check = function () {
      var items = $scope.string.split(",")
    
      var arr = []
      for (var i = 0; i < items.length; i++) {
        if (items[i] != " " && items[i] != "") {
          arr.push(items[i])
        }
      }
    
      if (arr.length == 0) {
        $scope.message = "Please enter data first";
        $scope.status = "has-error";
        $scope.col = "red";
      }
      else {
      
        if (arr.length < 4){
          $scope.message = "Enjoy!";
          $scope.status = "has-success";
          $scope.col = "green";
              }
        else{
          $scope.message = "Too much!";
          $scope.status = "has-success";
          $scope.col = "green";}
        }
      }
  }
}());
