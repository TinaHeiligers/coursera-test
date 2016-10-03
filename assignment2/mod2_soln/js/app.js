"use strict";

(function () {

var shoppingList = [
  {
    name: "Onions",
    quantity: "2"
  },
  {
    name: "Garlic",
    quantity: "1"
  },
  {
    name: "Carrots",
    quantity: "5"
  },
  {
    name: "Celery Sticks",
    quantity: "10"
  },
  {
    name: "Potatoes",
    quantity: "3"
  }
];

var shoppingList2 = [
  {
    name: "testing",
    quantity: "10"
  }
];

  angular.module("ShoppingListCheckOffServiceApp", [])
  .controller("ToBuyController", ToBuyController)
  .controller("AlreadyBoughtController", AlreadyBoughtController);

  ToBuyController.$inject = ["$scope"];

  function ToBuyController() {
    var tobuy = this
    tobuy.shoppingList = shoppingList
    
    // console.log("shoppinglist: ", shoppingList)
    // console.log("shoppingList[0].name: ", shoppingList[0].name)
    // console.log("shoppingList[0].quantity: ", shoppingList[0].quantity)
    // $scope.string = "";
    // $scope.message = "";
    // $scope.status = "";
    // $scope.col = "";
    // NEED A FUNCTION TO:
    // remove the item from the "toBuy" list on click
    // Must happen on ng-click
  }
  AlreadyBoughtController.$inject = ["$scope"];
  function AlreadyBoughtController($scope) {
    var alreadybought = this;
    alreadybought.shoppingList = shoppingList2
    console.log(alreadybought.shoppingList)

    // $scope.string = "";
    // $scope.message = "";
    // $scope.status = "";
    // $scope.col = "";

    // NEED A FUNCTION TO:
    // add the item removed from the tobuy list to the alreadybought list
    // Must happen on ng-click

  }

}());