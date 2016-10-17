(function() {
  'use strict';
  // constant API_URL = "https://davids-restaurant.herokuapp.com"
  
  angular.module('data')
  .service('MenuDataService', ['$http', 'API_URL', function($http, API_URL) {
    this.getAllCategories = function() {
    return $http({
      method: 'GET',
      url: API_URL + '/categories.json'
    }).then(function(response) {
      return response.data;  
    });
  };//END getAllCategories  
  
  this.getItemsForCategory = function(categoryShortName) {
    return $http({
      method: 'GET',
      url: API_URL + "/menu_items.json",
      params: {
        category: categoryShortName
      }
    }).then(function(response) {
      return response.data;  
    });
  };//END getItemsForCategoru

}]); //END MenuDataService

})();