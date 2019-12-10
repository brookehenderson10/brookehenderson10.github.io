//jquery document ready function
$(document).ready(function() {

 $('.slides').hide();

// using jquery event listners "on" for click function
$("button.topbut").click(function(){

	//hide the start quiz button with animation 300
	$('#intro').hide(300);
	//get id from data-slide and show with speed
	$($(this).data('slide')).show(300)

})

$("button.otherbut").click(function(){

	//hide the slides with animation 300
	$('.slides').hide(300);
	//get id from data-slide and show with speed
	$($(this).data('slide')).show(300)
})

});
