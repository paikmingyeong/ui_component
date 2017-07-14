/**
 * Ease 값 비교
 * */

$(function(){

  function repeat() {

    $('.box1').css({top:0}).stop().animate({top: 450}, 2000, 'linear');
    $('.box2').css({top:0}).stop().animate({top: 450}, 2000, 'easeInExpo');
    $('.box3').css({top:0}).stop().animate({top: 450}, 2000, 'easeOutExpo');
    $('.box4').css({top:0}).stop().animate({top: 450}, 2000, 'easeInOutExpo');
    $('.box5').css({top:0}).stop().animate({top: 450}, 2000, $.bez([.07,.87,.33,.04]));

  }

  setInterval(function(){
    repeat();
  }, 2500);

});


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWluZ19mdW5jdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InRpbWluZ19mdW5jdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBFYXNlIOqwkiDruYTqtZBcclxuICogKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgZnVuY3Rpb24gcmVwZWF0KCkge1xyXG5cclxuICAgICQoJy5ib3gxJykuY3NzKHt0b3A6MH0pLnN0b3AoKS5hbmltYXRlKHt0b3A6IDQ1MH0sIDIwMDAsICdsaW5lYXInKTtcclxuICAgICQoJy5ib3gyJykuY3NzKHt0b3A6MH0pLnN0b3AoKS5hbmltYXRlKHt0b3A6IDQ1MH0sIDIwMDAsICdlYXNlSW5FeHBvJyk7XHJcbiAgICAkKCcuYm94MycpLmNzcyh7dG9wOjB9KS5zdG9wKCkuYW5pbWF0ZSh7dG9wOiA0NTB9LCAyMDAwLCAnZWFzZU91dEV4cG8nKTtcclxuICAgICQoJy5ib3g0JykuY3NzKHt0b3A6MH0pLnN0b3AoKS5hbmltYXRlKHt0b3A6IDQ1MH0sIDIwMDAsICdlYXNlSW5PdXRFeHBvJyk7XHJcbiAgICAkKCcuYm94NScpLmNzcyh7dG9wOjB9KS5zdG9wKCkuYW5pbWF0ZSh7dG9wOiA0NTB9LCAyMDAwLCAkLmJleihbLjA3LC44NywuMzMsLjA0XSkpO1xyXG5cclxuICB9XHJcblxyXG4gIHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICByZXBlYXQoKTtcclxuICB9LCAyNTAwKTtcclxuXHJcbn0pO1xyXG5cclxuIl19
