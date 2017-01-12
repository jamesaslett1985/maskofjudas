//TOP NAV JQuery
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}	
	
//Toggle between hamburger/cross icons on click

var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
  });


//Force mobile menu to shut if left open on screen resize
$(window).resize(function(){
	if($(window).width() > 760) {
//Remove Responsive class
	$("#myTopnav").removeClass(" responsive");
//Force X icon back to hamburger
	var a = $(".hamburger");
	a.removeClass(" is-active");
    } 
});

//Force mobile menu to shut if any option selected
$('#myTopnav li a, .mojNavtext').on('click', function(){
    $('#myTopnav').removeClass('responsive');
//Force X icon back to hamburger
    $('.hamburger').removeClass(" is-active");
});





$(document).ready(function() {
var movementStrength = 25;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
$(".moj-logo").mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1 - 25;
          var newvalueY = height * pageY * -1 - 50;
          $('.moj-logo').css("background-position", newvalueX+"px     "+newvalueY+"px");
});
});

