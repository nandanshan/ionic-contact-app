angular.module('starter')
.service('contactService',['$cordovaContacts', '$ionicPlatform',function($cordovaContacts, $ionicPlatform){


    var getAllContacts = function(){
      var options = {
        filter : 'myApp',
        multiple: true,
        fields : ['note']
      };
      options.hasPhoneNumber = true;
      console.log('option',options);
      return $cordovaContacts.find(options);
      }

    var saveContact = function(contact){
      console.log('contact',contact);
      return $cordovaContacts.save(contact);
    }


  return{
    getAllContacts: getAllContacts,
    saveContact : saveContact
  }
}]);
