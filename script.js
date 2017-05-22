$(document).ready( function() {
  setTimeout(function() {
    $("#status").fadeOut("slow");
    $("#preloader").fadeOut("slow");
  }, 1000);

  //document.ready
  getWidthAndHeight();
  setSubMenuWidth();
  changeDialogBoxHeight("div.promotions");
  changeDialogBoxHeight("div.feed-back");
  //document.resize
  $(window).resize( function() {
    getWidthAndHeight();
    setSubMenuWidth();
    changeDialogBoxHeight("div.promotions");
    changeDialogBoxHeight("div.feed-back");
  });

  $(document).scrollTop(0);

// Smooth scroll
  $("div.nav-bar a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } // End if
  });
  $("div.carousel-caption a").on('click', function(event) {
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
      // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  $("div.wrap-humberger-menu a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } // End if
  });
// End smooth scroll
// Scroll Magic
  var controller = new ScrollMagic.Controller();
  var aboutUsBlurText = new ScrollMagic.Scene({
    triggerElement : '#about-us',
    triggerHook : '0.6'
  }).setClassToggle('div.about-text', 'fade-in')
    .addTo(controller);

  var aboutUsRollImage = new ScrollMagic.Scene({
    triggerElement : "#about-us",
    triggerHook : "0.6"
  }).setClassToggle('div.about-section img' , 'roll-in')
    .addTo(controller);

  var contactUsLeftSlideDoor = new ScrollMagic.Scene({
    triggerElement : "#contact-us",
    triggerHook : "0.8"
  }).setClassToggle('div.left-slide-door' , 'slide-left')
    .addTo(controller);

  var contactUsRightSlideDoor = new ScrollMagic.Scene({
    triggerElement : "#contact-us",
    triggerHook : "0.8"
  }).setClassToggle('div.right-slide-door' , 'slide-right')
    .addTo(controller);

  var contactInformation = new ScrollMagic.Scene({
    triggerElement : "#contact-us",
    triggerHook : "0.75"
  }).setClassToggle('div.contact-information' , 'change-z-index')
    .addTo(controller);

  var pushCarousel = new ScrollMagic.Scene({
    triggerElement : '#pre-wedding',
    triggerHook : '0.9',
    duration : '40%'
  }).setClassToggle('div.container-carousel', 'push-carousel')
    .addTo(controller);
  var pinCarousel = new ScrollMagic.Scene({
    triggerElement : '#pre-wedding',
    triggerHook : '0.5',
    duration : '50%'
  }).setClassToggle('div.container-carousel', 'pin-carousel')
    .addTo(controller);

  var footerTextBlur = new ScrollMagic.Scene({
    triggerElement : "#contact-us",
    triggerHook : "0.95"
  }).setClassToggle('div.footer' , 'blur-footer')
    .addTo(controller);
// End Scroll Magic
}); //End document.ready

$(".carousel").carousel({
  pause : null
});

$("div.nav-bar > ul > li > a").on("click", function() {
  $("div.nav-bar > ul > li > a").removeClass("active");
  $(this).addClass("active");
});
// Humberger Menu Hide Show
$("div.humberger-menu").on("click", function() {
  if ($("div.wrap-humberger-menu").css("opacity") == "0") {
    $("div.wrap-humberger-menu").css({"opacity" : "1", "transform" : "translateY(0)"});
    $("div.humberger:nth-child(1)").css({"transform" : "rotateZ(45deg) translate(7px, 7px)"});
    $("div.humberger:nth-child(3)").css({"transform" : "rotateZ(-45deg) translate(7px, -7px)"});
    $("div.humberger:nth-child(2)").css({"opacity" : "0"});
  } else {
    $("div.wrap-humberger-menu").css({"opacity" : "0", "transform" : "translateY(-50px)"});
    $("div.humberger:nth-child(1)").css({"transform" : "rotateZ(0deg) translate(0px, 0px)"});
    $("div.humberger:nth-child(3)").css({"transform" : "rotateZ(0deg) translate(0px, 0px)"});
    $("div.humberger:nth-child(2)").css({"opacity" : "1"});
  }
});

  // When Click on div.home, div.container-carousel, div.contact-us
  $("div.home, div.container-carousel, div.contact-us, div.wrap-humberger-menu li a")
    .on("click", function() {
      $("div.wrap-humberger-menu").css({"opacity" : "0", "transform" : "translateY(-50px)"});
      $("div.humberger:nth-child(1)").css({"transform" : "rotateZ(0deg) translate(0px, 0px)"});
      $("div.humberger:nth-child(3)").css({"transform" : "rotateZ(0deg) translate(0px, 0px)"});
      $("div.humberger:nth-child(2)").css({"opacity" : "1"});
  });
// End Humberger Menu Hide Show

$(document).scroll(function() {
  var h = window.innerHeight;
  if ($(document).scrollTop() > h) {
    $("div.nav-bar, div.wrap-humberger-menu")
                  .css({"background" : "rgba(211, 211, 211, 1)",
                        "box-shadow" : "0 5px 5px #333"});

    $("div.contact-us").css({"z-index" : "0"});
  } else {
    $("div.nav-bar, div.wrap-humberger-menu")
                  .css({"background" : "rgba(211, 211, 211, 0.8)",
                        "box-shadow" : "none"});
    $("div.contact-us").css({"z-index" : "-100"});
  }
});

// Hide overlay all
function hideOverlayAll() {
  $("div.overlay").css({"display" : "none"});
  $("div.promotions").css({"display" : "none"});
  $("div.feed-back").css({"display" : "none"});
  $("div.nav-bar ul li a").removeClass("active");
}
// End hide overlay all

// Promotions
/* changeDialogBoxHeight .. to detect height of the screen and if it is less than size of
 dialog boxes which are promotion and feedback, set height of the dialog box and overflow scroll
*/
function changeDialogBoxHeight(selector) {
    var windowHeight = window.innerHeight;
    var marginTopOfDialog = (windowHeight*25)/100;
    var dialogHeight = $(selector).height()+marginTopOfDialog;
    var selectorHeight = windowHeight-marginTopOfDialog+"px";

    if (windowHeight < dialogHeight) {
      $(selector).css({"height" : selectorHeight, "overflow-y" : "scroll"});
    } else {
      $(selector).css({"height" : "auto"});
    }
};

function promotions() {
  hideOverlayAll();
  $("div.overlay").css({"display" : "block"});
  $("div.promotions").css({"display" : "block"});
};

$("div.promotions div.promotions-title span").on("click", function() {
  hideOverlayAll();
});

// End Promotions

// Feed Back
function feedBack() {
  hideOverlayAll();
  $("div.overlay").css({"display" : "block"});
  $("div.feed-back").css({"display" : "block"});
};

$("div.feed-back div.feed-back-title span").on("click", function() {
  hideOverlayAll();
});
// End Feed Back

// Inner width and height calculate
function getWidthAndHeight() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  var total = h+$("div.home").height()+$("div.contact-us").height()+$("div.footer").height();

  $("div.container-carousel").css({"width" : w, "height" : h});
  $("div.item img").css({"width" : w, "height" : h});
  $("div.home").css({"top" : h});
  $("body").css({"height" : total});
}

//get width of humberger-main-menu and set width to ul.humberger-sub-menu
function setSubMenuWidth() {
  var mainMenuWidth = $("#humberger-main-menu").css("width");
  $("ul.humberger-sub-menu").css({"min-width" : mainMenuWidth});
}
