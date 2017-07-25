/**
 * Accordion menu CSS
 */

$(function(){

  // 선언부
  function init(){
    // 처음 로딩되었을 때 상태
    $('.css-lnb-depth1-link').data({'open' : 'false'});

    // each() : 요소 개수만큼 반복하는 함수
    $('.css-lnb-depth2').each(function(index){
      $(this).data({'height' : $(this).height()}).css({height : 0});
    });

  }

  function menuOpen( $depth1Link ){
    $depth1Link.next().css({
      height : $depth1Link.next().data('height')
    });

    $depth1Link.data({'open' : 'true'}).addClass('up');
  }

  function menuClose( $depth1Link ){
    $depth1Link.parent().siblings().children('.css-lnb-depth2').css({
      height : 0
    });
    $depth1Link.parent().siblings().children('.css-lnb-depth1-link').data('open', 'false').removeClass('up');
  }

  function menuSelfClose( $depth1Link ){
    $depth1Link.next().css({
      height : 0
    });
    $depth1Link.data({'open' : 'false'}).removeClass('up');
  }



// 실행부
  init();

  $('.css-lnb-depth1-link').on('click', function(e){

    e.preventDefault();

    if( $(this).data('open') == 'false' ){

      menuOpen( $(this) );
      menuClose( $(this) );

    } else {

      menuSelfClose( $(this) );

    }

  });

});



/**
 * Accordion menu jQuery
 */

/*
 ※ show/hide 형태의 아코디언 메뉴
 ※ CSS 코딩 : styling, hide
 1. 마우스 클릭했을 때 sub 메뉴가 show / hide
 2. 클릭한 1 depth 의 sub 메뉴가 보일 때 다른 1 depth의 sub 메뉴는 안보여야 함.
 3. sub 메뉴가 보일 때 화살표는 윗방향 화살표로 변경
 4. sub 메뉴가 안보이게 될 때 화살표는 아랫방향 화살표로 변경
 */

/*
 ※ sub 메뉴의 영역이 늘어났다/줄어들었다 형태의 아코디언 메뉴
 ※ CSS 코딩 : styling, 줄어듬(높이 : 0)
 1. 마우스를 클릭했을 때, sub 메뉴의 상태에 따라 sub 메뉴가 늘어남/줄어듬
 2. 클릭한 1 depth의 sub 메뉴가 늘어날 때 다른 1 depth의 sub 메뉴는 줄어들어야 함.
 3. sub 메뉴가 보일 때 화살표는 윗방향 화살표로 변경
 4. sub 메뉴가 안보이게 될 때 화살표는 아랫방향 화살표로 변경
 */

