angular.module('mnTechSite')
       .controller('BaseController', BaseController);

function BaseController(StyleService) {
  console.log('BaseController Loaded');

  var ctrl = this;

  ctrl.isActive = {};

  ctrl.setActive = function(route) {
    ctrl.isActive = StyleService.setActive(route);
 }


}
