angular.module('starter')
.service('imageService',['$cordovaImagePicker',function($cordovaImagePicker){

  var options = {
      maximumImagesCount: 1,
      width: 800,
      height: 800,
      quality: 80
  };

  var getImages = function(){
    return $cordovaImagePicker.getPictures(options);
  }

  return{
    getImages: getImages
  }

}])
