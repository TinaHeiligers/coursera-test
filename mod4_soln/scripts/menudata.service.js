(function () {
  'use strict';
  angular.service('MenuDataService', MenuDataService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/categories.json")

  MenuDataService.$inject = ['$http', 'ApiBasePath']
  function MenuDataService($http, ApiBasePath) {
    var service = this;

  
  function getAllCategories($http, ApiBasePath) {
    var response = $http({
      method: 'GET',
      url: ApiBasePath
    });
    return response;
  }//END getAllCategories

  function getItemsForCategory(categoryShortName) {
    var response = $http({
      method: 'GET',
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: categoryShortName
      }
    });
    return response;
  }//END getItemsForCategoru

} //END MenuDataService

})();