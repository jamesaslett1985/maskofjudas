//TOP NAV JQuery
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//Toggle between hamburger/cross icons on click

var $hamburger = $(".hamburger");
$hamburger.on("click", function (e) {
    $hamburger.toggleClass("is-active");
});


//Force mobile menu to shut if left open on screen resize
$(window).resize(function () {
    if ($(window).width() > 760) {
        //Remove Responsive class
        $("#topnav").removeClass(" responsive");
        //Force X icon back to hamburger
        var a = $(".hamburger");
        a.removeClass(" is-active");
    }
});

//Force mobile menu to shut if any option selected
$('#topnav li a, .nav-text').on('click', function () {
    $('#topnav').removeClass('responsive');
    //Force X icon back to hamburger
    $('.hamburger').removeClass(" is-active");
});

// Hide nav if user clicks outside of it
$(document).on('click', function (event) {
    if (!$(event.target).closest('.hamburger-box').length) {
        // Hide mobile menu
        $('#topnav').removeClass('responsive');
        // Force X icon back to hamburger
        $('.hamburger').removeClass(" is-active");
    }
})

/*Highlight current slide in nav*/
function afterLoadCallback(anchorLink) {
    $("a", "#topnav").removeClass("activenav");
    $("a[href=#"+anchorLink+"]", "#topnav").addClass("activenav");
};

/*Add active Lava to .lavanav on hover
$('.main-nav').hover( function () {
    $('.lava-nav').addClass("activeLava");
}, function () {
    $('.lava-nav').removeClass("activeLava");
}
);
*/

