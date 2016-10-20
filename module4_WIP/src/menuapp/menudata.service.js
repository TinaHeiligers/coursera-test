(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);
  
  //need to define ApiBasePath before using it here
  MenuDataService.$inject = ['$http', 'ApiBasePath']
  MenuDataService = function ($http, ApiBasePath) {
    var service = this;

    // I declared the items in the routes file as the results of the promises returned from the following methods: Thus, no need to declare them explicitly here.
    service.getAllCategories = function ($http, ApiBasePath) {
     //return a promise from using $http service
     // url = https://davids-restaurant.herokuapp.com/categories.json 
     return $http({
      method: 'GET',
      url: ApiBasePath + '/categries.json'
     }).then(function (results) {
      return results.data;
     });
    };

    service.getItemsForCategory = function (categoryShortName) {
     //return a promise from using $http service
     // url = https://davids-restaurant.herokuapp.com/menu_items.json?category= + categoryShortName 
     return $http({
      method: 'GET',
      url: ApiBasePath + '/menu_items.json',
      params: {
        category: categoryShortName
      }
     }).then(function (results) {
      return results.data;
     });
    };
  }
})();