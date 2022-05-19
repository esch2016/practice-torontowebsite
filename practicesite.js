$(window).on('load',function(){
	$(window).on('scroll',function(){
		var scroll = $(window).scrollTop();
		var bigSize = 100 + (scroll / 7);

		if(bigSize  < 200){
			$('.main-img').css('background-size',bigSize + '%');
		}
	});

	$(window).on('scroll',function(){
		var sectionTop = (Math.floor($('#downtown').offset().top));
		var scroll = $(window).scrollTop();

		if(sectionTop-30 < scroll){
			$('.header, .inner-ul').addClass('headerTwo');
			$('.logo span').css('display','none');

		}
		else{
			$('.header, .inner-ul').removeClass('headerTwo');
			$('.logo span').css('display','inline-block');
			$('.hamburger').removeClass('color');
		}

		if($('.header, .inner-ul').hasClass('headerTwo') && $('.hamburger').hasClass('active') ){
				$('.hamburger').addClass('color');
			}
		
	});


	$('nav ul li a').on('click',function(event){
		event.preventDefault();
		const hash = this.hash;

		$('html,body').animate({scrollTop:$(hash).offset().top},800);
	});
});


/****************     show hamburger menu     ****************/

	// $(window).scroll(function(){

	// 	var pageTop = $(window).scrollTop();
	// 	const box = $('.colum');

	// 	if(pageTop > 200){
	// 		box.addClass('action');
	// 	}

	// });



/****************     click hamburger menu     ****************/


$('.header nav span').click(function(evt){
	evt.preventDefault();
	$('.hamburger').toggleClass('active');
	
	 if($('.hamburger').hasClass('active')){
	 	$('.hamburger li').addClass('open');
	 	
	 }
	 else{
	 	$('.hamburger').css('display','none');
	 	$('.hamburger').removeClass('color');
	 }
});

