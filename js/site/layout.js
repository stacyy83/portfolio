$(function(){
    navScroll();

    // scroll
    function navScroll(){
        $('.nav-work').click(function(){
            $('html,body').animate({scrollTop:$('#work').offset().top}, 500);
        });
        $('.nav-about').click(function(){
            $('html,body').animate({scrollTop:$('#about').offset().top}, 500);
        });
    }

});