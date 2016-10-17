(function () {
  'use strict';
  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'src/menu-app/templates/components/categories.component.template.html',
    bindings: {
      categories: '<'
    }
  });
  
})();
  //create component called 'categories' that:
  //shows all available categories in the menu

  // The categories and the items components should NOT directly use the MenuDataService to fetch their own data. Instead, the proper data should be simply passed into the component. (Hint: use the one-way < binding).
  

  //from examples, copied and pasted:
  // function MenuCategoriesController(MenuDataService) {
  // //doing stuff with the data that's returned after visiting the url we built up
  // var menu = this;

  // var promise = MenuDataService.getAllCategories();
  // //the data being returned

  // promise.then(function (response) {
  //   //once the data's returned
  //   menu.categories = response.data;
  // })
  // .catch(function (error) {
  //   //in the case of an error
  //   console.log("Something went terribly wrong.");
  // });

