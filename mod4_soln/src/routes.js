(function() {
  'use strict';

  angular.module('MenuApp')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    
    // Home state
    $stateProvider.state({
      name: 'home',
      url: '/',
      templateUrl: 'src/templates/home.template.html'
    });

    $urlRouterProvider.otherwise('/');
  }]);
  
})();

// Your application should have 3 views (i.e., 3 view states): home (`home`), categories list (`categories`), items list (`items`).

// When the user goes to `/` path in your application, a home screen should be shown. It's up to you what you place on the home screen. You can just say "Welcome to our Restaurant". The home screen should have a link to a list of categories of menu items in the restaurant. Clicking that link would obviously take the user to the `/categories` view.

// The categories view should list all available categories of items on the menu. Each listing should be a link. Clicking that link should take the user to the `/items` view. Note that since what the `items` view state shows is dependent on which category the user clicked, the URL mapping will need to have a parameter in it. I.e., don't take the URLs I am listing in the assignment description as literal URLs. They are just naming hints.

// Make sure that if, while viewing the list of menu items for a particular category, the user copies the URL in the browser's address bar and pastes it into a new tab or a different browser, that the view is the same as the original one.