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
	var a = $(".icon a");
	a.removeClass("icon-cross");
	a.removeClass("open");
//Else leave it there	
    } else {
    console.log("bigger");
	}
});


/* WORK IN PROGRESS - trying to get cross icon to set to 40px and show correctly 
function myFunction() {
    var x = document.getElementsByClassName("hamburger");
    if (x.className === "is-active") {
        $(".hamburger-inner").addClass("LOLOLOLOL");
    } else {
        x.className = "topnav";
    }
}	
*/
