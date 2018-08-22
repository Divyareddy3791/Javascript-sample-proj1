$(document).ready(function() {
	$('.nav-head-line i').click(function(e){
		e.preventDefault();
		$('nav .drop-down').slideToggle();
	})
	$('.drop-down li').click(function(){
		$(this).children('ul').slideToggle();	
	});
	
	$('.signup').click(function(e){
		e.preventDefault();
		$('.signup-block').show();
		$('.signup').addClass('color');
	})
	$('#close').live('click',function(e){
		e.preventDefault();
		$('.signup-block').hide();
		$('.signup').removeClass('color');
	})	
	
	$('.backtotop-icon').click(function(e){
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, 1000);
	});
	
	$('.comment').click(function(e){
		e.preventDefault();
		$('.newsPostBlock1').slideToggle();	
	});
	
	$('.drop-down1 li a').click(function(e){
		e.preventDefault();
        
        
	$('html, body').animate({
	   scrollTop: $( $(this).attr('href') ).offset().top
	}, 2000);
        
	});
	
	
	
});







