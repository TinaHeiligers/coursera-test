(function() {
  'use strict';

  angular.module('common')
  .service('UserService', UserService);

  function UserService() {
    var service = this;
    // console.log("In User Service")
    // --------add methods to saveUser and to getUser------
    var user = null;

    service.saveUser = function(usr) {
      user = usr;
    };

    service.getUser = function() {
      return user;
    };
  }
})();