angular.module('mnTechSite')
       .service('StyleService', StyleService);

function StyleService() {

  const service = this;

  service.isActive = {}

  service.setInitial = function(route) {
    switch (route) {
      case 'home': service.isActive.home = true;
        break;
      case 'join': service.isActive.join = true;
        break;
      default: service.isActive.home = true;
    }
    console.log(service.isActive);
  }

  service.setActive = function(route) {
    service.isActive = {};
    switch (route) {
      case 'home': service.isActive.home = true;
        break;
      case 'about': service.isActive.about = true;
        break;
      case 'services': service.isActive.services = true;
        break;
      case 'join': service.isActive.join = true;
        break;
      default: service.isActive.home = true;
    }
    console.log(service.isActive);
  }

  // service.setActive(boolean) {
  //
  // }
// .global-navbar nav a

}// End of Service
