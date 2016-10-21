(function() {
	'use strict';

	angular.module('MenuApp')
	.controller('ItemsController', ItemsController);

  ItemsController.$inject = ['menuData', '$stateParams'];
  function ItemsController(menuData, $stateParams) {
		var itemsController = this;
    itemsController.menuItems = menuData.menu_items;
		itemsController.category = menuData.category;
	};
})();