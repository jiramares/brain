 if(jQuery.browser.mobile)
 {
     /**
      * Skrytí menu po načcení stránky na mobilním zobrazení
      */
     $('.sb-menu').attr('aria-expanded', false)
         .css({'height':'1px'})
         .removeClass('collapse in')
         .addClass('collapse');

     /**
      * Skrytí menu po kliknutí na položku v menu na mobilním zobrazení
      */
     $('.sb-menu__link').click(function(){
         $('.sb-menu').attr('aria-expanded', false)
             .css({'height':'1px'})
             .removeClass('collapse in')
             .addClass('collapse');
     });
 }




