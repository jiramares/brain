/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function()
{
  if ($.isFunction(parent.get_iframe_jquery))
  {
    if (!$(".Gallery2").length)
    {
      return;
    }
    $(".Gallery2").children().attr("id", Math.random().toString(36).substr(2, 8));
    reinit_gallery2($(".Gallery22"));
  } 
  else
  {
    var gallery2 = $(".gallery2");
    $(gallery2).each(function(){
      var gallery = $(this).find(".Gallery22");
      reinit_gallery2(gallery);

    });

  }

});

function reinit_gallery2(gallery)
{
  var parent_gallery = $(gallery).parent();
  var script = parent_gallery.parent().find("#tmp-java").getComments();
  var theme = parent_gallery.parent().find("#tmp-java").attr("data-theme");
  
  //získání hodnot z #tmp-java 
  var radius = {
    lt: parent_gallery.parent().find("#tmp-java").attr("data-radius-lt"),
    rt: parent_gallery.parent().find("#tmp-java").attr("data-radius-rt"),
    rb: parent_gallery.parent().find("#tmp-java").attr("data-radius-rb"),
    lb: parent_gallery.parent().find("#tmp-java").attr("data-radius-lb"),
    style: parent_gallery.parent().find("#tmp-java").attr("data-border-style"),
    width: parent_gallery.parent().find("#tmp-java").attr("data-border-width"),
    color: parent_gallery.parent().find("#tmp-java").attr("data-border-color")
  };
  
  $(gallery).html("");
  //var clone = $(gallery).clone();
  $(gallery).replaceWith($('<div class="Gallery22"> </dv>'));
  gallery = parent_gallery.children();
  $(gallery).attr("id", Math.random().toString(36).substr(2, 8));
  $(gallery).append(script);
  
  
  var gallery_theme = "";
  var tiles_type = "";
  switch (theme)
  {
    case "Tiles - columns":
      gallery_theme = "tiles";
      tiles_type = "columns";
      break;
    case "Tiles - Justified":
      gallery_theme = "tiles";
      tiles_type = "justified";
      break;
    case "Tiles - Nested":
      gallery_theme = "tiles";
      tiles_type = "nested";
      break;
    case "Default":
      gallery_theme = "default";
      break;
    case "Tiles - Grid":
      gallery_theme = "tilesgrid";
//      tiles_type = "grid";
      break;
    case "Carousel":
      gallery_theme = "carousel";
      break;
    case "Grid - Theme":
      gallery_theme = "grid";
      break;  
    case "Slider":
      gallery_theme = "slider";
      break;   

  }
  
  var api = $(gallery).unitegallery({gallery_theme:gallery_theme, tiles_type:tiles_type});
  
  //init vlastností gallerie2 (záložka "Vlastnosti")
  $(gallery).find('.ug-thumb-wrapper').css({
    "border-top-left-radius": radius['lt'], 
    "border-top-right-radius": radius['rt'], 
    "border-bottom-right-radius": radius['rb'], 
    "border-bottom-left-radius": radius['lb'],
    "border-style": radius['style'],
    "border-width": radius['width'],
    "border-color": radius['color']
  });

  if ($.isFunction(parent.get_iframe_jquery))
  {
    api.on("resize",function(num, data){	
      resize_gallery2(gallery);
	  });
  }
}

function resize_gallery2(gallery)
{
    var height_body = $(gallery).closest("body")[0].offsetHeight;
    $(window.frameElement).height(height_body+"px");
    $(window.frameElement.parentElement).height(height_body+"px");
}

$.fn.getComments = function() {
  return this.contents().map(function() {
    if (this.nodeType === 8)
      return this.nodeValue;
  }).get();
};

