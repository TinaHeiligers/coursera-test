(function() {
	'use strict';

	angular.module('MenuApp')
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

		$stateProvider.state({
			name: 'home',
			url: '/home',
			templateUrl: 'src/menu-app/templates/states/home.state.template.html'
		});

		$stateProvider.state({
			name: 'categories',
			url: '/categories',
			templateUrl: 'src/menu-app/templates/states/categories.state.template.html',
			controller: 'CategoriesController as catCtrl',
			resolve: {
				categories: ['MenuDataService', function(MenuDataService) {
					return MenuDataService.getAllCategories()
				}]
			}
		});

		$stateProvider.state({
			name: 'items',
			url: '/items/{categoryID}',
			templateUrl: 'src/menu-app/templates/states/items.state.template.html',
			controller: 'ItemsController as itemsCtrl',
			resolve: {
				menuData: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
					return MenuDataService.getItemsForCategory($stateParams.categoryID);
				}]
			}
		});

		$urlRouterProvider.otherwise('/home');

	}]);

})();