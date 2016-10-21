(function() {
	'use strict';

	angular.module('MenuApp')
	.component('categories', {
		templateUrl: 'src/menu-app/templates/components/categories.component.template.html',
		bindings: {
			categories: '<'
		}
	});

})();