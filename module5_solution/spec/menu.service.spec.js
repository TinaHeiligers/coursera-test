// write self to test the menu.service.js method for getMenuItem
describe('menu', function () {
  var menu;
  var $httpBackend;
  var ApiPath;

  beforeEach(function () {
    module('restaurant');//main app

    inject(function ($injector) {
      menu = $injector.get('MenuService');
      $httpBackend = $injector.get('$httpBackend');
      ApiPath = $injector.get('ApiPath');
    });
  });

  it('should return a valid menu item', function () {
    $httpBackend.whenGET(ApiPath + '/menu_items/D3.json').respond({ data: {"category_short_name":"D", "created_at":"2016-08-30T03:04:22.193Z","description":"chunks of chicken, breaded and deep-fried with a sesame seed sauce", "id":134, "image_present":"true", "large_portion_name":null, "name":"Sesame Chicken", "price_large":13.95, "price_small":null, "short_name":"D3", "small_portion_name":null, "updated_at":"2016-08-30T03:04:22.193Z"}});
    // now call the actual method with the same menu item shortName
    menu.getMenuItem('D3').then(function(response) {
      expect(response.data).toEqual({"category_short_name":"D", "created_at":"2016-08-30T03:04:22.193Z","description":"chunks of chicken, breaded and deep-fried with a sesame seed sauce", "id":134, "image_present":"true", "large_portion_name":null, "name":"Sesame Chicken", "price_large":13.95, "price_small":null, "short_name":"D3", "small_portion_name":null, "updated_at":"2016-08-30T03:04:22.193Z"})
    });
    $httpBackend.flush();
  })

  it('should return a service error', function () {
    $httpBackend.whenGET(ApiPath + '/menu_items/X9.json').respond({ data: { "status":"500", "error":"Internal Server Error"}});
    // now call the actual method with the same menu item non-existant shortName
    menu.getMenuItem('X9').then(function(response) {
      expect(response.data).toEqual({ "status":"500","error":"Internal Server Error"})
  });
  $httpBackend.flush();
});
  });
