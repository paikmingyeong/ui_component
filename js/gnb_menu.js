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

    $(this).next('.menu-depth2-wrap').css({'z-index' : 10}).stop().animate({
      height:motionHeight,
      opacity : 1
    }, 300, function(){
      // $(this) => .menu-depth2-wrap
      $(this).parent().siblings().children('.menu-depth2-wrap').css({'z-index' : 0}).stop().animate({
        height : 0,
        opacity : 0
      }, 200);
    });

  });

  $('.menu-depth1-link').on('mouseleave', function(){
    // depth1 border 줄어드는 모션효과
    $(this).children('.menu-depth1-border').stop().animate({
      width : 0
    }, 300);
  });

  $('.menu-depth1').on('mouseleave', function(){
    // depth2 메뉴 줄어드는 모션 효과
    $('.menu-depth2-wrap').stop().animate({
      height : 0,
      opacity : 0
    }, 300);
  });




});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9nbmJfbWVudV9jc3MuanMiLCJfZ25iX21lbnVfanF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImduYl9tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEduYiBNZW51IENTU1xyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCgnLmNzcy1tZW51LWRlcHRoMS1saW5rJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIC8vcHJvbWlzZSgpIDog7JWe7ISgIOuPmeyekeydtCDrqqjrkZAg64Gd64KcIO2bhCDtirnsoJUg6riw64ql7J2EIOyLpO2WiSDsi5ztgqwg65WMIOyCrOyaqVxyXG4gICAgJCh0aGlzKS5uZXh0KCkuYWRkQ2xhc3MoJ29uJykucHJvbWlzZSgpLmRvbmUoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgIHZhciAkZGVwdGgyV3JhcCA9ICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLmNzcy1tZW51LWRlcHRoMi13cmFwJyk7XHJcblxyXG4gICAgICAvL3NldFRpbWVvdXQoKSA6IH7stIgg7J207ZuE7JeQIO2VnOuyiOunjCDsi6TtlolcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICRkZXB0aDJXcmFwLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICB9LCAzMDApO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICB9KTtcclxuXHJcblxyXG4gICQoJy5jc3MtbWVudS1kZXB0aDEnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCgnLmNzcy1tZW51LWRlcHRoMi13cmFwJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBHbmIgTWVudSBqUXVlcnlcclxuICovXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcblxyXG4gICQoJy5tZW51LWRlcHRoMS1saW5rJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG4gICAgLy8gZGVwdGgxIGJvcmRlciDripjslrTrgpjripQg66qo7IWYIO2aqOqzvFxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLm1lbnUtZGVwdGgxLWJvcmRlcicpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgd2lkdGg6NjRcclxuICAgIH0sIDMwMCk7XHJcblxyXG4gICAgLy8gZGVwdGgyIOuplOuJtCDripjslrTrgpjripQg66qo7IWYIO2aqOqzvFxyXG4gICAgdmFyIGRlcHRoMUluZGV4ID0gJCh0aGlzKS5pbmRleCgnLm1lbnUtZGVwdGgxLWxpbmsnKTtcclxuICAgIHZhciBtb3Rpb25IZWlnaHQgPSA1NDtcclxuXHJcbiAgICBpZiggZGVwdGgxSW5kZXggPT0gMSApe1xyXG4gICAgICBtb3Rpb25IZWlnaHQgPSA4MDtcclxuICAgIH1cclxuXHJcbiAgICAkKHRoaXMpLm5leHQoJy5tZW51LWRlcHRoMi13cmFwJykuY3NzKHsnei1pbmRleCcgOiAxMH0pLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgaGVpZ2h0Om1vdGlvbkhlaWdodCxcclxuICAgICAgb3BhY2l0eSA6IDFcclxuICAgIH0sIDMwMCwgZnVuY3Rpb24oKXtcclxuICAgICAgLy8gJCh0aGlzKSA9PiAubWVudS1kZXB0aDItd3JhcFxyXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy5tZW51LWRlcHRoMi13cmFwJykuY3NzKHsnei1pbmRleCcgOiAwfSkuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgIGhlaWdodCA6IDAsXHJcbiAgICAgICAgb3BhY2l0eSA6IDBcclxuICAgICAgfSwgMjAwKTtcclxuICAgIH0pO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLm1lbnUtZGVwdGgxLWxpbmsnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAvLyBkZXB0aDEgYm9yZGVyIOykhOyWtOuTnOuKlCDrqqjshZjtmqjqs7xcclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5tZW51LWRlcHRoMS1ib3JkZXInKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIHdpZHRoIDogMFxyXG4gICAgfSwgMzAwKTtcclxuICB9KTtcclxuXHJcbiAgJCgnLm1lbnUtZGVwdGgxJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG4gICAgLy8gZGVwdGgyIOuplOuJtCDspITslrTrk5zripQg66qo7IWYIO2aqOqzvFxyXG4gICAgJCgnLm1lbnUtZGVwdGgyLXdyYXAnKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIGhlaWdodCA6IDAsXHJcbiAgICAgIG9wYWNpdHkgOiAwXHJcbiAgICB9LCAzMDApO1xyXG4gIH0pO1xyXG5cclxuXHJcblxyXG5cclxufSk7Il19
