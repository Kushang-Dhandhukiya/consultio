
$(document).ready(function(){
    setTimeout(function(){
        $('.preloader').fadeOut();
    },1800);
});


$(document).ready(function(){

        var btn = $('.to_top');
        btn.hide(); 
        $(window).scroll(function() {
            if ($(window).scrollTop() > 300) {
                btn.fadeIn();
            } else {
                btn.fadeOut();
            }
        });

        btn.on('click', function(e) {
        e.preventDefault();
            $('html, body').animate({scrollTop:0}, '300');
        });

    });

AOS.init();

$(document).ready(function(){

    $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
    
        if (scroll >= 50) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });


    $('#portfolio').owlCarousel({
        loop:true,
        margin:120,
        nav:true,
        items:4,
        autoplay:true,
        autoplayTimeout:4000,
        smartSpeed:800,
    });

    $('#testimonial_slide').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      items:3,
      center:true,
      autoplay:true,
      autoplayTimeout:4000,
      smartSpeed:800,
  });

});

var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 3000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});


const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("is-open");

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "10px";
      console.log(content.style.maxHeight);
    }
  };
});

$('.main_menu li > a').click(function(){
  $('.main_menu li a').removeClass('active');
  $(this).addClass('active')
});

