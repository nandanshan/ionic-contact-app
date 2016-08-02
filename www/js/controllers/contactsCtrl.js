angular.module('starter')
.controller('contactsCtrl',['$scope', '$ionicModal', '$cordovaImagePicker', '$ionicPlatform',function($scope, $ionicModal, $cordovaImagePicker, $ionicPlatform){
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
                }, function(error) {
                    console.log('Error: ' + JSON.stringify(error));    // In case of error
                });
            };

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

  sc.addNewContact = function(contact){
    console.log(contact);
    if(contact && (contact.name && contact.phone)) {
      sc.contacts.push(contact);
      sc.modal.remove();
    }
  }

  sc.cancelModal = function(){
    sc.modal.remove();
  }
}]);
