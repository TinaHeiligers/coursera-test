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
    name: "",
    quantity: ""
  }
];

  angular.module("ShoppingListCheckOffServiceApp", [])
  .controller("ToBuyController", ToBuyController)
  .controller("AlreadyBoughtController", AlreadyBoughtController);

  ToBuyController.$inject = ["$scope"];

  function ToBuyController() {
    var tobuy = this
    tobuy.shoppingList = shoppingList
    console.log(tobuy.shoppingList)
    // console.log("shoppinglist: ", shoppingList)
    // console.log("shoppingList[0].name: ", shoppingList[0].name)
    // console.log("shoppingList[0].quantity: ", shoppingList[0].quantity)
    // $scope.string = "";
    // $scope.message = "";
    // $scope.status = "";
    // $scope.col = "";

    // $scope.addToList = function () {
    //   var newItem = {
    //     name: $scope.newItemName,
    //     quantity: $scope.newItemQuantity
    //   };

    //   // $scope.shoppingList.pop(newItem);//?//
    // };
  }
  AlreadyBoughtController.$inject = ["$scope"];
  function AlreadyBoughtController($scope) {
    var alreadybought = this;
    alreadybought.shoppinglist = shoppingList2
    console.log("AlreadyBoughtController $scope: ", $scope);

    // $scope.string = "";
    // $scope.message = "";
    // $scope.status = "";
    // $scope.col = "";

    $scope.addToList = function () {
      var newItem = {
        name: $scope.newItemName,
        quantity: $scope.newItemQuantity
      };

      $scope.shoppingList2.push(newItem);
    };
  }

}());