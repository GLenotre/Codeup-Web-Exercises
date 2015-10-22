
    <!-- div to hold map -->
    <div id="map-canvas"></div>

    <!-- Load the Google Maps API [DON'T FORGET TO USE A KEY] -->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBCfL5E5dUAjbLwLOg8NBNdzAjqpxC0eVw"></script>

    <!-- Script to show address on map -->
    <script type="text/javascript">
    (function() {
        "use strict";
	// Include code from previous example

	// Set our address to geocode
	var address = "2800 Broadway St, San Antonio, TX 78209";

	// Init geocoder object
	var geocoder = new google.maps.Geocoder();

	// Geocode our address
	geocoder.geocode({ "address": address }, function(results, status) {

	   // Check for a successful result
	   if (status == google.maps.GeocoderStatus.OK) {

	       // Recenter the map over the address
	       map.setCenter(results[0].geometry.location);
	   } else {

	       // Show an error message with the status if our request fails
	       alert("Geocoding was not successful - STATUS: " + status);
	   }
	});
        // Set our map options
        var mapOptions = {
            // Set the zoom level
            zoom: 15,

            // This sets the center of the map at our location
            center: {
                lat:  29.424934, 
                lng: -98.514443
            }
        };

        // Render the map
        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
        
        var DoSeum = {lat: 29.452564, lng: -98.472008}; 
        // add a marker
        var marker = new google.maps.Marker({
            position: DoSeum,
            map: map,
            title: 'DoSeum',
            animation: google.maps.Animation.DROP
          });
        // add infowindow
        var infoDoSeum = "DoSeum...3-story museum promoting learning & discovery through interactive exhibits & creative programs."
        var infowindow = new google.maps.InfoWindow({
            content: infoDoSeum
        });
            marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
        //make three locations
    var areaOne = { name: 'DoSeum' };  // name >> property ... 'DoSeum'  >> value
    var areaTwo = { name: 'Wacky Kidz' };
    var areaThree = { name: 'Brackenridge Park' };
   var KidsPlaces = [ areaOne, areaTwo, areaThree ];
        KidsPlaces.forEach(function())
    console.log(KidsPlaces[0]);
    console.log(areaOne.name);

//names.forEach(function (element, index, array) {
//    console.log("I like " + element + " ice cream flavor.");
//});

        //.forEach()   ..... arr.forEach(callback[, thisArg])
        //// declare and initialize array

// loop through the array and log the values
//  shapes.forEach(function (element, index, array) {

    // element is the shape name
    // index is the iterator
    // array is the shapes array itself
//
//    console.log('The shape at index ' + index + ' is: ' + element);
// });

    })();
    </script>
</body>