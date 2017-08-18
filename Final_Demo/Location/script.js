var start = { // ADDED THIS
    lat: 24.9288,
    lng: 67.0402
};
var end = { // ADDED THIS
    lat: 24.9292,
    lng: 67.0400
};

function path_find() {

    var pathBetween = new google.maps.Polyline({
        path: [start,end],
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });

    pathBetween.setMap(map);

}


function myMap() {
    var x = document.getElementById("inp").value;

    if (x.trim().length) {
		
       
        var mapCanvas = document.getElementById("map");
       var myCenter = new google.maps.LatLng(24.931959, 67.038774);
        var mapOptions = {center: myCenter, zoom: 18};
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({
            position: myCenter,
			title: 'HSM \n Phone number: 090078601',
		    

            animation: google.maps.Animation.BOUNCE,

  

        });
        marker.setMap(map);
		
        var line = new google.maps.Polyline({
            path: [
                new google.maps.LatLng(start),
                new google.maps.LatLng(end)
            ],
            strokeColor: "#FF0000",
            strokeOpacity: 1.0,
            strokeWeight: 5,
            map: map
        });
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

    }
    else {alert("Please write the name of product you want to search")}
}


//var end = { // Chase Up
  //  lat: 24.931101,
  //  lng: 67.0379466
//};