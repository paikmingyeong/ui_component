/**
 * Tab Menu CSS
 */

$(function(){

  $('.css-tab-heading').on('click', function(e){

    e.preventDefault();

    var tabIndex = $(this).index('.css-tab-heading');

    $('.css-tab-heading>a').removeClass('on');
    $('.css-tab-heading').eq(tabIndex).children('a').addClass('on');

    $('.css-tab-content').removeClass('on');
    $('.css-tab-content').eq(tabIndex).addClass('on');
  })

});
/**
 * Tab Menu Jquery
 */

$(function(){

  $('.tab-heading').on('click', function(e){

    e.preventDefault();

    var tabIndex = $(this).index('.tab-heading');

    $('.tab-heading>a').removeClass('on');
    $('.tab-heading').eq(tabIndex).children('a').addClass('on');

    $('.tab-content').fadeOut(500);
    $('.tab-content').eq(tabIndex).fadeIn(500);

  });

});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl90YWJfbWVudV9jc3MuanMiLCJfdGFiX21lbnVfanF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidGFiX21lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVGFiIE1lbnUgQ1NTXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKCcuY3NzLXRhYi1oZWFkaW5nJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHZhciB0YWJJbmRleCA9ICQodGhpcykuaW5kZXgoJy5jc3MtdGFiLWhlYWRpbmcnKTtcclxuXHJcbiAgICAkKCcuY3NzLXRhYi1oZWFkaW5nPmEnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICQoJy5jc3MtdGFiLWhlYWRpbmcnKS5lcSh0YWJJbmRleCkuY2hpbGRyZW4oJ2EnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICAkKCcuY3NzLXRhYi1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKCcuY3NzLXRhYi1jb250ZW50JykuZXEodGFiSW5kZXgpLmFkZENsYXNzKCdvbicpO1xyXG4gIH0pXHJcblxyXG59KTsiLCIvKipcclxuICogVGFiIE1lbnUgSnF1ZXJ5XHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKCcudGFiLWhlYWRpbmcnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdmFyIHRhYkluZGV4ID0gJCh0aGlzKS5pbmRleCgnLnRhYi1oZWFkaW5nJyk7XHJcblxyXG4gICAgJCgnLnRhYi1oZWFkaW5nPmEnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICQoJy50YWItaGVhZGluZycpLmVxKHRhYkluZGV4KS5jaGlsZHJlbignYScpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgICQoJy50YWItY29udGVudCcpLmZhZGVPdXQoNTAwKTtcclxuICAgICQoJy50YWItY29udGVudCcpLmVxKHRhYkluZGV4KS5mYWRlSW4oNTAwKTtcclxuXHJcbiAgfSk7XHJcblxyXG59KTtcclxuIl19
