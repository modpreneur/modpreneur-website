
var cordiBrno = {lat: 49.163525, lng: 16.593858};
var cordiOstrava= {lat: 49.816232,lng: 18.260720};
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {

    // Great app for styles http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html
    var mapOptionsOstrava = {
        zoom: 15,
        scrollwheel: false,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        },
        center: cordiOstrava,
        styles: [
            {
                "stylers": [
                    { "invert_lightness": true },
                    { "saturation": -100 },
                    { "lightness": 21 }
                ]
            },{
                "elementType": "labels.text.fill",
                "stylers": [
                    { "lightness": 70 }
                ]
            },{
                "featureType": "water",
                "stylers": [
                    { "lightness": 45 }
                ]
            },{
                "featureType": "transit.line",
                "stylers": [
                    { "lightness": 25 }
                ]
            },{
                "featureType": "road.highway",
                "stylers": [
                    { "lightness": 15 }
                ]
            }
        ]
    };
    var mapOptionsBrno = {
        zoom: 15,
        scrollwheel: false,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        },
        center: cordiBrno,
        styles: [
            {
                "stylers": [
                    { "invert_lightness": true },
                    { "saturation": -100 },
                    { "lightness": 21 }
                ]
            },{
                "elementType": "labels.text.fill",
                "stylers": [
                    { "lightness": 70 }
                ]
            },{
                "featureType": "water",
                "stylers": [
                    { "lightness": 45 }
                ]
            },{
                "featureType": "transit.line",
                "stylers": [
                    { "lightness": 25 }
                ]
            },{
                "featureType": "road.highway",
                "stylers": [
                    { "lightness": 15 }
                ]
            }
        ]
    };

    // Get the HTML DOM elements as containter for maps
    var mapElementOva = document.getElementById('mapOstrava');
    var mapElementBrno = document.getElementById('mapBrno');

    // Create the Google Map using our element and options defined above
    var mapOstrava = new google.maps.Map(mapElementOva, mapOptionsOstrava);
    var markerOstrava = new google.maps.Marker({
        position: cordiOstrava,
        map: mapOstrava,
        icon: 'img/wvMAPicon.png',
        title: 'Webvalley'
    });


    var mapBrno = new google.maps.Map(mapElementBrno, mapOptionsBrno);
    var markerBrno = new google.maps.Marker({
        position: cordiBrno,
        map: mapBrno,
        icon: 'img/meMAPicon.png',
        title: 'Modern Enterpreneur'
    });

}








