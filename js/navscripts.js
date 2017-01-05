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
	
//Hide icon when mobile menu open
$(".icon").click(function(){
	if (!$(".icon a").hasClass("open")) {
		var a = $(this).find("a");
		a.addClass("icon-cross");
		a.addClass("open");
		
	}
	else {
		var a = $(this).find("a");
		a.removeClass("icon-cross");
		a.removeClass("open");
	}
});



//Force mobile menu to shut if left open on screen resize
$(window).resize(function(){
	if($(window).width() > 382) {
//Remove Responsive class
	$("#myTopnav").removeClass(" responsive");
//Force X icon back to hamburger
	var a = $(".icon a");
	a.removeClass("icon-cross");
	a.removeClass("open");
//Else leave it there	
    } else {
    console.log("bigger");
	}
});



