(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    
    // *** Set up UI states ***
    $stateProvider
    
    //Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/menu-app/templates/home.template.html'
    })

    //Categories list page
    .state({
      name: 'categories',
      url: '/categories',
      templateUrl: 'src/menu-app/templates/categories.state.template.html',
      controller: 'CategoriesController as catCtrl',
      resolve: {
        categories: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories()
        }]
      }
    })

    // Items in a category page
    .state('menuitems', {
      url: '/menu-items/{categoryId}',
      templateUrl: 'src/menu-app/templates/menu-items.template.html',
      controller: 'MenuItemsDetailController as itemsCtrl',
      resolve: {
        items: ['$stateParams', 'MenuDataService',
              function ($stateParams, MenuDataService) {
                return MenuDataService.getItemsForCategory($stateParams.categoryID);
              }]
        }
    });
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');
  }
})();
