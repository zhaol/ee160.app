function initialize_map() {
  if ($(coordinates).length > 0) {
    var lat = $(coordinates).first()[0].lat;
    var long = $(coordinates).first()[0].long;
  }
  var myLatlng = new google.maps.LatLng(lat, long);
  var mapOptions = {
    zoom: 17,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  
  $(coordinates).each(function() {
    var aLatLng = new google.maps.LatLng(this.lat, this.long);
    var marker = new google.maps.Marker({
      position: aLatLng,
      map: map,
      title: this.title
    });
  });
}
  
$(function() {
  google.maps.event.addDomListener(window, 'load', initialize_map);
});