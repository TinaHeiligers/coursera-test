(function () {
  'use strict';
  angular.module('MenuApp', ['Data']); //Data module is a dependency

  angular.module('MenuApp')
  .confidg(function () {
    console.log('MenuApp config fired');
  }).run(function () {
    console.log('MenuApp run fired');
  });
})();