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