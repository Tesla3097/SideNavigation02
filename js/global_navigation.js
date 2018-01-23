$(function() {
	
	var $header = $('#header');
	var $wrapper = $('#wrapper');
	
	$('#toggle-menu').click(function(){
		
		$header.toggleClass('open');
		$wrapper.toggleClass('open');
	
	});
	
});


$(function(){
	
	$('.accordion_ul ul').hide();
	
		$('.accordion_ul h1').click(function(e){
			
		$(this).toggleClass("active");
		$(this).next("ul").slideToggle();
		
	});
	
});


