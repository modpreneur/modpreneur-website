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


    //harmonica
    $('.harmonica label').on('click', function () {
        $('.harmonica label .me-down').addClass('me-up');
        $('.harmonica label .me-up').removeClass('me-down');
    }

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

        if(scrollPos > $('.head-content').position().top){
            $('.head-content').addClass('scrollMenu');
            $('.bg-scrollMenu').addClass('bg-scrollMenuON');
        }
        else {
            $('.head-content').removeClass('scrollMenu');
            $('.bg-scrollMenu').removeClass('bg-scrollMenuON');
        }
    });
}

/*$(document).ready(function() {
    $("#dropdown li a").addEventListener("click", function(){
        document.getElementById("show-menu").checked=0;
    });
});*/

/*
$("#dropdown li a").click(menuHandler('show-menu'));

function menuHandler(input){
    document.getElementById(input).checked=0;
}*/


/*
$(function() {
    $("#dropdown li a").click(menuHandler());
    $("#dropdown li a").addClass('lolbubds');
});

function menuHandler(){
    $("#show-menu").checked=0;
}
*/

/*
$(document).ready(function() {
    $("#dropdown li a").click(function(){
        $("#show-menu").checked=0;
    });
});*/

