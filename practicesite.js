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
		}
		
	});


	$('nav ul li a').on('click',function(event){
		event.preventDefault();
		const hash = this.hash;

		$('html,body').animate({scrollTop:$(hash).offset().top},800);
	});
});
