angular.module('mnTechSite')
       .controller('ServicesController', ServicesController);

function ServicesController(EmailService, StyleService) {
  console.log('ServicesController Loaded');

  const ctrl = this;

  ctrl.setActive = function(route) {
    StyleService.setActive(route)
 }

  ctrl.sendFormData = function(data) {
    data.subject = "Requesting A Quote"
    console.log(ServicesController.name);
    EmailService.sendFormData(data).then(function(response){
      console.log("Response from submit: ", repsonse);
    });
  }
}
