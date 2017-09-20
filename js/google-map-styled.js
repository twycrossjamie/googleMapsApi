var venueMap;
function init() { //LOADS THE MAP INTO THE HTML

    var pinLocation = new google.maps.LatLng(40.782710, -73.965310);
    
    var mapOptions = { //SET UP THE MAP OPTIONS 
        zoom: 15, //ZOOM INTENSITY
        center: pinLocation, //PLACE OF PIN
        mapTypeId: google.maps.MapTypeId.ROADMAP, //MAP TYPE
        panControl: false, //hide control
        zoomControl: true,  //show control
        zoomControlOption: {
            style: google.maps.ZoomControlStyle.SMALL, //STYLE OF ZOOM CONTROL
            position: google.maps.ControlPosition.TOP_RIGHT //ZOOM CONTROL POSITION 
        }, 
        mapTypeControl: true, 
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.TOP_LEFT
        }, 
        scaleControl: true,
        scaleControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER
    }, 
        streetViewControl: false,
        overviewMapControl: false,
        //MAP STYLES WHAT THE MAP ELEMENTS SHOULD LOOK LIKE 
        styles: [
            {
            stylers: [ //STYLERS PROPERTY HOLDS ARRAYS OF OBJECTS 
                { hue: "#00ff6f" }, //OVERALL MAP COLOURS
                { saturation: -50 }  //OVERALL MAP SATURATION
            ]
        }, {    
            featureType: "road",    //ROAD FEATURES
            elementType: "geometry", //THEIR GEOMETRY 'LINES'
            stylers: [
                { lightness: 100 },  //LIGHTNESS OF THE ROADS
                { visibility: "simplified" } //LEVEL OF ROAD DETAIL
            ]
        }, {
            featuredType: "transit", //PUBLIC TANSPORT FEATURES
            elementType: "labels",  //THEIR GEOMETRY 'LINES'
            stylers: [
                { hue: "#ff0066" }, // COLOUR OF PUBLIC TRANSPORT
                { satuation: +80 } //SATURATION OF PUBLIC TRANSPORT 
            ]
        }, {
            featureType: "poi",  
            elementType: "labels", 
            stylers: [
                { visibility: "off" }
            ]
        }, {
            featureType: "poi.park",
            elementType: "labels",
            stylers: [
                { visibility: "on" } 
            ]
        }, {
            featureType: "water",
            elementType: "geometry",
            stylers: [
                { hue: "#c4f4f4" } 
            ]
        }, {
            featureType: "road",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
        }
        ]
    };


    var venueMap = new google.maps.Map(document.getElementById('map'), mapOptions); //retrieve the map from the html page

var startPosition = new google.maps.Marker({ //CREATE A NEW MARKER 
    position: pinLocation, // SET ITS LOCATION 
    map: venueMap, //SPECIFY THE MAP 
    icon: "img/go.png" //PATH TO IMAGE FROM HTML
});
}

function loadScript() {
    var script = document.createElement('script') ; //CREATE SCRIPT ELEMENT
    script.src = 'http://maps.googleapis.com/maps/api/js?key=AIzaSyAsZN2qMHxIYAKLQ94rMj0q6_0r7rqAyzM&callback=init'; // ADD SCRIPT ELEMENT SRC include api key HERE 
    document.body.appendChild(script); //ADD SCRIPT ELEMENT TO BODY 
}

window.onload = loadScript;