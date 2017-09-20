var venueMap;
function init () { //loads the map into the HTML page

    var pinLocation = new 
        google.maps.latlng(40.782710, -73.965310);
    
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
            style: google.maps.mapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.TOP_LEFT
        }, 
        scaleControl: true,
        scaleControlOptions: {
            position: google.maps.controlPosition.TOP_CENTER
    }, 
        streetViewControl: false,
        overviewMapControl: false,
        //MAP STYLES WHAT THE MAP ELEMENTS SHOULD LOOK LIKE 
        styles: [
            {
            stylers: [
                { hue: "#00ff6f" },
                { saturation: -50 } 
            ]
        }, {
            featureType: "road",
            elementType: "geometry",
            stylers: [
                { lightness: 100 }, 
                { visibility: "simplified" }
            ]
        }, {
            featuredType: "transit",
            elementType: "labels", 
            stylers: [
                { hue: "#ff0066" },
                { satuation: +80 }
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
    }
};

    var venueMap = new google.maps.Map(document.getElementByID('map'), mapOptions); //retrieve the map from the html page

