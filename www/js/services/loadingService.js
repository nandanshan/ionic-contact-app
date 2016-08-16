angular.module('contact')
.service('loadingService',['$ionicLoading',function($ionicLoading){

  var show = function(){
    $ionicLoading.show({
      template: 'Loading...',
      noBackdrop: true,
      hideOnStateChange: true
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });
  }

  var hide = function(){
    $ionicLoading.hide().then(function(){
       console.log("The loading indicator is now hidden");
    });
  }

  return{
    show: show,
    hide: hide
  }

}])
