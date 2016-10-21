(function() {
	'use strict';

	angular.module('MenuApp')
	.component('menuItems', {
		templateUrl: 'src/menu-app/templates/components/items.component.template.html',
		bindings: {
			menuItems: '<'
		}
	});

})();