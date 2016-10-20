(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);
  
  //need to define ApiBasePath before using it here
  MenuDataService.$inject = ['$http', 'ApiBasePath']
  function MenuDataService($http, ApiBasePath) {
    var service = this;

    service.getAllCategories = function() {
     //return a promise from using $http service
     // url = https://davids-restaurant.herokuapp.com/categories.json 
     return $http({
      method: 'GET',
      url: ApiBasePath + '/categories.json'
     }).then(function (results) {
      console.log("In MenuDataService.getAllCategories", results.data)
      return results.data;
     });
    };

    service.getItemsForCategory = function(categoryShortName) {
     //return a promise from using $http service
     // url = https://davids-restaurant.herokuapp.com/menu_items.json?category= + categoryShortName 
     return $http({
      method: 'GET',
      url: ApiBasePath + '/menu_items.json',
      params: {
        category: categoryShortName
      }
     }).then(function(results) {
      console.log("In MenuDataService.getItemsForCategories", results.data)
      return results.data;
     });
    };
  }
})();