(function () {
  'use strict';

  angular.module('MenuApp')
  .component('menuItems', {
    templateUrl: 'src/menu-app/templates/components/items.components.template.html',
    bindings: {
      menuItems: '<'
    }
  });
  // Create items.component.js file and create a component called items that shows all of the menu items for a particular category.  

  // The categories and the items components should NOT directly use the MenuDataService to fetch their own data. Instead, the proper data should be simply passed into the component. (Hint: use the one-way < binding).
})();