/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var text_template = "";
var video_template = "";
var slider_template = "";
var image_template = "";
var photogallery_template = "";

$(document).ready(function()
{
  if($(window.frameElement).is("[data-proces-copy]"))
  {
    return;
  }
  init_gridstack();
  init_templates();
  init_form();
  init_form2();
  init_form_action();
  
  var text_image = $("body").find(".grid-stack-item");
  text_image.each(function() {
    var text = $(this).find("#replace_text");
    var video = $(this).find("#replace_video");
    var slider = $(this).find("#replace_slider");
    var image = $(this).find("#replace_image");
    var photogallery = $(this).find("#replace_photogallery");
    if (text.length)
    {
      $(text).replaceWith(text_template);
    }
    if (video.length)
    {
      $(video).replaceWith(video_template);
    }
    if (slider.length)
    {
      $(slider).replaceWith(slider_template);
    }
    if (image.length)
    {
      $(image).replaceWith(image_template);
    }
    if (photogallery.length)
    {
      $(photogallery).replaceWith(photogallery_template);
    }
  });
  

  $(window).load(function() {
    if($(window.frameElement).is("[data-proces-copy]"))
    {
      return;
    }
    if ($.isFunction(parent.init_all_service))
    {
      parent.init_all_service(window.frameElement);
      setTimeout(function() {
      parent.heightAdjustment_one(window.frameElement);
    }, 500);
    } else
    {
      reinit_height();
      $(window).resize(function() {
        reinit_height();
      });
    }
  });
});

function init_gridstack()
{
  var cell = 30;
  var verMargin = 10;
  if($('.own_box_padding_form_v2').length)
  {
      cell = 2;
      verMargin = 5;
  }
  
  
  var options = {
    cellHeight: cell,
    verticalMargin: verMargin,
    animate: true
  };

  if ($('.grid-stack').length == 0)
  {
    return;
  }
  $('.grid-stack').gridstack(options);
  var db = $("#db_content");
  var grid = $('.grid-stack').data('gridstack');
  if (db.length)
  {
    var content_json = $("#db_content").html();
    serialization = jQuery.parseJSON(content_json);
    serialization = GridStackUI.Utils.sort(serialization);
    //grid.removeAll();
    _.each(serialization, function(node) {
      grid.addWidget($('<div><div class="grid-stack-item-content">' + Base64.decode(node.content) + '</div></div>'),
          node.x, node.y, node.width, node.height);
    });
  }
  grid.setStatic(true);
}

function reinit_height_grid()
{
  $('.grid-stack').on('change', function(event, ui) {
    $('.grid-stack').off('change');
    setTimeout(function() {
      parent.heightAdjustment_one(window.frameElement);
    }, 300);
  });
  reinit_height();
}

function reinit_height()
{
  var grids = $('.grid-stack');
  grids.each(function() {
    var that = this;
    if (typeof $(this).data('gridstack') == "undefined")
    {
      return;
    }
    var grid = $(this).data('gridstack');
    $(this).find(".grid-stack-item-content").each(function() {
      var gsi = $(this).parents(".grid-stack-item");
      
      if($(this).children()[0] === undefined)
      {
        return true;
      }
      
      if(!$(that).parent().hasClass("own_box_padding"))
      {
        return;
      }
      
      var child = $(this).children()[0];
      if($(child).is("a") && $(child).children().is("img"))
      {
        child = $(child).children()[0];
      }

      var newHeight = Math.ceil((child.scrollHeight + grid.opts.verticalMargin) / (grid.cellHeight() + grid.opts.verticalMargin));
      grid.resize(gsi, $(gsi).attr('data-gs-width'), newHeight);
    });

  });

}

function init_form_action()
{
    $("#user-form").submit(function(){
      
      if ($.isFunction(parent.init_all_service))
      {
        return false;
      }
    
    var that = this;
    if(!validateForm(this))
    {
      alert("Nejsou vyplněna všechna povinná pole");
      return false;
    }
    var srz_form = $("#user-form").serialize();
    var url = $("#user-form").attr("action");
    var message = "";
    $.post( url, { form_data: srz_form })
    .done(function( data ) {
      var result = jQuery.parseJSON( data );
      if(result.redirect_is === 1 )
      {
        window.location.replace(result.redirect);
        return;
      }
  
      message = result.message;
      if(result.error === 0)
      {
        alert(message);
        $("#user-form")[0].reset();
      }
      else
      {
        alert(message);
      }
    });
    return false;
  });
}

function validateForm(form) {
  var isValid = true;
  
  var inputs = $(form).find("input");
  var textarea = $(form).find("textarea");
  $(inputs).each(function(){
    if($(this).prop('required'))
    {
      if($(this).val() === "")
      {
        isValid = false;
      }
    }
  });
  $(textarea).each(function(){
    if($(this).prop('required'))
    {
      if($(this).val() === "")
      {
        isValid = false;
      }
    }
  });
  return isValid;
}

