
var HTMLheaderName = "<h1 id='name'>%data%</h1>";
var HTMLheaderRole = "<div class='role'>%data%</div>";
var HTMLbioPic = "<img src='%data%' class='biopic'>";

var HTMLnavigation = "<li><a href='#' id='link%id%'>%data%</a></li>";

var HTMLlocation = "<li class='flex-item'><span class='orange-text'>location</span><span class='white-text'>%data%</span></li>";

var HTMLworkHeader ="<h2>%data%</h2>";
var HTMLworkStart = "<div class='work-entry content'></div>";
var HTMLworkEmployer = "<a class='link-text' href='#'>%data%";
var HTMLworkTitle = " <span class='light-text'>- %data%</span></a>";
var HTMLworkDates = "<div class='date-text'>%data%</div>";
var HTMLworkLocation = "<div class='location-text'>%data%</div>";
var HTMLworkDescription = "<p><br>%data%</p>";

var HTMLprojectsHeader ="<h2>%data%</h2>";
var HTMLprojectStart = "<div class='project-entry content'></div>";
var HTMLprojectTitle = "<a class='link-text' href='#'>%data%</a>";
var HTMLprojectDates = "<div class='date-text'>%data%</div>";
var HTMLprojectDescription = "<p><br>%data%</p>";
var HTMLprojectImageStart = "<div class='project-images row'></div>";
var HTMLprojectImage = "<div class='small-12 medium-4 large-4 columns'><img src='%data%'></div>";

var HTMLeducationHeader ="<h2>%data%</h2>";
var HTMLschoolStart = "<div class='education-entry content'></div>";
var HTMLschoolName = "<a class='link-text' href='#'>%data%";
var HTMLschoolQualification = " <span class='light-text'> - %data%</span></a>";
var HTMLschoolDates = "<div class='date-text'>%data%</div>";
var HTMLschoolLocation = "<div class='location-text'>%data%</div>";
var HTMLschoolMajor = "<em><br>Major: %data%</em>"

var HTMLonlineClasses = "<h3>Online Classes</h3>";
var HTMLonlineTitle = "<a href='#'>%data%";
var HTMLonlineSchool = " - %data%</a>";
var HTMLonlineDates = "<div class='date-text'>%data%</div>";
var HTMLonlineURL = "<br><a href='#'>%data%</a>";

var HTMLskillsHeader = "<h2>Skills</h2>";
var HTMLskillsStart = "<h3>Skills at a Glance:</h3><ul id='skills' class='flex-box'></ul>";
var HTMLskill = "<div id='%id%' class='small-3 medium-3 large-3 columns'></div>";

var HTMLskype = "<div class='small-3 medium-3 large-3 column'><a href='skype:michael.james.joyce?call'><span class='fa fa-skype'></span><span class='info'>%data%</span></a></div>";
var HTMLemail = "<div class='small-3 medium-3 large-3 column'><a href='mailto:hello@mikejoyce.me'><span class='fa fa-envelope'></span><span class='info'>%data%</span></a></div>";
var HTMLtwitter = "<div class='small-3 medium-3 large-3 column'><a href='https://github.com/mikejoycegit/' target='_blank'><span class='fa fa-github-alt'></span><span class='info'>%data%</span></a></div>";
var HTMLgithub = "<div class='small-3 medium-3 large-3 column'><a href='https://twitter.com/iammikejoyce' target='_blank'><span class='fa fa-twitter'></span><span class='info'>%data%</span></a></div>";

var HTMLmapHeader ="<h2>%data%</h2>";
var googleMap = "<div id='map' class='content'></div>";

// Internationalize Name

$(document).ready(function() {
  $('button').click(function() {
    var iName = inName(bio.name) || function(){};
    $('#name').html(iName);  
  });
});

// Log Click Location

clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      "x": x,
      "y": y
    }
  );
  console.log("x location: " + x + "; y location: " + y);
}

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});

// Google Map

var map;   

function initializeMap() {

  var locations;        

  var mapOptions = {
    disableDefaultUI: true,
    styles:[{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]},{"featureType":"landscape","stylers":[{"color":"#f2e5d4"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"administrative","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"road"},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{},{"featureType":"road","stylers":[{"lightness":20}]}]
  };

  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  function locationFinder() {
    
    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.location);
    
    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }


  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.k;  // latitude from the place service
    var lon = placeData.geometry.location.B;  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });
    
    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0])
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);
    
    // Iterates through the array of locations, creates a search object for each location
    for (place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      }

      // Actually searches the Google Maps API for location data and runs the callback 
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);
  
};

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window 
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
 map.fitBounds(mapBounds);
});
