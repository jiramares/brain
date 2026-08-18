/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function()
{
  if ($.isFunction(parent.get_iframe_jquery))
  {
    if (!$("#Eshop").length)
    {
      return;
    }

    window._babelPolyfill=false;
    var comment = $("#tmp-java").getComments();
    $("#Eshop").html("");
    $("#Eshop").append(comment);
//    var script = $("#tmp-script").getComments();
//    $("#Eshop").append(script);
    var el = document.getElementById("Eshop");
    el.addEventListener(
        "click",
        function(ev) {
          ev.stopPropagation();
          ev.preventDefault();
        },
        true);
  } else
  {
    if ($("#Eshop").length)
    {
      var script = $("#Eshop").parent().find("#tmp-java").getComments();
      $("#Eshop").append(script);
    }
  }

});

$.fn.getComments = function() {
  return this.contents().map(function() {
    if (this.nodeType === 8)
      return this.nodeValue;
  }).get();
};