$(function(){

  // 선언부
  function init(){
    // 처음 로딩되었을 때 상태
    $('.lnb-depth1-link').data({'open' : 'false'});

    // each() : 요소 개수만큼 반복하는 함수
    $('.lnb-depth2').each(function(index){
      $(this).data({'height' : $(this).height()}).css({height : 0});
    });

  }

  function menuOpen( $depth1Link ){
    /*
     $(this).next().stop().animate({key : value},시간,콜백함수)
     ** jQuery DOM을 단계별로 찾아갈 때,
     : 첫번 째 인수의 value 부분에 $(this) 를 사용하면 처음 찾은 $(this)를 의미
     : 콜백함수 부분에 $(this)를 사용하면 최종으로 찾은 DOM요소가 $(this)가 됨.
     */
    $depth1Link.next().stop().animate({
      height : $depth1Link.next().data('height')
    });

    $depth1Link.data({'open' : 'true'}).addClass('up');
  }

  function menuClose( $depth1Link ){
    $depth1Link.parent().siblings().children('.lnb-depth2').stop().animate({
      height : 0
    });
    $depth1Link.parent().siblings().children('.lnb-depth1-link').data('open', 'false').removeClass('up');
  }

  function menuSelfClose( $depth1Link ){
    $depth1Link.next().stop().animate({
      height : 0
    });
    $depth1Link.data({'open' : 'false'}).removeClass('up');
  }

  // 실행부
  init();

  $('.lnb-depth1-link').on('click', function(e){

    e.preventDefault();

    if( $(this).data('open') == 'false' ){

      menuOpen( $(this) );
      menuClose( $(this) );

    } else {

      menuSelfClose( $(this) );

    }

  });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY19tZW51X2Nzcy5qcyIsImFjY19tZW51X2pxdWVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYWNjX21lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQWNjb3JkaW9uIG1lbnUgQ1NTXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAvLyDshKDslrjrtoBcclxuICBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICAvLyDsspjsnYwg66Gc65Sp65CY7JeI7J2EIOuVjCDsg4Htg5xcclxuICAgICQoJy5jc3MtbG5iLWRlcHRoMS1saW5rJykuZGF0YSh7J29wZW4nIDogJ2ZhbHNlJ30pO1xyXG5cclxuICAgIC8vIGVhY2goKSA6IOyalOyGjCDqsJzsiJjrp4ztgbwg67CY67O17ZWY64qUIO2VqOyImFxyXG4gICAgJCgnLmNzcy1sbmItZGVwdGgyJykuZWFjaChmdW5jdGlvbihpbmRleCl7XHJcbiAgICAgICQodGhpcykuZGF0YSh7J2hlaWdodCcgOiAkKHRoaXMpLmhlaWdodCgpfSkuY3NzKHtoZWlnaHQgOiAwfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51T3BlbiggJGRlcHRoMUxpbmsgKXtcclxuICAgICRkZXB0aDFMaW5rLm5leHQoKS5jc3Moe1xyXG4gICAgICBoZWlnaHQgOiAkZGVwdGgxTGluay5uZXh0KCkuZGF0YSgnaGVpZ2h0JylcclxuICAgIH0pO1xyXG5cclxuICAgICRkZXB0aDFMaW5rLmRhdGEoeydvcGVuJyA6ICd0cnVlJ30pLmFkZENsYXNzKCd1cCcpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudUNsb3NlKCAkZGVwdGgxTGluayApe1xyXG4gICAgJGRlcHRoMUxpbmsucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbignLmNzcy1sbmItZGVwdGgyJykuY3NzKHtcclxuICAgICAgaGVpZ2h0IDogMFxyXG4gICAgfSk7XHJcbiAgICAkZGVwdGgxTGluay5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcuY3NzLWxuYi1kZXB0aDEtbGluaycpLmRhdGEoJ29wZW4nLCAnZmFsc2UnKS5yZW1vdmVDbGFzcygndXAnKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1lbnVTZWxmQ2xvc2UoICRkZXB0aDFMaW5rICl7XHJcbiAgICAkZGVwdGgxTGluay5uZXh0KCkuY3NzKHtcclxuICAgICAgaGVpZ2h0IDogMFxyXG4gICAgfSk7XHJcbiAgICAkZGVwdGgxTGluay5kYXRhKHsnb3BlbicgOiAnZmFsc2UnfSkucmVtb3ZlQ2xhc3MoJ3VwJyk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4vLyDsi6TtlonrtoBcclxuICBpbml0KCk7XHJcblxyXG4gICQoJy5jc3MtbG5iLWRlcHRoMS1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmKCAkKHRoaXMpLmRhdGEoJ29wZW4nKSA9PSAnZmFsc2UnICl7XHJcblxyXG4gICAgICBtZW51T3BlbiggJCh0aGlzKSApO1xyXG4gICAgICBtZW51Q2xvc2UoICQodGhpcykgKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgbWVudVNlbGZDbG9zZSggJCh0aGlzKSApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG59KTtcclxuXHJcblxyXG4iLCIvKipcclxuICogQWNjb3JkaW9uIG1lbnUgalF1ZXJ5XHJcbiAqL1xyXG5cclxuLypcclxuIOKAuyBzaG93L2hpZGUg7ZiV7YOc7J2YIOyVhOy9lOuUlOyWuCDrqZTribRcclxuIOKAuyBDU1Mg7L2U65SpIDogc3R5bGluZywgaGlkZVxyXG4gMS4g66eI7Jqw7IqkIO2BtOumre2WiOydhCDrlYwgc3ViIOuplOuJtOqwgCBzaG93IC8gaGlkZVxyXG4gMi4g7YG066at7ZWcIDEgZGVwdGgg7J2YIHN1YiDrqZTribTqsIAg67O07J28IOuVjCDri6TrpbggMSBkZXB0aOydmCBzdWIg66mU64m064qUIOyViOuztOyXrOyVvCDtlaguXHJcbiAzLiBzdWIg66mU64m06rCAIOuztOydvCDrlYwg7ZmU7IK07ZGc64qUIOycl+uwqe2WpSDtmZTsgrTtkZzroZwg67OA6rK9XHJcbiA0LiBzdWIg66mU64m06rCAIOyViOuztOydtOqyjCDrkKAg65WMIO2ZlOyCtO2RnOuKlCDslYTrnqvrsKntlqUg7ZmU7IK07ZGc66GcIOuzgOqyvVxyXG4gKi9cclxuXHJcbi8qXHJcbiDigLsgc3ViIOuplOuJtOydmCDsmIHsl63snbQg64qY7Ja064Ks64ukL+ykhOyWtOuTpOyXiOuLpCDtmJXtg5zsnZgg7JWE7L2U65SU7Ja4IOuplOuJtFxyXG4g4oC7IENTUyDsvZTrlKkgOiBzdHlsaW5nLCDspITslrTrk6wo64aS7J20IDogMClcclxuIDEuIOuniOyasOyKpOulvCDtgbTrpq3tlojsnYQg65WMLCBzdWIg66mU64m07J2YIOyDge2DnOyXkCDrlLDrnbwgc3ViIOuplOuJtOqwgCDripjslrTrgqgv7KSE7Ja065OsXHJcbiAyLiDtgbTrpq3tlZwgMSBkZXB0aOydmCBzdWIg66mU64m06rCAIOuKmOyWtOuCoCDrlYwg64uk66W4IDEgZGVwdGjsnZggc3ViIOuplOuJtOuKlCDspITslrTrk6TslrTslbwg7ZWoLlxyXG4gMy4gc3ViIOuplOuJtOqwgCDrs7Tsnbwg65WMIO2ZlOyCtO2RnOuKlCDsnJfrsKntlqUg7ZmU7IK07ZGc66GcIOuzgOqyvVxyXG4gNC4gc3ViIOuplOuJtOqwgCDslYjrs7TsnbTqsowg65CgIOuVjCDtmZTsgrTtkZzripQg7JWE656r67Cp7ZalIO2ZlOyCtO2RnOuhnCDrs4Dqsr1cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIC8vIOyEoOyWuOu2gFxyXG4gIGZ1bmN0aW9uIGluaXQoKXtcclxuICAgIC8vIOyymOydjCDroZzrlKnrkJjsl4jsnYQg65WMIOyDge2DnFxyXG4gICAgJCgnLmxuYi1kZXB0aDEtbGluaycpLmRhdGEoeydvcGVuJyA6ICdmYWxzZSd9KTtcclxuXHJcbiAgICAvLyBlYWNoKCkgOiDsmpTshowg6rCc7IiY66eM7YG8IOuwmOuzte2VmOuKlCDtlajsiJhcclxuICAgICQoJy5sbmItZGVwdGgyJykuZWFjaChmdW5jdGlvbihpbmRleCl7XHJcbiAgICAgICQodGhpcykuZGF0YSh7J2hlaWdodCcgOiAkKHRoaXMpLmhlaWdodCgpfSkuY3NzKHtoZWlnaHQgOiAwfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51T3BlbiggJGRlcHRoMUxpbmsgKXtcclxuICAgIC8qXHJcbiAgICAgJCh0aGlzKS5uZXh0KCkuc3RvcCgpLmFuaW1hdGUoe2tleSA6IHZhbHVlfSzsi5zqsIQs7L2c67Cx7ZWo7IiYKVxyXG4gICAgICoqIGpRdWVyeSBET03snYQg64uo6rOE67OE66GcIOywvuyVhOqwiCDrlYwsXHJcbiAgICAgOiDssqvrsogg7Ke4IOyduOyImOydmCB2YWx1ZSDrtoDrtoTsl5AgJCh0aGlzKSDrpbwg7IKs7Jqp7ZWY66m0IOyymOydjCDssL7snYAgJCh0aGlzKeulvCDsnZjrr7hcclxuICAgICA6IOy9nOuwse2VqOyImCDrtoDrtoTsl5AgJCh0aGlzKeulvCDsgqzsmqntlZjrqbQg7LWc7KKF7Jy866GcIOywvuydgCBET03smpTshozqsIAgJCh0aGlzKeqwgCDrkKguXHJcbiAgICAgKi9cclxuICAgICRkZXB0aDFMaW5rLm5leHQoKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIGhlaWdodCA6ICRkZXB0aDFMaW5rLm5leHQoKS5kYXRhKCdoZWlnaHQnKVxyXG4gICAgfSk7XHJcblxyXG4gICAgJGRlcHRoMUxpbmsuZGF0YSh7J29wZW4nIDogJ3RydWUnfSkuYWRkQ2xhc3MoJ3VwJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtZW51Q2xvc2UoICRkZXB0aDFMaW5rICl7XHJcbiAgICAkZGVwdGgxTGluay5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcubG5iLWRlcHRoMicpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgaGVpZ2h0IDogMFxyXG4gICAgfSk7XHJcbiAgICAkZGVwdGgxTGluay5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcubG5iLWRlcHRoMS1saW5rJykuZGF0YSgnb3BlbicsICdmYWxzZScpLnJlbW92ZUNsYXNzKCd1cCcpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWVudVNlbGZDbG9zZSggJGRlcHRoMUxpbmsgKXtcclxuICAgICRkZXB0aDFMaW5rLm5leHQoKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIGhlaWdodCA6IDBcclxuICAgIH0pO1xyXG4gICAgJGRlcHRoMUxpbmsuZGF0YSh7J29wZW4nIDogJ2ZhbHNlJ30pLnJlbW92ZUNsYXNzKCd1cCcpO1xyXG4gIH1cclxuXHJcbiAgLy8g7Iuk7ZaJ67aAXHJcbiAgaW5pdCgpO1xyXG5cclxuICAkKCcubG5iLWRlcHRoMS1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmKCAkKHRoaXMpLmRhdGEoJ29wZW4nKSA9PSAnZmFsc2UnICl7XHJcblxyXG4gICAgICBtZW51T3BlbiggJCh0aGlzKSApO1xyXG4gICAgICBtZW51Q2xvc2UoICQodGhpcykgKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgbWVudVNlbGZDbG9zZSggJCh0aGlzKSApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG59KTsiXX0=
