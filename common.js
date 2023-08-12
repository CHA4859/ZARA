jQuery(document).ready(function(){
    $(".menu-li").mouseover(function(){
        $(this).find(".sub-menu-ul").stop().fadeIn(500);
        $(".menu-bg").stop().fadeIn(400);
    }).mouseout(function(){
        $(this).find(".sub-menu-ul").stop().fadeOut(500);
        $(".menu-bg").stop().fadeOut(500);
    });
});


$(".slide-li").hide();
$(".slide-li:first-child").show();

setInterval(function(){
    $(".slide-li:first-child").fadeIn()
    .next().fadeOut().end(300)
    .appendTo(".slide-ul");
},4000);

$(".slide").mouseover(function(){
    $(".slide-arrow2").stop().fadeIn(200);
    $(".slide-arrow1").stop().fadeIn(200);
}).mouseout(function(){
    $(".slide-arrow2").stop().fadeOut(200);
    $(".slide-arrow1").stop().fadeOut(200);
})


const $wrap = $(".wrap");
const $button = $("#button-id");
const $popUp = $("#popUp");
const $closeBtn = $("#close-btn");

$button.click(function(){
    $wrap.addClass("active");
    $popUp.addClass("active");
})
$closeBtn.click(function(){
    $wrap.removeClass("active");
    $popUp.removeClass("active");
    $("body").removeClass("active");
})

$button.click(function(){
    $("body").addClass("active");
})

$button.click(function(){
    $popUp.css({
        "top": (($(window).height()-$("#popupDiv").outerHeight())/2+$(window).scrollTop())+"px",
       "left": (($(window).width()-$("#popupDiv").outerWidth())/2+$(window).scrollLeft())+"px"
    });
})


