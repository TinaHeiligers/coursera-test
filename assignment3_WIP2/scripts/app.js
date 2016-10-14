(function () {
  'use strict'
//using option 2
  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
  .directive('foundItems', FoundItemsDirective)
  .directive('itemsloaderindicator', ItemsLoaderIndicatorDirective);

  function FoundItemsDirective() {
    var ddo = {
      // restrict: 'E',
      templateUrl: 'foundItems.template.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
      controller: NarrowItDownController,
      controllerAs: 'narrow',
      bindToController: true
    };
    return ddo;
  }

  function ItemsLoaderIndicatorDirective() {
    var ddo = {
      restrict: 'E',
      templateUrl: 'itemsloaderindicator.template.html',
      scope: {
        showItemsLoaderIndicator: '<'
      },
      link: ItemsLoaderIndicatorDirectiveLink
    };
    return ddo;
  }

  function ItemsLoaderIndicatorDirectiveLink(scope, element, attrs, controller) {
    scope.$watch('showItemsLoaderIndicator', function (newValue, oldValue) {
      if (newValue === true) {
        showItemsLoaderIndicator();
      }
      else {
        hideItemsLoaderIndicator();
      }
    });

    function showItemsLoaderIndicato() {
      element.find('div').css('display', 'block');
    }
    function hideItemsLoaderIndicato() {
      element.find('div').css('display', 'none');
    }
  }

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {

  var narrow = this; //Has to be what I'm declaring the controller as in DOM
  narrow.searchTerm="";
  narrow.items=[];
  narrow.first = true;
  
  narrow.fussy = function () {
    narrow.first=false;

    if (narrow.searchTerm!==""){
      var promise = MenuSearchService.getMatchedMenuItems(narrow.searchTerm);
       
      promise.then(function (response) {
        narrow.items = response;
      })
      .catch(function (error) {
        console.log("Something went wrong.");
      });
    }
    else {
      narrow.items = [];
    }
  }//End narrow.fussy

  narrow.delete=function(indexItem){
    narrow.items.splice(indexItem, 1);
  }

  narrow.empty = function() {
    if (narrow.items.length==0) {
      return true
    }
    else {
      return false;
    }
  }
}; //End NarrowItDownController

MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    //retrieve all menu items
    return $http.get(ApiBasePath + "/menu_items.json")
      .then(function (result) {
        var allItems = result.data['menu_items'];

        // create empty array to store matching items
        var found=[];

        // loop through all items, match searchTerm with the description in the items and extract matching items
        for (var i=0; i<allItems.length; i++) {
          if (allItems[i].description.toLowerCase().indexOf(searchTerm.toLowerCase().trim()) !== -1) {
            found.push(allItems[i]); 
        }
      }
      // console.log('items: ', found)
      return found;
    })
  }//End getMatchedMenuItems
} //End MenuSearchService

})();