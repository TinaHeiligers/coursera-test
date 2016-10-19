(function () {
  'use strict';

  angular.module('Data')
  .service('MenuDataService', MenuDataService);
  
  //need to define ApiBasePath before using it here
  MenuDataService.$inject = ['$http', 'ApiBasePath']
  MenuDataService = function ($http, ApiBasePath) {
    var service = this;

    service.getAllCategories = function ($http, ApiBasePath) {
     //return a promise from using $http service
     // url = https://davids-restaurant.herokuapp.com/categories.json 
    }

    service.getItemsForCategory(categoryShortName) {
     //return a promise from using $http service
     // url = https://davids-restaurant.herokuapp.com/menu_items.json?category= + categoryShortName 
    }
  }
})();