(function () {
    "use strict";
    angular.module('public')
  .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService', 'UserService'];
    function SignUpController(MenuService, UserService) {
  var $ctrl = this;

  (function() {
      var usr = UserService.getUser();
      if (usr) {
    $ctrl.user = usr;
      } else {
    $ctrl.user = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dish: { shortName: "" }
    }
      }
  })();

  $ctrl.submitted = false;

  $ctrl.submit = function() {
      $ctrl.submitted = true;
      // console.log("in sign-up.submit")
      UserService.saveUser($ctrl.user);
      // console.log("user info:", $ctrl.user.firstName, $ctrl.user.dish)
  };

  $ctrl.checkMenuItem = function() {
      var promise = MenuService.getMenuItem($ctrl.user.dish.shortName);
      promise
    .then(function(result) {
        $ctrl.regForm.shortName.$setValidity('shortName', true);
        // console.log("in .then", promise.data)
    }, function(reason) {
        $ctrl.regForm.shortName.$setValidity('shortName', false);
    });
  };
    }
})();
