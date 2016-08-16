(function(){
  angular.module('map',[])
    .controller('mapCtrl',[
      '$scope',
      '$rootScope',
      '$cordovaGeolocation',
      '$cordovaNetwork',
      '$ionicPopup',
      '$ionicPlatform',
      'mapService',function(
        $scope,
        $rootScope,
        $cordovaGeolocation,
        $cordovaNetwork,
        $ionicPopup,
        $ionicPlatform,
        mapService){

  // $ionicPlatform.ready(function() {
  // var sc = $scope;
  // sc.show = false;
  // sc.online = true;
  //
  // sc.refOnline = sc.$on('$cordovaNetwork:online', function(event, networkState){
  //                   if(sc.online) return;
  //                   sc.online = true;
  //                   sc.init();
  //                   $ionicPopup.alert({
  //                      title: 'Internet available',
  //                      template: 'you are now online'
  //                    })
  //                    .then(function(res){
  //                      console.log('Successfully closed the alert window2');
  //                    })
  //                 });
  //
  // sc.$on('$cordovaNetwork:offline', function(event, networkState){
  //   if(!sc.online) return;
  //   sc.online = false;
  //   $ionicPopup.alert({
  //      title: 'No Internet',
  //      template: 'Please connect your device to internet'
  //    })
  //    .then(function(res){
  //      console.log('Successfully closed the alert window2');
  //    })
  // });
  //
  //
  //
  //   //function which will initialize the map
  //     sc.init = function(){
  //
  //       sc.show = true;
  //
  //       sc.techjini = new google.maps.LatLng(12.915045111914022, 77.58593731534427);
  //       sc.coordinates = {
  //         latitude:0,
  //         longitude:0
  //       };
  //
  //       sc.map = new google.maps.Map(document.getElementById("map"), {
  //         // options for the map
  //         center: sc.techjini,
  //         zoom: 15,
  //         mapTypeId: google.maps.MapTypeId.ROADMAP
  //       });
  //
  //       var btnCenter = document.getElementById("btnCenter");
  //       sc.map.controls[google.maps.ControlPosition.TOP_CENTER].push(btnCenter);
  //
  //       // Setup the click event listeners: simply set the map to techjini office.
  //       btnCenter.addEventListener('click', function() {
  //         sc.map.panTo(sc.techjini);
  //       });
  //
  //       var btnLocation = document.getElementById("btnLocation");
  //       sc.map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(btnLocation);
  //
  //       btnLocation.addEventListener('click', function() {
  //         sc.getLocation();
  //       });
  //
  //       // register an event which will fire when the map loads completely
  //       google.maps.event.addListenerOnce(sc.map, 'idle', function(){
  //
  //         sc.getLocation = function(){
  //
  //           var options = {timeout: 10000, enableHighAccuracy: false};
  //           // get current location of the device
  //           $cordovaGeolocation.getCurrentPosition(options)
  //             .then(function(position){
  //               // create an object consisting latitude and longitude
  //               sc.latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  //
  //               sc.coordinates.latitude = position.coords.latitude;
  //               sc.coordinates.longitude = position.coords.longitude;
  //
  //               if(sc.marker){
  //                 sc.marker.setMap(null);
  //                 sc.marker = null;
  //               }
  //
  //               // create a marker to diaplay on the map
  //               sc.marker = new google.maps.Marker({
  //                 map: sc.map,
  //                 draggable:true,
  //                 animation: google.maps.Animation.DROP,
  //                 position: sc.latLng
  //               });
  //
  //               // this event will fire when the marker is moved and gives the marker position
  //               google.maps.event.addListener(sc.marker, 'drag', function (evt) {
  //
  //                 // ensures that the view will be updated immediately with these values inside
  //                 $scope.$apply(function () {
  //                   sc.coordinates.latitude = evt.latLng.lat();
  //                   sc.coordinates.longitude = evt.latLng.lng();
  //                 });
  //                   console.log(evt.latLng.lat() + ' ' + evt.latLng.lng());
  //               });
  //             }, function(error){
  //             console.log("Could not get location");
  //           });
  //         }
  //       })
  //       // will destroy the event cordovaNetwork:online
  //       sc.refOnline();
  //     }
  //
  //     if($cordovaNetwork.isOnline()){
  //       sc.init();
  //     }else {
  //       $ionicPopup.alert({
  //          title: 'No Internet',
  //          template: 'Please connect your device to internet'
  //        })
  //        .then(function(res){
  //          console.log('Successfully closed the alert window1');
  //        })
  //     }
  //
  //   })
  }]);
})();
