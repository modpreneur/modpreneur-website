
$(document).ready(function() {
    $("#dropdown li a").addEventListener("click", function(){
        document.getElementById("show-menu").checked=0;
    });
});

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

