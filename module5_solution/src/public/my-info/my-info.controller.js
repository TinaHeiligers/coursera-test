(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ["user", "MenuService", "ApiPath"];
function MyInfoController(user, MenuService, ApiPath) {
  var $ctrl = this;

  $ctrl.user = user;

  $ctrl.dish = {
    "name": "",
    "description": "",
    "image": null
  }

  var userDish = function() {
    var shortName = $ctrl.user.dish.shortName;
    var promise = MenuService.getMenuItem(shortName);
    promise
      .then(function(result) {
      $ctrl.dish.name = result.name;
      // console.log("In my-info.controller userDish userDish", result.name);
      $ctrl.dish.description = result.description;
      // console.log(result.description);
      if (result.image_present){
        // console.log("image present?", result.image_present)
        $ctrl.dish.image = ApiPath + "/images/" + shortName + ".jpg";}
    });
  };

  if ($ctrl.user)
    userDish();
}

})();
