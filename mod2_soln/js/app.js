(function () {
'use strict';
var shoppingList = [
          { name: "Onions",  quantity: "2" },
          { name: "Garlic", quantity: "1" },
          { name: "Carrots", quantity: "5" },
          { name: "Celery", quantity: "2" },
          { name: "Potatoes", quantity: "10" },
          { name: "Parsnips", quantity: "3" }
      ];

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOff', ShoppingListCheckOffService);

    ToBuyShoppingController.$inject = ['ShoppingListCheckOff'];
    function ToBuyShoppingController(ShoppingListCheckOff){
        var tobuy = this;
        tobuy.items= ShoppingListCheckOff.getItemsToBuy();
        tobuy.bought = function (itemIndex) {
          ShoppingListCheckOff.bought(itemIndex);
        }   
    } 

    AlreadyBoughtController.$inject = ['ShoppingListCheckOff'];
    function AlreadyBoughtController(ShoppingListCheckOff){
      var alreadybought=this;
      alreadybought.items=ShoppingListCheckOff.getItemsBought();
    
    }

    function ShoppingListCheckOffService() {
      var service = this;
      var itemsBuy = shoppingList; 
      var itemsBought=[];          
      
      service.bought = function (itemIndex) {
        var item = {
        
        name: itemsBuy[itemIndex].name,
        quantity: itemsBuy[itemIndex].quantity
      };

        itemsBought.push(item); 
        itemsBuy.splice(itemIndex, 1); 
      };

     
    service.getItemsToBuy = function () {
      return itemsBuy;
    };

    service.getItemsBought = function () {
      return itemsBought;
    };
  }

})();