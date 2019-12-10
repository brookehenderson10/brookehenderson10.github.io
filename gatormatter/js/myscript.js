$(document).ready(function() {
   // keep this at the top
// Slider changes interval
  $('.carousel').carousel({
  interval: 1500
	})

// should it be faster?
//would like to add more pretty transition if possible

  $(function() {
 $('#navigation').click(function(){
   $('ul.nav').slideToggle();
  });
  });



	  // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#collapseOne"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to. Smooth scrolling helps with the nav.
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not... focusable?
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  }); // end of document ready.
