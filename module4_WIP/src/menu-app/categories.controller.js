(function() {
  'use strict';

  angular.module('MenuApp')
  .controller('CategoriesController', ['categories', function(categories) {
    var catCtrl = this;
    catCtrl.categories = categories;
  }]);
  // .controller('CategoriesController', CategoriesController);

  // CategoriesController.$inject = ['MenuDataService', 'items'];
  // function CategoriesController(MenuDataService, items) {
  //   var categories = this;
  //   categories.items = items;
  }
)();