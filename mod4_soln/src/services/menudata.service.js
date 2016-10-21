(function() {
  'use strict';

  angular.module('data')
  .service('MenuDataService', ['$http', 'ApiBasePath', function($http, ApiBasePath) {

    this.getAllCategories = function() {
      return $http({
        method: 'GET',
        url: ApiBasePath + '/categories.json'
      }).then(function(response) {
        console.log("I'm here")
        return response.data;
      });
    };

    this.getItemsForCategory = function(categoryShortName) {
      return $http({
        method: 'GET',
        url: ApiBasePath + '/menu_items.json',
        params: {
          category: categoryShortName
        }
      }).then(function(response) {
        return response.data;
      }); 
    };

  }]);

})();