function init_form()
{
  var form = $('.own_box_padding_form');
  if(form.length === 0 || form.find("form").length)
  {
    return;
  }
  if(!$.isFunction(parent.init_all_service))
  {
    return;
  }
  //var id_box = 
  var id_block = parseInt(($($('.own_box_padding_form').context.defaultView.frameElement).attr("data-originalurl").replace ( /[^\d.]/g, '' )));
  $('.grid-stack').wrap('<form id="user-form" action="/ajax-requests/send-user-form/'+id_block+'"></form>');

}

function init_form2()
{
  var form = $('.own_box_padding_form_v2');
  if(form.length === 0 || form.find("form").length)
  {
    return;
  }
  if(!$.isFunction(parent.init_all_service))
  {
    return;
  }
  //var id_box = 
  var id_block = parseInt(($($('.own_box_padding_form_v2').context.defaultView.frameElement).attr("data-originalurl").replace ( /[^\d.]/g, '' )));
  $('.grid-stack').wrap('<form id="user-form" action="/ajax-requests/send-user-form/'+id_block+'"></form>');

}

function init_templates()
{

  text_template = '<article class="editContent paint-area paint-area--text editStyle"><p>Do odstavce zadejte vlastní text, který bude popisovat výše uvedený obrázek a nadpis. Do odstavce zadejte vlastní text, který bude popisovat výše uvedený obrázek a nadpis. Do odstavce zadejte vlastní text, který bude popisovat výše uvedený obrázek a nadpis. Do odstavce zadejte vlastní text, který bude popisovat výše uvedený obrázek a nadpis.</p></article>';
  video_template = '<div style="height: 98%;" class="videoWrapper frameCover propClone">\
                <iframe style="width: 100%; height: 100%;" src="https://www.youtube.com/embed/prCgoK-4GZA" frameborder="0" allowfullscreen></iframe>\
                <div class="frameCover" data-type="video" data-selector=".frameCover"></div>\
              </div>';
  slider_template = '<section  id="main-slider" class="sb-slider winterq" data-editable-sb-slider="true"\
                data-conf-animation="fade"\
                data-conf-autoplay="true"\
                data-conf-delay="5">\
        <ul>\
          <li class="sb-slider__item">\
            <div class="sb-slider-frame">\
              <div class="sb-slider-img">\
                <img src="/elements/117/masterslider/images/1.jpg" />\
              </div>\
              <div class="sb-slider-content">\
                <div class="sb-slider-header">Lorem ipsum dolore</div>\
                <div class="sb-slider-text">Zde uveďte text, který bude obsahovat informace o výše uvedeném nadpisu.</div>\
              </div>\
            </div>\
          </li>\
        </ul>\
      </section><!--/#main-slider-->';

  image_template = '<img class="img-responsive editStyle" src="/elements/117/images/blog/01.jpg" alt="" data-selector=".editStyle" data-editable-style="true">';
  photogallery_template = '      <section class="own_portfolio" id="portfolio">\
        <div style="width: 100%;" class="">\
          <div class="sb-gallery" data-editable-sb-gallery="true">\
            <div class="text-center">\
              <ul class="portfolio-filter sb-gallery-category">\
                <li class="sb-gallery__category-template"><a class="sb-gallery__not" style="display:none" href="#" data-filter="*">Vše</a></li>\
                <li><a class="active" href="#" data-filter=".gal0">Potápění</a></li>\
                <li><a class="" href="#" data-filter=".gal1">Horolezectví</a></li>\
                <li><a class="" href="#" data-filter=".gal2">Výpravy</a></li>\
              </ul><!--/#portfolio-filter-->\
            </div>\
            <div class="portfolio-items sb-gallery-items">\
              <div style="display: none" class="portfolio-item sb-gallery__item-template sb-gallery__item">\
                <div class="portfolio-item-inner">\
                  <a class="preview sb-gallery__link" href="" rel="prettyPhoto"><img class="img-responsive" src="" alt=""></a>\
                  <div class="portfolio-info">\
                    <h3 class="sb-gallery__header"></h3>\
                    <span class="sb-gallery__text"></span>\
                  </div>\
                </div>\
              </div>\
              <div class="portfolio-item gal0 sb-gallery__item">\
                <div class="portfolio-item-inner">\
                  <a class="preview sb-gallery__link" href="/elements/119/images/portfolio/01.jpg" rel="prettyPhoto"><img class="img-responsive" src="/elements/119/images/portfolio/01.jpg" alt=""></a>\
                  <div class="portfolio-info">\
                    <h3 class="sb-gallery__header">Obrázek 1</h3>\
                    <span class="sb-gallery__text">Zadejte popis obrázku</span>\
                  </div>\
                </div>\
              </div><!--/.portfolio-item-->\
              <div class="portfolio-item gal2 portfolio sb-gallery__item">\
                <div class="portfolio-item-inner">\
                  <a class="preview sb-gallery__link" href="/elements/119/images/portfolio/02.jpg" rel="prettyPhoto"><img class="img-responsive" src="/elements/119/images/portfolio/02.jpg" alt=""></a>\
                  <div class="portfolio-info">\
                    <h3 class="">Obrázek 2</h3>\
                    <span class="sb-gallery__text">Zadejte popis obrázku</span>\
                  </div>\
                </div>\
              </div><!--/.portfolio-item-->\
              <div class="portfolio-item gal0 sb-gallery__item">\
                <div class="portfolio-item-inner">\
                  <a class="preview sb-gallery__link" href="/elements/119/images/portfolio/03.jpg" rel="prettyPhoto"><img class="img-responsive" src="/elements/119/images/portfolio/03.jpg" alt=""></a>\
                  <div class="portfolio-info">\
                    <h3 class="sb-gallery__header">Obrázek 3</h3>\
                    <span class="sb-gallery__text">Zadejte popis obrázku</span>\
                  </div>\
                </div>\
              </div><!--/.portfolio-item-->\
              <div class="portfolio-item gal1 sb-gallery__item">\
                <div class="portfolio-item-inner">\
                  <a class="preview sb-gallery__link" href="/elements/119/images/portfolio/04.jpg" rel="prettyPhoto"><img class="img-responsive" src="/elements/119/images/portfolio/04.jpg" alt=""></a>\
                  <div class="portfolio-info">\
                    <h3>Obrázek 4</h3>\
                    <span class="sb-gallery__header sb-gallery__text">Zadejte popis obrázku</span>\
                    <a class="preview" href="/elements/119/images/portfolio/full.jpg" rel="prettyPhoto"><i class="fa editStyle fa-eye"></i></a>\
                  </div>\
                </div>\
              </div><!--/.portfolio-item-->\
              <div class="portfolio-item gal2 portfolio sb-gallery__item">\
                <div class="portfolio-item-inner">\
                  <a class="preview sb-gallery__link" href="/elements/119/images/portfolio/05.jpg" rel="prettyPhoto"><img class="img-responsive" src="/elements/119/images/portfolio/05.jpg" alt=""></a>\
                  <div class="portfolio-info">\
                    <h3 class="sb-gallery__header">Obrázek 5</h3>\
                    <span class="sb-gallery__text">Zadejte popis obrázku</span>\
                  </div>\
                </div>\
              </div><!--/.portfolio-item-->\
              <div class="portfolio-item gal1 sb-gallery__item">\
                <div class="portfolio-item-inner">\
                  <a class="preview sb-gallery__link" href="/elements/119/images/portfolio/06.jpg" rel="prettyPhoto"><img class="img-responsive" src="/elements/119/images/portfolio/06.jpg" alt=""></a>\
                  <div class="portfolio-info">\
                    <h3 class="sb-gallery__header">Obrázek 5</h3>\
                    <span class="sb-gallery__text">Zadejte popis obrázku</span>\
                  </div>\
                </div>\
              </div><!--/.portfolio-item-->\
              <div class="portfolio-item gal2 portfolio sb-gallery__item">\
                <div class="portfolio-item-inner">\
                  <a class="preview sb-gallery__link" href="/elements/119/images/portfolio/07.jpg" rel="prettyPhoto"><img class="img-responsive" src="/elements/119/images/portfolio/07.jpg" alt=""></a>\
                  <div class="portfolio-info">\
                    <h3 class="sb-gallery__header">Obrázek 7</h3>\
                    <span class="sb-gallery__text">Zadejte popis obrázku</span>\
                  </div>\
                </div>\
              </div><!--/.portfolio-item-->\
              <div class="portfolio-item gal1 sb-gallery__item">\
                <div class="portfolio-item-inner">\
                  <a class="preview sb-gallery__link" href="/elements/119/images/portfolio/08.jpg" rel="prettyPhoto"><img class="img-responsive" src="/elements/119/images/portfolio/08.jpg" alt=""></a>\
                  <div class="portfolio-info">\
                    <h3 class="sb-gallery__header">Obrázek 8</h3>\
                    <span class="sb-gallery__text">Zadejte popis obrázku</span>\
                  </div>\
                </div>\
              </div><!--/.portfolio-item-->\
            </div>\
          </div>\
        </div><!--/.container-->\
      </section><!--/#portfolio-->';
}


