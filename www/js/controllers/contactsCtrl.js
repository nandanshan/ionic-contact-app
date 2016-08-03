angular.module('starter')
.controller('contactsCtrl',['$scope', '$ionicModal', '$cordovaImagePicker', '$ionicPlatform', 'contactService', '$cordovaContacts',function($scope, $ionicModal, $cordovaImagePicker, $ionicPlatform, contactService, $cordovaContacts){
  var sc = $scope;
  sc.contacts = [];
  sc.collection = {
        selectedImage : ''
    };

  
    $ionicPlatform.ready(function() {

            sc.getImages = function() {
                // Image picker will load images according to these settings
                var options = {
                    maximumImagesCount: 1, // Max number of selected images, I'm using only one for this example
                    width: 800,
                    height: 800,
                    quality: 80            // Higher is better
                };

                $cordovaImagePicker.getPictures(options).then(function (results) {
                    // Loop through acquired images
                    for (var i = 0; i < results.length; i++) {
                        sc.collection.selectedImage = results[i];   // We loading only one image so we can use it like this
                        }
                        sc.modal.remove();
                }, function(error) {
                    console.log('Error: ' + JSON.stringify(error));    // In case of error
                });
            };

        });




sc.getAllContacts = function(){
  contactService.getAllContacts()
    .then(function(result){
        console.log(result);
        sc.contacts = result;
    },function(err){
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
