
var cordiBrno = {lat: 49.163525, lng: 16.593858};
var cordiOstrava= {lat: 49.816232,lng: 18.260720};
// When the window has finished loading create our google map below
/*google.maps.event.addDomListener(window, 'load', initMap);*/

var mapBrno;
var mapOstrava;

function initMap() {

    // Great app for styles http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html
    var mapOptionsOstrava = {
        zoom: 15,
        scrollwheel: false,
        draggable: false,
        disableDefaultUI: true,
        zoomControl: true,
        gps: cordiOstrava,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        },
        center: cordiOstrava,
        //location: cordiOstrava,
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
        draggable: false,
        disableDefaultUI: true,
        zoomControl: true,
        gps: cordiOstrava,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        },
        center: cordiBrno,
        //location: cordiOstrava,
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
    mapOstrava = new google.maps.Map(mapElementOva, mapOptionsOstrava);
    //small marker on mobile
    if ( window.innerWidth >= 768 )
    {
        var markerOstrava = new google.maps.Marker({
            position: cordiOstrava,
            map: mapOstrava,
            icon: 'img/meMAPicon.png',
            title: 'Modern Enterpreneur'
        });
    }
    else {
        var markerOstrava = new google.maps.Marker({
            position: cordiOstrava,
            map: mapOstrava,
            icon: 'img/meMAPiconS.png',
            title: 'Modern Enterpreneur'
        });
    }

    mapBrno = new google.maps.Map(mapElementBrno, mapOptionsBrno);
    //small marker on mobile
    if ( window.innerWidth >= 768 )
    {
        var markerBrno = new google.maps.Marker({
            position: cordiBrno,
            map: mapBrno,
            icon: 'img/meMAPicon.png',
            title: 'Modern Enterpreneur',
            url: 'https://www.google.com/maps/place/Bohunick%C3%A1+595%2F85,+619+00+Brno-jih-Horn%C3%AD+Her%C5%A1pice,+%C4%8Cesk%C3%A1+republika/@49.1635193,16.5918762,17z/data=!3m1!4b1!4m2!3m1!1s0x4712959e58d2ef2d:0xe9632ef2e15a9d36?hl=cs-CZ'
        });
    }
    else {
        var markerBrno = new google.maps.Marker({
            position: cordiBrno,
            map: mapBrno,
            icon: 'img/meMAPiconS.png',
            title: 'Modern Enterpreneur'
        });
    };

    //unnecesseary just try solve marker on reference maps
    markerBrno.setMap(mapBrno);
    markerOstrava.setMap(mapOstrava);


    /* Listeners for scrolling, on only after click*/
    mapBrno.addListener('click', function() {
        mapBrno.set('scrollwheel', true);
    });
    mapBrno.addListener( 'mouseout', function(event){
        mapBrno.set('scrollwheel', false);
    });

    mapOstrava.addListener('click', function() {
        mapOstrava.set('scrollwheel', true);
    });
    mapOstrava.addListener( 'mouseout', function(event){
        mapOstrava.set('scrollwheel', false);
    });

    /* Drag for mobile */
    mapBrno.addListener('click', function() {
        mapBrno.set('draggable', true);
    });
    mapOstrava.addListener('click', function() {
        mapOstrava.set('draggable', true);
    });


    /* Centering map marker */
    google.maps.event.addDomListener(window, "resize", function() {

        var centerBrno = mapBrno.getCenter();
        google.maps.event.trigger(mapBrno, "resize");
        mapBrno.setCenter(centerBrno);

        var centerOva = mapOstrava.getCenter();
        google.maps.event.trigger(mapOstrava, "resize");
        mapOstrava.setCenter(centerOva);

    });
}




