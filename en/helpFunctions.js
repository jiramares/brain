function jsUpdateSize() {
    var width = window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth;
    var height = window.innerHeight ||
                 document.documentElement.clientHeight ||
                 document.body.clientHeight;


}

window.onload = jsUpdateSize;       // When the page first loads
window.onresize = jsUpdateSize;     // When the browser changes size


$(document).ready(function(){
  //$(".card").hover(function(){
	$(".card").mouseenter(function(){
		$(".card").toggleClass("is-flipped");  //Toggle the active class to the area is hovered
	});
	$(".cardimg").mouseenter(function(){
		$(this).toggleClass("is-flipped");  //Toggle the active class to the area is hovered
	});
});
