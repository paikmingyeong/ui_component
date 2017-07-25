/**
 * Image Sliding CSS
 */

$(function(){

  // 선언부
  function init(){
    $('.css-sliding-view-image').eq(0).addClass('center');
    $('.css-sliding-view-image').eq(1).addClass('right');
    $('.css-sliding-view-image').eq(2).addClass('left');

    //marginCtrlWrap();
    //paging();
  }

  var currentIndex = 0;
  var nextIndex = 0;
  var prevIndex = 0;
  var timeID;

  function moveLeft(){
    if(nextIndex >= $('.css-sliding-view-image').length){
      nextIndex = 0;
    }

    // eq()에 음수 값을 넣어 주면 뒷 순서부터 차례대로 매칭시킴
    $('.css-sliding-view-image').eq(currentIndex-1).removeClass('left ani').addClass('right');
    $('.css-sliding-view-image').eq(currentIndex).removeClass('center ani').addClass('left ani');
    $('.css-sliding-view-image').eq(nextIndex).removeClass('right').addClass('center ani');

    currentIndex = nextIndex;
    nextIndex++;
  }

  function moveRight(){
    if(nextIndex <= -1){
      nextIndex = $('.css-sliding-view-image').length-1;
    }

    if( prevIndex >= $('.css-sliding-view-image').length ){
      prevIndex = 0;
    }

    $('.css-sliding-view-image').eq(prevIndex).removeClass('right ani').addClass('left');
    $('.css-sliding-view-image').eq(currentIndex).removeClass('center ani').addClass('right ani');
    $('.css-sliding-view-image').eq(nextIndex).removeClass('left').addClass('center ani');

    currentIndex = nextIndex;
    prevIndex = currentIndex + 1;
    nextIndex--;
  }


  function autoRolling(){

    timeID = setInterval(function(){
      if( $('.css-sliding-btn-control').hasClass('play') ) {
        $('.css-sliding-btn-control').removeClass('play').addClass('pause').text('pause');
      }
      nextIndex = currentIndex + 1;
      moveLeft();
    }, 3000);
  }

  function marginCtrlWrap(){

    var wrapWidth = $('.css-sliding-control-wrap').width();
    $('.css-sliding-control-wrap').css({
      'margin-left' : -( wrapWidth / 2 )
    });
  }

  function paging(){
    var imgNumber = $('.css-sliding-view-image').length;
    for(var i=0; i<imgNumber; i++){
      $('.css-sliding-paging').append('<li class="css-sliding-paging-item"><a href="#" class="css-sliding-paging-link">' + (i+1) + '</a></li>');
    }
  }


  function pauseAndReAuto(){
    // autoRolling()의 setInterval 을 중지 => 자동롤링 일시정지
    clearInterval( timeID );
    if( $('.css-sliding-btn-control').hasClass('pause') ){
      $('.css-sliding-btn-control').removeClass('pause').addClass('play').text('play');
    }

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
  }

  // 실행부
  init();

  autoRolling();

  var activeClick = function(direction){

    var dir = direction;

    if( dir == 'right' ){
      nextIndex = currentIndex + 1;
      moveLeft();
    } else {
      nextIndex = currentIndex - 1;
      prevIndex = currentIndex + 1;
      moveRight();
    }

    var $selector = $('.css-sliding-arrow.' + dir); // $('.css-sliding-arrow.right')

    setTimeout(function(){
      // 재귀함수
      $selector.one('click', function(){
        activeClick(dir);
      });

      /*
       if(dir == 'left'){
       $('.css-sliding-arrow.right').one('click', function(){
       activeClick(dir);
       });
       } else {
       $('.css-sliding-arrow.left').one('click', function(){
       activeClick(dir);
       });
       }
       */
    }, 1000);

  };

  $('.css-sliding-arrow.right').one('click', function(){
    pauseAndReAuto();
    activeClick('right');
  });

  $('.css-sliding-arrow.left').one('click', function(){
    pauseAndReAuto();
    activeClick('left');
  });

  $(document).on('click', '.css-sliding-btn-control.pause', function(e){
    clearInterval(timeID);
    $(e.target).removeClass('pause').addClass('play');
    $(e.target).text('Play');
  });

  $(document).on('click', '.css-sliding-btn-control.play', function(e){
    autoRolling();
    $(e.target).removeClass('play').addClass('pause');
    $(e.target).text('Pause');
  });

  $(document).on('click', '.css-sliding-paging-item', function(e){

    pauseAndReAuto();

    e.preventDefault();

    var indexNumber = $(this).index('.css-sliding-paging-item');

    if( currentIndex != indexNumber ){

      if( currentIndex == 0 ){

        if( indexNumber == $('.css-sliding-view-image').length-1 ){
          activeClick('left');
        } else {
          activeClick('right');
        }

      } else if( currentIndex == $('.css-sliding-view-image').length-1 ){

        if( indexNumber == 0 ){
          activeClick('right');
        } else {
          activeClick('left');
        }

      } else {

        if( currentIndex < indexNumber ){
          activeClick('right');
        } else {
          activeClick('left');
        }

      }

    }

  });

});