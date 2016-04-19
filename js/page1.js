var main = $(function(){
  $('.B-culture').click(function() {
      console.log('test');
      var NButton=$('.Nobutton');
      NButton.removeClass("Nobutton");
      $('#SchoolBack').unbind('mouseenter');
      var currentButton = $('.inClass-active');
      currentButton.fadeOut(600).removeClass("inClass-active");
      $('.C-culture').fadeIn(600).addClass("inClass-active");
      $('.textsoolp').fadeOut(300).removeClass("inClass-active");
      $(this).addClass("Nobutton");
    });
  $('.B-history').click(function() {
      console.log('test');
      var NButton=$('.Nobutton');
      NButton.removeClass("Nobutton");
      $('#SchoolBack').unbind('mouseenter');
      var currentButton = $('.inClass-active');
      currentButton.fadeOut(600).removeClass("inClass-active");
      $('.C-history').fadeIn(600).addClass("inClass-active");
      $('.textsoolp').fadeOut(300).removeClass("inClass-active");
      $(this).addClass("Nobutton");
    });
  $('.B-law').click(function() {
      console.log('test');
      var NButton=$('.Nobutton');
      NButton.removeClass("Nobutton");
      $('#SchoolBack').unbind('mouseenter');
      var currentButton = $('.inClass-active');
      currentButton.fadeOut(600).removeClass("inClass-active");
      $('.C-law').fadeIn(600).addClass("inClass-active");
      $('.textsoolp').fadeOut(300).removeClass("inClass-active");
      $(this).addClass("Nobutton");
    });
    $('.B-nature').click(function() {
        console.log('test');
        var NButton=$('.Nobutton');
        NButton.removeClass("Nobutton");
        $('#SchoolBack').unbind('mouseenter');
        var currentButton = $('.inClass-active');
        currentButton.fadeOut(600).removeClass("inClass-active");
        $('.C-nature').fadeIn(600).addClass("inClass-active");
        $('.textsoolp').fadeOut(300).removeClass("inClass-active");
        $(this).addClass("Nobutton");
      });
      $('.B-society').click(function() {
          console.log('test');
          var NButton=$('.Nobutton');
          NButton.removeClass("Nobutton");
          $('#SchoolBack').unbind('mouseenter');
          var currentButton = $('.inClass-active');
          currentButton.fadeOut(600).removeClass("inClass-active");
          $('.C-society').fadeIn(600).addClass("inClass-active");
          $('.textsoolp').fadeOut(300).removeClass("inClass-active");
          $(this).addClass("Nobutton");
        });
        $('.B-build').click(function() {
            console.log('test');
            var NButton=$('.Nobutton');
            NButton.removeClass("Nobutton");
            $('#SchoolBack').unbind('mouseenter');
            var currentButton = $('.inClass-active');
            currentButton.fadeOut(600).removeClass("inClass-active");
            $('.C-build').fadeIn(600).addClass("inClass-active");
            $('.textsoolp').fadeOut(300).removeClass("inClass-active");
            $(this).addClass("Nobutton");
          });
  $('#SchoolBack').bind('mouseenter',function() {
      console.log('test');
      $('.textsoolp').fadeIn(300).addClass("inClass-active");
      $('#SchoolBack').addClass("Toblur");
      });
  $('.Block-H').jscrollpane();
});
$(document).ready(main);
