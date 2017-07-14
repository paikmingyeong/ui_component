/**
 * Image Sliding jQuery
 */
$(function(){

  $('.btn-jump-right').on('click', function(){
    $('.box1').css({
      left : 300
    });
  });

  $('.btn-move-right').on('click', function(){

    $('.box2').animate({
      left : 300
    }, 1000);
  });

  $('.btn-start-all').on('click', function(){
    $('.box3').animate({
      width : 300,
      height: 300,
      left : 300
    });
  });

  $('.btn-start-part').on('click', function(){
    $('.box4')
        .animate({width :300}, 1000)
        .animate({height:300}, 1000)
        .animate({left : 300}, 1000);
  });

  $('.btn-start-part2').on('click', function(){
    $('.box4').animate({width:100}, 1000, function(){
      $(this).animate({height:100}, 1000, function(){
        $(this).animate({left:0}, 1000);
      });
    });
  });
});

$(function(){

  // 선언부
  function init(){
    $('.view-image').eq(0).css({left : 0});
    $('.view-image').eq(1).css({left : 400});
    $('.view-image').eq(2).css({left : -400});
    marginCtrlWrap();
    paging();
  }
  var currentIndex = 0;
  var nextIndex = 0;
  var timeID;
  var checkID;

  function moveLeft(){
    // 마지막 이미지의 인덱스 이면 처음 인덱스 번호로 되돌려 줌.
    if(nextIndex >= $('.view-image').length){
      nextIndex = 0;
    }

    $('.view-image').eq(currentIndex).stop().animate({left:-400}, 2000, 'easeOutExpo');

    $('.view-image').eq(nextIndex).css({left:400}).stop().animate({left:0}, 2000, 'easeOutExpo');

    currentIndex = nextIndex;
    nextIndex++;
  }

  function moveRight(){

    if(nextIndex <= -1){
      nextIndex = $('.view-image').length-1;
    }

    $('.view-image').eq(currentIndex).stop().animate({left:400}, 2000, 'easeOutExpo');

    $('.view-image').eq(nextIndex).css({left:-400}).stop().animate({left:0}, 2000, 'easeOutExpo');

    currentIndex = nextIndex;
    nextIndex--;
  }

  function autoRolling(){

    timeID = setInterval(function(){
      nextIndex = currentIndex + 1;
      moveLeft();
    }, 3000);
  }
  function marginCtrlWrap(){
    var wrapWidth = $('.control-wrap').width();
    $('.control-wrap').css({
      'margin-left' : -( wrapWidth / 2 )
    });
  }
  function paging(){
    var imgNumber = $('.view-image').length;
    for(var i=0; i<imgNumber; i++){
      $('.paging').append('<li class="paging-item"><a href="#" class="paging-link">' + (i+1) + '</a></li>');
    }
  }
  function clickPaging(){
  }




  // 실행부
  init();

  autoRolling();

  $('.arrow.right').on('click', function(){

    clearInterval( timeID );
    clearInterval( checkID );

    var count = 0;
    checkID = setInterval(function(){
      if(count == 5){
        autoRolling();
        clearInterval(checkID);
      }
      console.log(count);
      count++;
    }, 1000);
    nextIndex = currentIndex + 1;

    if( !$('.view-image').is(':animated') ){
      moveLeft();
    }
  });
  $('.arrow.left').on('click', function(){

    clearInterval( timeID );
    clearInterval( checkID );

    var count = 0;
    checkID = setInterval(function(){
      if(count == 5){
        autoRolling();
        clearInterval(checkID);
      }
      console.log(count);
      count++;
    }, 1000);
    nextIndex = currentIndex - 1;

    if( !$('.view-image').is(':animated') ){
      moveRight();
    }
  });
  $(document).on('click', '.btn-control.pause', function(e){
    clearInterval(timeID);

    $(e.target).removeClass('pause').addClass('play');
    $(e.target).text('Play');
  });
  $(document).on('click', '.btn-control.play', function(e){
    autoRolling();

    $(e.target).removeClass('play').addClass('pause');
    $(e.target).text('Pause');
  });
  $(document).on('click', '.paging-item', function(e){

    e.preventDefault();

    var indexNumber = $(this).index('.paging-item');
    if( currentIndex != indexNumber ){
      if( currentIndex == 0 ){
        if( indexNumber == $('.view-image').length-1 ){
          nextIndex = currentIndex - 1;
          if( !$('.view-image').is(':animated') ){
            moveRight();
          }
        } else {
          nextIndex = currentIndex + 1;
          if( !$('.view-image').is(':animated') ){
            moveLeft();
          }
        }
      } else if( currentIndex == $('.view-image').length-1 ){
        if( indexNumber == 0 ){
          nextIndex = currentIndex + 1;
          if( !$('.view-image').is(':animated') ){
            moveLeft();
          }
        } else {
          nextIndex = currentIndex - 1;
          if( !$('.view-image').is(':animated') ){
            moveRight();
          }
        }
      } else {
        if( currentIndex < indexNumber ){
          nextIndex = currentIndex + 1;
          if( !$('.view-image').is(':animated') ){
            moveLeft();
          }
        } else {
          nextIndex = currentIndex - 1;
          if( !$('.view-image').is(':animated') ){
            moveRight();
          }
        }
      }
    }
  });
});
