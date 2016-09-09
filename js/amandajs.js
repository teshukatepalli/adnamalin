$(document).ready(function() {

  // show at work on load
  $(".atwork-content").show();

  $("a[href^='#']").each(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname
    && this.hash.replace(/#/,'') ) {
      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
      if ($target) {
        var targetOffset = $target.offset().top;

        // JQUERY CLICK FUNCTION REMOVE AND ADD CLASS "ACTIVE" + SCROLL TO THE #DIV
        $(this).click(function() {
          $("#nav li a").removeClass("active");
          $(this).addClass('active');
          console.log("here")
          $('html, body').animate({scrollTop: targetOffset}, 1000);
          return false;
        });
      }
    }
  });

  $("a[href^='at']").on("click", function(e){
    e.preventDefault();
    $(this).parent().siblings('div.center').children().hide();
    var clickedLink = "." + $(this).attr('href');
    $(clickedLink).fadeIn();
  })

});
