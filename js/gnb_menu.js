/**
 * Gnb Menu CSS
 */


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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9nbmJfbWVudV9jc3MuanMiLCJfZ25iX21lbnVfanF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImduYl9tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEduYiBNZW51IENTU1xyXG4gKi9cclxuXHJcbiIsIi8qKlxyXG4gKiBHbmIgTWVudSBqUXVlcnlcclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG5cclxuICAkKCcubWVudS1kZXB0aDEtbGluaycpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuICAgIC8vIGRlcHRoMSBib3JkZXIg64qY7Ja064KY64qUIOuqqOyFmCDtmqjqs7xcclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5tZW51LWRlcHRoMS1ib3JkZXInKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIHdpZHRoOjY0XHJcbiAgICB9LCAzMDApO1xyXG5cclxuICAgIC8vIGRlcHRoMiDrqZTribQg64qY7Ja064KY64qUIOuqqOyFmCDtmqjqs7xcclxuICAgIHZhciBkZXB0aDFJbmRleCA9ICQodGhpcykuaW5kZXgoJy5tZW51LWRlcHRoMS1saW5rJyk7XHJcbiAgICB2YXIgbW90aW9uSGVpZ2h0ID0gNTQ7XHJcblxyXG4gICAgaWYoIGRlcHRoMUluZGV4ID09IDEgKXtcclxuICAgICAgbW90aW9uSGVpZ2h0ID0gODA7XHJcbiAgICB9XHJcblxyXG4gICAgJCh0aGlzKS5uZXh0KCcubWVudS1kZXB0aDItd3JhcCcpLmNzcyh7J3otaW5kZXgnOjB9KS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIGhlaWdodDptb3Rpb25IZWlnaHQsXHJcbiAgICAgIG9wYWNpdHk6MVxyXG4gICAgfSwgMzAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAvLyAkKHRoaXMpID0+IC5tZW51LWRlcHRoMi13cmFwXHJcbiAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLm1lbnUtZGVwdGgyLXdyYXAnKS5jc3Moeyd6LWluZGV4JzowfSkuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgIGhlaWdodDowLFxyXG4gICAgICAgIG9wYWNpdHk6MFxyXG4gICAgICB9LCAzMDApO1xyXG4gICAgfSk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcubWVudS1kZXB0aDEtbGluaycpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuICAgIC8vIGRlcHRoMSBib3JkZXIg7KSE7Ja065Oc64qUIOuqqOyFmO2aqOqzvFxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLm1lbnUtZGVwdGgxLWJvcmRlcicpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgd2lkdGg6MFxyXG4gICAgfSwgMzAwKTtcclxuICB9KTtcclxuXHJcbiAgJCgnLm1lbnUtZGVwdGgxJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG4gICAgY29uc29sZS5sb2coMSk7XHJcbiAgICAvLyBkZXB0aDEgYm9yZGVyIOykhOyWtOuTnOuKlCDrqqjshZjtmqjqs7xcclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5tZW51LWRlcHRoMS1ib3JkZXInKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIHdpZHRoOjBcclxuICAgIH0sIDIwMCk7XHJcblxyXG4gICAgLy8gZGVwdGgyIOuplOuJtCDspITslrTrk5zripQg66qo7IWYIO2aqOqzvFxyXG4gICAgJCgnLm1lbnUtZGVwdGgyLXdyYXAnKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIGhlaWdodDowLFxyXG4gICAgICBvcGFjaXR5OjBcclxuICAgIH0sIDMwMCk7XHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG59KTsiXX0=
