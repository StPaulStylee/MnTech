angular.module('mnTechSite')
       .controller('JoinController', JoinController);

function JoinController(EmailService, StyleService) {
  console.log('JoinController Loaded');

  var ctrl = this;

  ctrl.setActive = function(route) {
    StyleService.setActive(route)
 }

  ctrl.sendFormData = function(data) {
    data.subject = "Membership Request"
    console.log(ServicesController.name);
    EmailService.sendFormData(data).then(function(response){
      console.log("Response from submit: ", repsonse);
    });
  }

  // ctrl.isActive();
}
