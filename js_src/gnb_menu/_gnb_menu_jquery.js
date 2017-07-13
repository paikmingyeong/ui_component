/**
 * Gnb Menu jQuery
 */

$(function(){


  $('.menu-depth1-link').on('mouseenter', function(){
    // depth1 border 늘어나는 모션 효과
    $(this).children('.menu-depth1-border').stop().animate({
      width:64
    }, 300);

    // depth2 메뉴 늘어나는 모션 효과
    var depth1Index = $(this).index('.menu-depth1-link');
    var motionHeight = 54;

    if( depth1Index == 1 ){
      motionHeight = 80;
    }

    $(this).next('.menu-depth2-wrap').css({'z-index':0}).stop().animate({
      height:motionHeight,
      opacity:1
    }, 300, function(){
      // $(this) => .menu-depth2-wrap
      $(this).parent().siblings().children('.menu-depth2-wrap').css({'z-index':0}).stop().animate({
        height:0,
        opacity:0
      }, 300);
    });

  });

  $('.menu-depth1-link').on('mouseleave', function(){
    // depth1 border 줄어드는 모션효과
    $(this).children('.menu-depth1-border').stop().animate({
      width:0
    }, 300);
  });

  $('.menu-depth1').on('mouseleave', function(){
    console.log(1);
    // depth1 border 줄어드는 모션효과
    $(this).children('.menu-depth1-border').stop().animate({
      width:0
    }, 200);

    // depth2 메뉴 줄어드는 모션 효과
    $('.menu-depth2-wrap').stop().animate({
      height:0,
      opacity:0
    }, 300);
  });




});