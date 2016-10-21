(function() {
  'use strict';

  angular.module('MenuApp')
  .controller('CategoriesController', ['categories', function(categories) {
    this.categories = categories;
  }]);

})();