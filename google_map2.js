<!DOCTYPE html>
<html>
<body>


<h1>Oregon Hospitals</h1>

<div id="googleMap" style="width:100%;height:400px;"></div>

<script>

var map;
var service;
var infowindow;

function initMap() {
  var Oregon = new google.maps.LatLng(44.037632, -120.513740);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(
      document.getElementById('map'), {center: Oregon, zoom: 15});

  var request = {
    query: 'Museum of Contemporary Art Australia',
    fields: ['name', 'geometry'],
  };

  var service = new google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
      map.setCenter(results[0].geometry.location);
    }
  });
}
