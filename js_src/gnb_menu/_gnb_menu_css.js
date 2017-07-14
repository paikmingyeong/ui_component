/**
 * Gnb Menu CSS
 */

$(function(){

  $('.css-menu-depth1-link').on('mouseenter', function(){

    //promise() : 앞선 동작이 모두 끝난 후 특정 기능을 실행 시킬 때 사용
    $(this).next().addClass('on').promise().done(function(){

      var $depth2Wrap = $(this).parent().siblings().children('.css-menu-depth2-wrap');

      //setTimeout() : ~초 이후에 한번만 실행
      setTimeout(function(){
        $depth2Wrap.removeClass('on');
      }, 300);

    });

  });


  $('.css-menu-depth1').on('mouseleave', function(){

    $('.css-menu-depth2-wrap').removeClass('on');

  });


});