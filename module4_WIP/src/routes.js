(function () {
  'use strict';
  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    //Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/menuapp/templates/home.template.html'
    })

    //Categories list page
    .state('categories', {
      url: '/categories', 
      templateUrl: 'src/menuapp/templates/categories.template.html',
      controller: 'CategoriesController as catCtrl',
      resolve: {
        items: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    // Items in a category page
    .state('menuitems', {
      url: '/menu-items/{categoryId}',
      templateUrl: 'src/menuapp/templates/menu-items.template.html',
      controller: 'MenuItemsDetailController as itemsCtrl',
      resolve: {
        items: ['$stateParams', 'MenuDataService',
              function ($stateParams, MenuDataService) {
                return MenuDataService.getItemsForCategory($stateParams.categoryID);
              }]
        }
    });
  }
})();
