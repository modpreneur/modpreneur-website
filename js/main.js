
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


    $('#brnBtn').on('click', function (){
        $('.ostrava').addClass('hide');
        $('#mapOstrava').addClass('hideM');
        $('.brno').removeClass('hide');
        $('#mapBrno').removeClass('hideM');
        $('#ovaBtn').removeClass('btnON');
        $(this).addClass('btnON');
    });

    $('#ovaBtn').on('click', function (){
        $('.ostrava').removeClass('hide');
        $('#mapOstrava').removeClass('hideM');
        $('.brno').addClass('hide');
        $('#mapBrno').addClass('hideM');
        $('#brnBtn').removeClass('btnON');
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