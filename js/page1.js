var main = $(function(){
  $('.B-culture').click(function() {
      console.log('test');
      var currentButton = $('.inClass-active');
      currentButton.fadeOut(600).removeClass("inClass-active");
      $('.C-culture').fadeIn(600).addClass("inClass-active");
      $('.textsoolp').fadeOut(300).removeClass("inClass-active");
    });
  $('.B-history').click(function() {
      console.log('test');
      var currentButton = $('.inClass-active');
      currentButton.fadeOut(600).removeClass("inClass-active");
      $('.C-history').fadeIn(600).addClass("inClass-active");
        $('.textsoolp').fadeOut(300).removeClass("inClass-active");
    });
  $('.B-law').click(function() {
      console.log('test');
      var currentButton = $('.inClass-active');
      currentButton.fadeOut(600).removeClass("inClass-active");
      $('.C-law').fadeIn(600).addClass("inClass-active");
        $('.textsoolp').fadeOut(300).removeClass("inClass-active");
    });
    $('.B-nature').click(function() {
        console.log('test');
        var currentButton = $('.inClass-active');
        currentButton.fadeOut(600).removeClass("inClass-active");
        $('.C-nature').fadeIn(600).addClass("inClass-active");
          $('.textsoolp').fadeOut(300).removeClass("inClass-active");
      });
      $('.B-society').click(function() {
          console.log('test');
          var currentButton = $('.inClass-active');
          currentButton.fadeOut(600).removeClass("inClass-active");
          $('.C-society').fadeIn(600).addClass("inClass-active");
            $('.textsoolp').fadeOut(300).removeClass("inClass-active");
        });
        $('.B-build').click(function() {
            console.log('test');
            var currentButton = $('.inClass-active');
            currentButton.fadeOut(600).removeClass("inClass-active");
            $('.C-build').fadeIn(600).addClass("inClass-active");
              $('.textsoolp').fadeOut(300).removeClass("inClass-active");
          });
  $('#SchoolBack').mouseenter(function() {
      console.log('test');
      $('.textsoolp').fadeIn(300).addClass("inClass-active");
      });
  $('.IconImg').click(function() {
      console.log('test');
      $('.course').css("background-color", "red");
      });
  $('.Block-H').jScrollPane();

});
$(document).ready(main);
