(function() {
	'use strict';

	angular.module('MenuApp')
	.component('menuItems', {
		templateUrl: 'src/menu-app/templates/items.component.template.html',
		bindings: {
			menuItems: '<'
		}
	});

})();