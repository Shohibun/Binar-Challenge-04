/* eslint-disable no-undef */
// Box Form
//run when the DOM is ready
$(".clickable").click(function() {  //use a class, since your ID gets mangled
    $(".custom-body").addClass("custom-bg-active"); //add the class to the clicked element
});     
//run when the DOM is ready
$(".unclickable").click(function() {  //use a class, since your ID gets mangled
    $(".custom-body").removeClass("custom-bg-active"); //add the class to the clicked element
});

// Background tranparan
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 100){
        $('.fixed-top').css('background', 'transparent');
    } else{
        $('.fixed-top').css('background', '#F1F3FF');
    }
});
