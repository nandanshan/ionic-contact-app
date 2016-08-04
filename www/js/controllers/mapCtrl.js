angular.module('starter')
.controller('mapCtrl',['$scope', '$cordovaGeolocation', '$ionicPlatform', 'mapService',function($scope, $cordovaGeolocation, $ionicPlatform, mapService){

var sc = $scope;
sc.coordinates = {
  latitude:0,
  longitude:0
};
$ionicPlatform.ready(function() {

  var options = {timeout: 10000, enableHighAccuracy: false};

  // get current location of the device
  $cordovaGeolocation.getCurrentPosition(options)
    .then(function(position){
      // create an object consisting latitude and longitude
      sc.latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      sc.coordinates.latitude = position.coords.latitude.toFixed(3);
      sc.coordinates.longitude = position.coords.longitude.toFixed(3);

      // create a google map object using some options
      // the map will be displayed inside a div whose id is provided
      sc.map = new google.maps.Map(document.getElementById("map"), {
        // options for the map
        center: sc.latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

        // register an event which will fire when the map loads completely
        google.maps.event.addListenerOnce(sc.map, 'idle', function(){

            // create a marker to diaplay on the map
            sc.marker = new google.maps.Marker({
                map: sc.map,
                draggable:true,
                animation: google.maps.Animation.DROP,
                position: sc.latLng
            });

            // this event will fire when the marker is moved and gives the marker position
            google.maps.event.addListener(sc.marker, 'drag', function (evt) {

              setTimeout(function () {
                $scope.$apply(function () {
                  sc.coordinates.latitude = evt.latLng.lat().toFixed(3);
                  sc.coordinates.longitude = evt.latLng.lng().toFixed(3);
                  });
              }, 1);

              console.log(evt.latLng.lat().toFixed(3) + ' ' + evt.latLng.lng().toFixed(3));
            });

        });

    }, function(error){
      console.log("Could not get location");
    });
});

}]);
