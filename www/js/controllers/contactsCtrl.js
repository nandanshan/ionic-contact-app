angular.module('contact',[])
.controller('contactsCtrl',['$scope', '$ionicLoading', '$ionicModal', '$ionicPlatform', 'contactService', 'imageService', 'loadingService',function($scope, $ionicLoading, $ionicModal, $ionicPlatform, contactService, imageService, loadingService){

  var sc = $scope;
  sc.contacts = [];
  sc.collection = {
        selectedImage : ''
    };


  $ionicPlatform.ready(function() {

  sc.getImages = function() {
      imageService.getImages()
        .then(function (results) {
          console.log(results);
          // the result will contain only 1 image hence fetching the 0th index of the array
          sc.collection.selectedImage = results[0];
          sc.modal.remove();
        }, function(error) {
              console.log('Error: ' + JSON.stringify(error));
        });
      };



sc.getAllContacts = function(){
  loadingService.show();
  contactService.getAllContacts()
    .then(function(result){
      loadingService.hide();
        console.log(result);
        sc.contacts = result;
    },function(err){
      loadingService.hide();
      console.log(err);
    })
}

sc.saveContact = function(newContact) {
  if(newContact && (newContact.name && newContact.phone)){

    var contact = {
      "note":"myApp",
      "displayName": '',
      "phoneNumbers": [
        {
        "value": 0,
        "type": "mobile"
      }]
    };
    contact.displayName = newContact.name;
    contact.phoneNumbers[0].value = newContact.phone;
    console.log(contact);
    contactService.saveContact(contact)
    .then(function(result){
      console.log(result);
      sc.modal.remove();
      sc.getAllContacts();
    },function(err){
      console.log(err);
    })
  }else{
    console.log('invalid contact information');
  }
}

});

  sc.openContactModal = function(){
    $ionicModal.fromTemplateUrl('templates/contactModal.html', {
      scope: sc,
      animation: 'slide-in-up'
    }).then(function(modal) {
      sc.modal = modal;
      sc.modal.show()
    });
  }

  sc.openAvatarModal = function(){
    $ionicModal.fromTemplateUrl('templates/avatarModal.html', {
      scope: sc,
      animation: 'slide-in-up'
    }).then(function(modal) {
      sc.modal = modal;
      sc.modal.show()
    });
  }

  sc.cancelModal = function(){
    sc.modal.remove();
  }

 sc.getAllContacts();
}]);
