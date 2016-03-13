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

    //first transition for section
    var c = document.getElementById("myCanvas1");
    c.style.height ='250px';
    //c.style.bottom = "0px";
   // c.style.backgroundColor = '#fff';
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle="transparent";
    ctx.strokeStyle="#fff";
    ctx.lineWidth=90;
    //ctx.translate(-15,0);
    ctx.arc(25,-5,135,0*Math.PI,2*Math.PI);
    ctx.fill();
    ctx.stroke();

    //dvojka
    var c2 = document.getElementById("myCanvas2");
    c2.style.height ='250px';
    var ctx2 = c2.getContext("2d");
    ctx2.beginPath();
    ctx2.fillStyle="#F2F2F2";
    ctx2.strokeStyle="transparent";
    ctx2.arc(100,250,150,1*Math.PI,0*Math.PI)
    ctx2.fill();
    ctx2.stroke();

    //trojka
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

    //4
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
        $('#mapOstrava').addClass('hide');
        $('.brno').removeClass('hide');
        $('#mapBrno').removeClass('hide');
        $('#contact #ovaBtn').removeClass('btnON');
        $(this).addClass('btnON');
    });

    $('#ovaBtn').on('click', function (){
        $('.ostrava').removeClass('hide');
        $('#mapOstrava').removeClass('hide');
        $('.brno').addClass('hide');
        $('#mapBrno').addClass('hide');
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