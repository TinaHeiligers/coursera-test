(function() {
	'use strict';

	angular.module('MenuApp')
	.controller('ItemsController', ['menuData', '$stateParams', function(menuData, $stateParams) {
		this.menuItems = menuData.menu_items;
		this.category = menuData.category;
	}]);
})();