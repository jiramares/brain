jQuery(function($) {
  'use strict';

  // Navigation Scroll
  $(window).scroll(function(event) {
    Scroll();
  });
  
  $(document).ready(function(){
    var path = window.location.pathname.split( '/' );
    if(path[1] === "")
    {
      path[1] = "index.html";
    }
    var to_active =  $(".navbar-collapse ul li").find("a").filter(function() {return this.href.match(path[1]+"$") && $(this).attr("href") !== "";});
    if(to_active.length)
    {
      var is_submenu = to_active.parents(".sb-menu__submenu");
      if(is_submenu.length)
      {
        is_submenu.parent().addClass("active");
      }
      else
      {
        to_active.parent().addClass("active");
      }
    }
  });
  
  $('.navbar-collapse ul li a').on('click', function() {
    if($(this.hash).offset() != undefined)
    {
      var nav = $(this).closest("nav");
      var rel = 5;
      if($(nav).length && $(nav).css("position") === "fixed")
      {
        rel = $(nav).height();
      }
      $(window).off("scroll");
      $('html, body').animate({scrollTop: $(this.hash).offset().top - rel}, 1000, function(){
        $(window).scroll(function(event) {
          Scroll();
        });
      });
    }
    $(".sb-menu__item").removeClass("active");
    $(this).closest(".sb-menu__item").addClass("active");
    
    var str = $(this).attr("href");
    if (str.charAt(0) === "#")
    {
      return false;
    }
    return true;
  });
  
  // User define function
  function Scroll() {
    var elm = [];
    var winTop = $(window).scrollTop();
    var nav = $('.navbar-collapse').closest("nav");
    $('.navbar-collapse').find('.scroll a').each(function() {
      if($(this).attr('href') == "" || $(this).attr('href').charAt(0) !== "#")
      {
        return true;
      }
      var attr_href = $("#page ").children($(this).attr('href'));

      if(typeof $(attr_href).offset() === 'undefined')
      {
        return true;
      }
      var rel = 0;
      nav = $(this).closest("nav");
      if($(nav).length && $(nav).css("position") === "fixed")
      {
        rel = $(nav).height() + 5;
      }

      elm.push([$(attr_href).offset().top - rel, $(attr_href).offset().top - rel + $(attr_href).height(), $(this).parent()]);
    });
    $.each(elm, function(i) {
      if ((winTop < elm[i][1]) && (winTop > elm[i][0])) {
        $('.navbar-collapse li.scroll')
            .removeClass('active');
         elm[i][2].addClass('active');
      }
    });
  }
  ;

  $('#tohash').on('click', function() {
    $('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
    return false;
  });

  // accordian
  $('.accordion-toggle').on('click', function() {
    $(this).closest('.panel-group').children().each(function() {
      $(this).find('>.panel-heading').removeClass('active');
    });

    $(this).closest('.panel-heading').toggleClass('active');
  });

  //Slider
  $(document).ready(function() {
    var time = 7; // time in seconds

    var $progressBar,
        $bar,
        $elem,
        isPause,
        tick,
        percentTime,
        owl_carousel_item;

    //Init the carousel

    owl_carousel_item = $("#main-slider").find('.owl-carousel');
    if (owl_carousel_item.length) {
      owl_carousel_item.owlCarousel({
        slideSpeed: 500,
        paginationSpeed: 500,
        singleItem: true,
        navigation: true,
        navigationText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
        ],
        afterInit: progressBar,
        afterMove: moved,
        startDragging: pauseOnDragging,
        //autoHeight : true,
        transitionStyle: "fadeUp"
      });
    }

    //Init progressBar where elem is $("#owl-demo")
    function progressBar(elem) {
      $elem = elem;
      //build progress bar elements
      buildProgressBar();
      //start counting
      start();
    }

    //create div#progressBar and div#bar then append to $(".owl-carousel")
    function buildProgressBar() {
      $progressBar = $("<div>", {
        id: "progressBar"
      });
      $bar = $("<div>", {
        id: "bar"
      });
      $progressBar.append($bar).appendTo($elem);
    }

    function start() {
      //reset timer
      percentTime = 0;
      isPause = false;
      //run interval every 0.01 second
      tick = setInterval(interval, 10);
    }
    ;

    function interval() {
      if (isPause === false) {
        percentTime += 1 / time;
        $bar.css({
          width: percentTime + "%"
        });
        //if percentTime is equal or greater than 100
        if (percentTime >= 100) {
          //slide to next item
          $elem.trigger('owl.next')
        }
      }
    }

    //pause while dragging
    function pauseOnDragging() {
      isPause = true;
    }

    //moved callback
    function moved() {
      //clear interval
      clearTimeout(tick);
      //start again
      start();
    }
  });

  //Initiat WOW JS
  new WOW().init();
  //smoothScroll
  smoothScroll.init();

  // portfolio filter
  $(window).load(function() {
    'use strict';
    var $portfolio_selectors = $('.portfolio-filter >li>a');
    var $portfolio = $('.portfolio-items');

    var selector = $('.portfolio-filter >li>a.active').attr('data-filter');
    $portfolio.isotope({filter: selector});

    if($('#portfolio').attr('data-firstload') === "1")
    {
      $portfolio.isotope({
        itemSelector: '.portfolio-item:not(.sb-gallery__item-template)',
        layoutMode: 'fitRows',
        filter: $('.portfolio-filter').find('.active').data('filter')
      });

      $('#portfolio').attr('data-firstload', "0");
    }

    $portfolio_selectors.on('click', function() {
      $portfolio_selectors.removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      $portfolio.isotope({filter: selector});
      return false;
    });
    
    if($(".sb-slider").length)
    {
      $(".unslider-arrow").remove();
      $(".sb-slider").each(function(index, val){
        var slider_config = {
          autoplay: $(this).data("conf-autoplay"),
          animation: $(this).data("conf-animation"),
          delay: $(this).data("conf-delay")*1000
        };
        if (parent.$ && parent.$.Unslider)
        {
          parent.slider = parent.slider || new Array();
          parent.slider.push($(this).unslider( slider_config ));
//          if ($.isFunction(parent.make_some_iframe_responsive))
//          {
//            parent.make_some_iframe_responsive();
//          }
        }
        else
        {
          $(this).unslider( slider_config );
        }
      });
    }
  });

  $(document).ready(function() {
    //Animated Progress
    $('.progress-bar').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
      if (visible) {
        $(this).css('width', $(this).data('width') + '%');
        $(this).unbind('inview');
      }
    });

    //Animated Number
    $.fn.animateNumbers = function(stop, commas, duration, ease) {
      return this.each(function() {
        var $this = $(this);
        var start = 0;
        commas = (commas === undefined) ? true : commas;
        $({value: start}).animate({value: stop}, {
          duration: duration == undefined ? 1000 : duration,
          easing: ease == undefined ? "swing" : ease,
          step: function() {
            $this.text(Math.floor(this.value));
            if (commas) {
              $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            }
          },
          complete: function() {
            if (parseInt($this.text()) !== stop) {
              $this.text(stop);
              if (commas) {
                $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
              }
            }
          }
        });
      });
    };

    $('.animated-number').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
      var $this = $(this);
      if (visible) {
        $this.animateNumbers(parseInt($this.text(), 10), false, $this.data('duration'));
        $this.unbind('inview');
      }
    });
  });

  // Contact form
  var form = $('#main-contact-form');
  if(form.length && form.find('#email2').length === 0)
  {
    form.append('<input style="display:none" type="email" name="email2" id="email2" value="" />');
  }
  form.submit(function(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    var to_send = {'name': $('input[name=name]').val(),
        'message': $('textarea#message').val(),
        'subject': $('input[name=subject]').val(),
        'email': $('input[name=email]').val(),
        'captcha': $('input[name=captcha]').val()};
    if(form.find('#email2').length)
    {
      to_send['email2'] = $('input[name=email2]').val();
    }
    var form_status = $('<div class="form_status"></div>');
    $.ajax({
      url: $(this).attr('action'),
      type: 'post',
      data: to_send,
      beforeSend: function() {
        form.prepend(form_status.html('<p style="text-align: center; font-size: 30px;"><i class="fa fa-spinner fa-spin"></i></p>').fadeIn());
      }
    }).done(function(data) {
      if (data !== "")
      {
        form_status.html('<p class="text-danger">' + data + '</p>').delay(3000).fadeOut();
        var d = new Date();
        form.find(".captch-img").attr("src", "/ajax-requests/get-captcha-img?"+d.getTime());
        
      } else
      {
        form_status.html('<p class="text-success" style="text-align: center; font-size: 30px;"><i class="fa fa-check"></i></p>').delay(3000).fadeOut();
      }
    });
  });
  
  // Contact form
  var own_form = $('#user-form');
  own_form.submit(function() {
    $.ajax({
      url: '/ajax-requests/get-captcha-img',
      type: 'post'
    }).done(function() {
        var d = new Date();
        own_form.find(".captcha-img").attr("src", "/ajax-requests/get-captcha-img?"+d.getTime());
      });
  });

  //Pretty Photo
  $("a[rel^='prettyPhoto']").prettyPhoto({
    social_tools: false,
    changepicturecallback: function() {
      var edit_icon_menu = $('#onpage-edit-menu', window.parent.document);
      if (edit_icon_menu.is('div'))
      {
        edit_icon_menu.hide();
      }
    }
  });
});

jQuery(window).on('load',function() {
  //Google Map
  var latitude = $('#google-map').data('latitude');
  var longitude = $('#google-map').data('longitude');
  var zoom = $('#google-map').data('zoom');
  var elem = document.getElementById('google-map');
  function initialize_map() {
    var myLatlng = new google.maps.LatLng(latitude, longitude);
    var mapOptions = {
      zoom: zoom,
      scrollwheel: false,
      center: myLatlng,
      disableDefaultUI: true,
    };
    var map = new google.maps.Map(elem, mapOptions);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map
    });
    elem.map_reference = map;
    elem.marker_reference = marker;
  }

  if (elem !== null) {
    initialize_map();
  }
});

function init_masterslider()
{
  var slider_list = $('.masterslider-element');
  $.each(slider_list, function(key, element) {
    var id = element.getAttribute('id');
    var slider = new MasterSlider();
    slider.setup(id, {
      width: 1920, // slider standard width
      height: 500, // slider standard height
      space: 5
          // more slider options goes here...
          // check slider options section in documentation for more options.
    });
    // adds Arrows navigation control to the slider.
    slider.control('arrows');
  });
}
;
