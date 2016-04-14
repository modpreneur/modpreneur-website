window.onload = function () {
    // only apply to IE
    if (!/*@cc_on!@*/0) return;

    // find every element to test
    var all = document.getElementsByTagName('*'), i = all.length;

    // fast reverse loop
    while (i--) {
        // if the scrollWidth (the real width) is greater than
        // the visible width, then apply style changes
        if (all[i].scrollWidth > all[i].offsetWidth) {
            all[i].style['paddingBottom'] = '20px';
            all[i].style['overflowY'] = 'hidden';
        }
    }
};

$(document).ready(function () {

    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });

        //hide menu on small dev
        $('#nav input').prop( "checked", false );
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
    c2.style.height ='250px';
    var ctx2 = c2.getContext("2d");
    ctx2.beginPath();
    ctx2.fillStyle="#F2F2F2";
    ctx2.strokeStyle="transparent";
    ctx2.arc(100,250,150,1*Math.PI,0*Math.PI);
    ctx2.fill();
    ctx2.stroke();

    //Third between career and concat
    var c3 = document.getElementById("myCanvas3");
    c3.style.height ='200px';
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
    c4.style.height ='100px';
    c4.style.zIndex = '6';
    var ctx4 = c4.getContext("2d");
    ctx4.beginPath();
    ctx4.fillStyle="#fff";
    ctx4.strokeStyle="transparent";
    ctx4.arc(50,0,80,0,2*Math.PI);
    ctx4.fill();
    ctx4.stroke();

    $('#brnBtn').on('click', function (){
        $('.ostrava').addClass('hide');
        $('#mapOstrava').addClass('hideM');
        $('.brno').removeClass('hide');
        $('#mapBrno').removeClass('hideM');
        $('#contact #ovaBtn').removeClass('btnON');
        $(this).addClass('btnON');
    });

    $('#ovaBtn').on('click', function (){
        $('.ostrava').removeClass('hide');
        $('#mapOstrava').removeClass('hideM');
        $('.brno').addClass('hide');
        $('#mapBrno').addClass('hideM');
        $('#contact #brnBtn').removeClass('btnON');
        $(this).addClass('btnON');
    });


});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#nav ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }

    });

    if(scrollPos > $('.head-content').position().top){
        $('.head-content').addClass('scrollMenu');
        $('.bg-scrollMenu').addClass('bg-scrollMenuON');
    }
    else {
        $('.head-content').removeClass('scrollMenu');
        $('.bg-scrollMenu').removeClass('bg-scrollMenuON');
    }

    if(scrollPos > $('#intro').height()){
        $('.bg-scrollMenu').addClass('bg-scrollMenuONblack');
    }
    else {
        $('.bg-scrollMenu').removeClass('bg-scrollMenuONblack');
    }

}

var cordiBrno = {lat: 49.163525, lng: 16.593858};
var cordiOstrava= {lat: 49.816232,lng: 18.260720};
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

var mapBrno;
var mapOstrava;

function init() {

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
    var markerOstrava = new google.maps.Marker({
        position: cordiOstrava,
        map: mapOstrava,
        icon: 'img/meMAPicon.png',
        title: 'Modern Enterpreneur'
    });

    mapBrno = new google.maps.Map(mapElementBrno, mapOptionsBrno);
    var markerBrno = new google.maps.Marker({
        position: cordiBrno,
        map: mapBrno,
        icon: 'img/meMAPicon.png',
        title: 'Modern Enterpreneur'
    });


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
}

google.maps.event.addDomListener(window, "resize", function() {

    var centerBrno = mapBrno.getCenter();
    google.maps.event.trigger(mapBrno, "resize");
    mapBrno.setCenter(centerBrno);

    var centerOva = mapOstrava.getCenter();
    google.maps.event.trigger(mapOstrava, "resize");
    mapOstrava.setCenter(centerOva);
    
});


