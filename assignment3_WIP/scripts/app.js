(function app {
'use strict';

angular.module('NarrowItDown',[])
.controller('NarrowItDownController', [])
.service('MenuSearch', MenuSearchService)


//'NarrowItDownController': wraps search textbox, button and list of found items
NarrowItDownController.$inject = ['MenuSearch'];
function NarrowItDownController(MenuSearch){
  var narrowedDown = this;
  narrowedDown.found = MenuSearch.getMatchedMenuItems(searchTerm);

};

//'MenuSearchService': has method: getMatchedMenuItems(searchTerm):
// reaches out to server (using $http service)
//      REST Endpoint is https://davids-restaurant.herokuapp.com/
//retrieves list of all menu items
//loops through menu items
//matches menu items with searchTerm
//creates new list with matching items
//returns the new list wrapped in a promise

// return $http(...).then(function (result) {
//       // process result and only keep items that match
//       var foundItems...

//       // return processed items
//       return foundItems;
//   });
})();