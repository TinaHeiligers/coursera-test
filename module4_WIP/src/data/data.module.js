(function () {
  'use strict';
  angular.module('Data', []); //Has no dependencies
  angular.module('Data')
  .config(function () {
    console.log('Data config fired');
  }).run(function () {
    console.log('Data run fired');
  });
})();