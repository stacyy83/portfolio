function initScrollMagic(){
    _controller = new ScrollMagic.Controller();
    
    //背景視差滾動
    // bgScroll = new ScrollMagic.Scene({
    //     triggerElement:".scroll__trigger",
    //     triggerHook: 0,
    //     duration: '100%',
    // })
    // .setTween(".scroll__bgn",{y:"30%", ease: Linear.easeNone})
    // // .addIndicators({name: "bgScroll-tween"})
    // .addTo(_controller);

    //page nav 在scroll時會pinned
    pageNav = new ScrollMagic.Scene({
        triggerElement:"#pageNav",
        triggerHook:0,
        duration:getProductHeight()
    })
    // .offset(-50)
    .setClassToggle("#pageNav", "pin")
    .setPin("#pageNav")
    .addIndicators({name: "pageNav-pin"})
    .addTo(_controller);

    pageNav.on("update", function (event) {
        change();
    });

}
function getProductHeight()
{
    var productH;
    // if($(window).width()>991){
        productH=$('.wrapper').outerHeight()-$('#pageNav').outerHeight();
    // }
    // else{
    //     productH=$('._intro__tab').eq(1).outerHeight();
    // }
    return productH;
}
function getProdutnYpos(){
    return 0;
}
function change()
{
    // if($(window).width()>991){
        if(pageNav.duration)
        pageNav.duration(getProductHeight());
        // $('.scrollmagic-pin-spacer').css({'padding-bottom':'0px'});
    // }
    // else{
    //     if(teamTab.duration)
    //     teamTab.duration(getProductHeight());
    //     $('.scrollmagic-pin-spacer').css({'padding-bottom':'0px'});
    // }
}