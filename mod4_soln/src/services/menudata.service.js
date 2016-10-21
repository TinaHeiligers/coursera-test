(function() {
  'use strict';
  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', 'ApiBasePath'];
  function MenuDataService($http, ApiBasePath) {
    var service = this;

    service.getAllCategories = function() {
      console.log('In MenuDataService.getAllCategories')
      return $http({
        method: 'GET',
        url: ApiBasePath + '/categories.json'
      }).then(function(result) {
              console.log(result.data);
              return result.data;
              }, function errorCallback(result) {
                    function errorCallback() {
                      console.log('Something went wrong');
                };
            });
    };

    service.getItemsForCategory = function(categoryShortName) {
      console.log('In MenuDataService.getItemsForCategory')
      return $http({
        method: 'GET',
        url: ApiBasePath + '/menu_items.json',
        params: {
          category: categoryShortName
        }
      }).then(function(result) {
              console.log(result.data);
              return result.data;
              }, function errorCallback(result) {
                    function errorCallback() {
                      console.log('Something went wrong');
                };
            });
    };
  };

})();