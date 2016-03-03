


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

    //first transition for section
    var c = document.getElementById("myCanvas1");
    c.style.width = '100%';
    c.style.height ='200px';
    c.style.position = 'absolute';
    c.style.bottom = 0;
   // c.style.backgroundColor = '#fff';
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle="transparent";
    ctx.strokeStyle="#fff";
    ctx.lineWidth="80";
    ctx.translate(20,0);
    ctx.arc(10,0,130,0,1.5*Math.PI);
    ctx.fill();
    ctx.stroke();

    //dvojka
    var c2 = document.getElementById("myCanvas2");
    c2.style.width = '100%';
    c2.style.height ='300px';
    c2.style.position = 'absolute';
    c2.style.bottom = 0;
    var ctx2 = c2.getContext("2d");
    ctx2.beginPath();
    ctx2.fillStyle="#F2F2F2";
    ctx2.strokeStyle="transparent";
    ctx2.arc(100,250,150,1*Math.PI,0*Math.PI)
    ctx2.fill();
    ctx2.stroke();

    //trojka
    var c3 = document.getElementById("myCanvas3");
    c3.style.width = '100%';
    c3.style.height ='300px';
    c3.style.position = 'absolute';
    c3.style.bottom = 0;
    var ctx3 = c3.getContext("2d");
    ctx3.beginPath();
    ctx3.fillStyle="#fff";
    ctx3.strokeStyle="transparent";
    ctx3.arc(15,170,100,0,2*Math.PI);
    ctx3.fill();
    ctx3.stroke();

    //trojka
    var c3 = document.getElementById("myCanvas4");
    c3.style.width = '100%';
    c3.style.height ='100px';
    c3.style.position = 'absolute';
    var ctx3 = c3.getContext("2d");
    ctx3.beginPath();
    ctx3.fillStyle="#fff";
    ctx3.strokeStyle="transparent";
    ctx3.arc(50,0,80,0,2*Math.PI);
    ctx3.fill();
    ctx3.stroke();

    //maps
    $('#map').setAttribute('height','200px');


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