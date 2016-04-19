$(document).ready(function($) {

	// For Mobile Menu
  $("nav.navbar.navbar-default .navbar-toggle").click(function(){
    if ($("#bs-example-navbar-collapse-1").hasClass("in")){
      $("#bs-example-navbar-collapse-1").removeClass("in");
      $("#bs-example-navbar-collapse-1").css("height", "1px");
    }else{
      $("#bs-example-navbar-collapse-1").addClass("in");
      $("#bs-example-navbar-collapse-1").removeAttr("style");
    }
  });

	/*
	team hover
	=========================== */
	$('.team-wrapper').hover(function(){
		$(".avatar-left", this).stop().animate({left:'50%'},{queue:false,duration:550});
		$(".avatar-right", this).stop().animate({right:'50%'},{queue:false,duration:550});
	}, function() {
		$(".avatar-left", this).stop().animate({left:'0'},{queue:false,duration:550});
		$(".avatar-right", this).stop().animate({right:'0'},{queue:false,duration:550});
	});	
	
	/*
	Tooltips
	=========================== */
	$('.tooltips').tooltip({
		 selector: "a[data-tooltips='tooltip']"
	})
	
	/*
	Ticker
	=========================== */	
	$('.ticker').list_ticker({
			speed:5000,
			effect:'fade'
	});	
	
	/*
	Bounce animated
	=========================== */	
	$(".e_bounce").hover(
		function () {
			$(this).addClass("animated bounce");
			$(this).addClass("services-bgcolor");
		},
		function () {
			$(this).removeClass("animated bounce");
			$(this).removeClass("services-bgcolor");
		}
	);
	
	/*
	Hidden
	=========================== */	
	$(".logo-hover, .hover-frame, .folio-caption").css({'opacity':'0','filter':'alpha(opacity=0)'});	

	/*
	Top hover	
	=========================== */	
	$('.box-nav, .slides li, .about-nav').hover(
		function() {			
			$(this).find('.hover-frame').stop().fadeTo(900, 0.2);
		},
		function() {
			$(this).find('.hover-frame').stop().fadeTo(900, 0);
		}
	)	
	
	/*
	Client logo hover
	=========================== */		
	$('.client-link').hover(
		function() {
			$(this).find('.logo-hover').stop().fadeTo(900, 1);
			$(this).find('.client-logo').stop().fadeTo(900, 0);
		},
		function() {
			$(this).find('.logo-hover').stop().fadeTo(900, 0);
			$(this).find('.client-logo').stop().fadeTo(900, 1);
		}
	)	

	/*
	Client logo hover
	=========================== */		
	// $('.socila-link').hover(
	// 	function() {
	// 		$(this).find('.social-hover').stop().fadeTo(900, 1);
	// 		$(this).find('.social-icon').stop().fadeTo(900, 0);
	// 	},
	// 	function() {
	// 		$(this).find('.social-hover').stop().fadeTo(900, 0);
	// 		$(this).find('.social-icon').stop().fadeTo(900, 1);
	// 	}
	// )
	
	
	/*
	portfolio hover	
	=========================== */	
	$('.folio-thumb').hover(
		function() {			
			$(this).find('.folio-caption').stop().fadeTo(900, 0.8);
			$('.zoom', this).stop().animate({top:'35%'},{queue:false,duration:300});
			return false; 			
		},
		function() {
			$(this).find('.folio-caption').stop().fadeTo(900, 0);
			$('.zoom', this).stop().animate({top:'100%'},{queue:false,duration:300});
			return false;			
		}
	)	
	
});	