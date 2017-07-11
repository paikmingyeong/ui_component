/**
 * Tab Menu CSS
 */


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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl90YWJfbWVudV9jc3MuanMiLCJfdGFiX21lbnVfanF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidGFiX21lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVGFiIE1lbnUgQ1NTXHJcbiAqL1xyXG5cclxuIiwiLyoqXHJcbiAqIFRhYiBNZW51IEpxdWVyeVxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCgnLnRhYi1oZWFkaW5nJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHZhciB0YWJJbmRleCA9ICQodGhpcykuaW5kZXgoJy50YWItaGVhZGluZycpO1xyXG5cclxuICAgICQoJy50YWItaGVhZGluZz5hJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKCcudGFiLWhlYWRpbmcnKS5lcSh0YWJJbmRleCkuY2hpbGRyZW4oJ2EnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICAkKCcudGFiLWNvbnRlbnQnKS5mYWRlT3V0KDUwMCk7XHJcbiAgICAkKCcudGFiLWNvbnRlbnQnKS5lcSh0YWJJbmRleCkuZmFkZUluKDUwMCk7XHJcblxyXG4gIH0pO1xyXG5cclxufSk7Il19
