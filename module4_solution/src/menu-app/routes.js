(function() {
	'use strict';

	angular.module('MenuApp')
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

		$stateProvider

		// Home view
		.state({
			name: 'home',
			url: '/',
			templateUrl: 'src/menu-app/templates/home.state.template.html'
		})

		// Categories View
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

		// category Items View
		.state({
			name: 'items',
			url: '/items/{categoryID}',
			templateUrl: 'src/menu-app/templates/items.state.template.html',
			controller: 'ItemsController as itemsCtrl',
			resolve: {
				menuData: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
					return MenuDataService.getItemsForCategory($stateParams.categoryID);
				}]
			}
		});

		$urlRouterProvider.otherwise('/');

	}]);

})();