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