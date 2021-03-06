
$(document).ready(function () {

    $(document).on("scroll", onScroll);

        $(function() {
            $('a[href*="#"]:not([href="#"])').click(function() {
                //hide menu on small dev
                $('#nav input').prop( "checked", false );

                //part of snippet used from css-tricks for smooth scroll
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }

            });
        });

    //First canvas between header and products
    //Height is set by css for media queries
    var c = document.getElementById("myCanvas1");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle="transparent";
    ctx.strokeStyle="#fff";
    ctx.lineWidth=90;
    ctx.arc(25,-5,135,0*Math.PI,2*Math.PI);
    ctx.fill();
    ctx.stroke();

    //Second - products and career
    var c2 = document.getElementById("myCanvas2");
    var ctx2 = c2.getContext("2d");
    ctx2.beginPath();
    ctx2.fillStyle="#F2F2F2";
    ctx2.strokeStyle="transparent";
    ctx2.arc(100,200,120,1*Math.PI,0*Math.PI);
    ctx2.fill();
    ctx2.stroke();

    //Third between career and concat
    var c3 = document.getElementById("myCanvas3");
    var ctx3 = c3.getContext("2d");
    ctx3.beginPath();
    ctx3.translate(10,0);
    ctx3.fillStyle="#fff";
    ctx3.strokeStyle="transparent";
    ctx3.arc(15,170,100,0,2*Math.PI);
    ctx3.fill();
    ctx3.stroke();

    //Last for top of maps
    var c4 = document.getElementById("myCanvas4");
    c4.style.zIndex = '6';
    var ctx4 = c4.getContext("2d");
    ctx4.beginPath();
    ctx4.fillStyle="#fff";
    ctx4.strokeStyle="transparent";
    ctx4.arc(50,10,80,0,2*Math.PI);
    ctx4.fill();
    ctx4.stroke();


    $('#ovaBtn').on('click', function (){
        $('.ostrava').removeClass('fadeOutRight ');
        $('.ostrava').addClass('fadeInRight');

        $('.brno').addClass('fadeOutLeft ');
        $('.brno').removeClass('fadeInLeft');


        $('#mapOstrava').removeClass('hideM');
        $('#mapBrno').addClass('hideM');
        $('#brnBtn').removeClass('btnON');
        $(this).addClass('btnON');
    });

    $('#brnBtn').on('click', function (){

        $('.brno').removeClass('fadeOutLeft ');
        $('.brno').addClass('fadeInLeft');

        $('.ostrava').removeClass('fadeInRight');
        $('.ostrava').addClass('fadeOutRight ');

        $('#mapOstrava').addClass('hideM');
        $('#mapBrno').removeClass('hideM');
        $('#ovaBtn').removeClass('btnON');
        $(this).addClass('btnON');
    });



});

function onScroll(event){
    // add active class on scroll
    var scrollPos = $(document).scrollTop();
    $('#nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top - 110 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#nav ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });

    //background for fixed navigation
    if (scrollPos > $('.head-content').position().top + 5){
        $('.head-content').addClass('scrollMenu');
        $('.bg-scrollMenu').addClass('bg-scrollMenuON');
    }
    else {
        $('.head-content').removeClass('scrollMenu');
        $('.bg-scrollMenu').removeClass('bg-scrollMenuON');
    }
}

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
        draggable: false,
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
            title: 'Modern Enterpreneur'
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




