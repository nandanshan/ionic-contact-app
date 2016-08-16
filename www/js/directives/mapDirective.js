(function(){
  angular.module('map')
    .directive('gMap', function(){
      return{
        restrict : 'E',
        replace: true,
        transclude: true,
        // scope:{},
        link : function(scope, element, attrs){
          scope.techjini = new google.maps.LatLng(12.915045111914022, 77.58593731534427);
          scope.map = new google.maps.Map(document.getElementById('map'), {
            // options for the map
            center: scope.techjini,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          });
        },
        templateUrl: 'templates/map/gMap.html'
      }
    })
    .directive('gMapCenterBtn',function(){
      return{
        restrict : 'E',
        replace: true,
        transclude: true,
        // scope:{},
        link: function(scope, element, attrs){
          var btnCenter = document.getElementById("btnCenter");
          scope.map.controls[google.maps.ControlPosition.TOP_CENTER].push(btnCenter);

          // Setup the click event listeners: simply set the map to techjini office.
          btnCenter.addEventListener('click', function() {
            scope.map.panTo(scope.techjini);
          });

        },
        templateUrl:'templates/map/gMapCenterBtn.html'
      }
    })
    .directive('gMapLocationBtn',['$cordovaGeolocation',function($cordovaGeolocation){
      return{
        restrict : 'E',
        replace : true,
        transclude: true,
        link: function(scope, element, attrs){

          scope.coordinates = {
                  latitude:0,
                  longitude:0
                };

          var btnLocation = document.getElementById("btnLocation");
          scope.map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(btnLocation);

          var options = {timeout: 10000, enableHighAccuracy: false};
          btnLocation.addEventListener('click', function() {

         // get current location of the device
         $cordovaGeolocation.getCurrentPosition(options)
           .then(function(position){
               // create an object consisting latitude and longitude
               scope.latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

               scope.coordinates.latitude = position.coords.latitude;
               scope.coordinates.longitude = position.coords.longitude;

               if(scope.marker){
                 scope.marker.setMap(null);
                 scope.marker = null;
               }

               // create a marker to diaplay on the map
               scope.marker = new google.maps.Marker({
                 map: scope.map,
                 draggable:true,
                 animation: google.maps.Animation.DROP,
                 position: scope.latLng
               });

               // this event will fire when the marker is moved and gives the marker position
                google.maps.event.addListener(scope.marker, 'drag', function (evt) {
                 // ensures that the view will be updated immediately with these values inside
                 scope.$apply(function () {
                   scope.coordinates.latitude = evt.latLng.lat();
                   scope.coordinates.longitude = evt.latLng.lng();
                 });
                 console.log(evt.latLng.lat() + ' ' + evt.latLng.lng());
               });
             },function(error){
               console.log("Could not get location");
            });
          });
        },
        templateUrl:'templates/map/gMapLocationBtn.html'
      }
    }])
})();
