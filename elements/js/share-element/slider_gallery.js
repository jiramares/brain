/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function()
{
  if ($.isFunction(parent.get_iframe_jquery))
  {
    if (!$(".Gallery_slider").length)
    {
      return;
    }
    $(".Gallery_slider").children().attr("id", Math.random().toString(36).substr(2, 8));
    reinit_gallery_slider($(".Gallery_slider2"));
  } 
  else
  {      
    var gallery2 = $(".gallery_slider");
    $(gallery2).each(function(){
      var gallery = $(this).find(".Gallery_slider2");
      reinit_gallery_slider(gallery);

    });

  }

});

function reinit_gallery_slider(gallery)
{
  var parent_gallery = $(gallery).parent();
  var script = parent_gallery.parent().find("#tmp-java").getComments();
//  var theme = parent_gallery.parent().find("#tmp-java").attr("data-theme");
  var timeout = parent_gallery.parent().find("#tmp-java").attr("data-timer");
  var auto = parent_gallery.parent().find("#tmp-java").attr("data-auto");

  
  $(gallery).html("");
  //var clone = $(gallery).clone();
  $(gallery).replaceWith($('<div class="Gallery_slider2"> </dv>'));
  gallery = parent_gallery.children();
  $(gallery).attr("id", Math.random().toString(36).substr(2, 8));
  $(gallery).append(script);
  

  var gallery_theme = "slider";
  var tiles_type = "";
  var api = $(gallery).unitegallery({gallery_theme:gallery_theme, gallery_autoplay:auto, gallery_play_interval:timeout*1000, gallery_min_height:200, gallery_width:"100%"});


  if ($.isFunction(parent.get_iframe_jquery))
  {
    api.on("resize",function(num, data){	
      resize_gallery_slider(gallery);
	  });
  }
}

function resize_gallery_slider(gallery)
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

