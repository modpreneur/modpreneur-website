
var cordiBrno = {lat: 49.163525, lng: 16.593858};
var cordiOstrava= {lat: 49.816232,lng: 18.260720};
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options, styles made as PSD design
    // Great app for styles http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html
    var mapOptionsOstrava = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: cordiOstrava, // 49.163525, 16.593858


        disableDefaultUI: true,
        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.

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
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: cordiBrno,


        disableDefaultUI: true,
        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.

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








