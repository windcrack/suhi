$(document).ready(() =>{
	let maxt = 70,
		crop = '<span class="crop">...</span>';
	$('.description').each(function(){
		let text = $(this),
			html = text.html(),
			htmlH = '<span class="hide">' + html.substring(maxt) + '</span>',
			htmlS = '<span class="show">' + html.substring(0, maxt) + '</span>';
			text.html(htmlS + crop + htmlH);
	});
	let more = document.querySelectorAll('.more-opt'),
		body = document.querySelector('body'),
		des = document.querySelectorAll('.description'),
		details = document.querySelectorAll('.detailed');
		function hideMore(h){
			for(let i = h; i < more.length; i++){
				more[i].classList.remove('show');
				des[i].classList.remove('hide');
				more[i].classList.add('hide');
				des[i].classList.add('show');
			}
		}
		hideMore(0);
		function showMore(s){
			if (more[s].classList.contains('hide')) {
				more[s].classList.remove('hide');
				more[s].classList.add('show');
				des[s].classList.add('hide');
			}
		}
		body.addEventListener('click', e =>{
			let target = e.target;
			if (target && target.classList.contains('detailed')) {
				for(let i = 0; i < details.length; i++){
					if (target == details[i]) {
						hideMore(0);
						showMore(i);
					}
				}
			}
		});
	$('.show').click(function(){
		$(this).parent('.description').addClass('moret');
	});
	$('.button-open').click(function(){
		$('.side-menu').addClass('move');
		$('.content-in').show('300');
		$('.side-menu').css('z-index', '99');
		$('.button-open').hide();
	});
	$('.button-close').click(function(){
		$('.side-menu').removeClass('move');
		$('.content-in').hide('300');
		$('.button-open').show();
		$('.side-menu').css('z-index', '0');
	});
	$(() =>{
		$('#phone-mask').mask('+7(999) 999-99-99');
		$('#phone-mask-pick').mask('+7(999) 999-99-99');
		$('#phone-reg').mask('+7(999) 999-99-99');
	});
	$('.pick').click(() =>{
		$('.delivery').css('display', 'none');
		$('.del').addClass('link-def');
		$('.del').removeClass('active-link');
		$('.pickup').css('display', 'block');
		$('.pick').removeClass('link-def');
		$('.pick').addClass('active-link');
	});
	$('.del').click(()=>{
		$('.pickup').css('display', 'none');
		$('.pick').addClass('link-def');
		$('.pick').removeClass('active-link');
		$('.delivery').css('display', 'block');
		$('.del').removeClass('link-def');
		$('.del').addClass('active-link');
	});
	$('.cash').click(() =>{
		$('.credit').css('display', 'none');
		$('.no-credit').css('display', 'block');
		$('.map').removeClass('active-link-down');
		$('.cash').addClass('active-link-down');
		
	});
	$('.map').click(() =>{
		$('.credit').css('display', 'block');
		$('.no-credit').css('display', 'none');
		$('.map').addClass('active-link-down');
		$('.cash').removeClass('active-link-down');
	});
	function menuScroll (){
		let scrollStatus = $(document).scrollTop();
		if (scrollStatus > 2) {
			$('header').addClass('menu-fixed');
		}else if(scrollStatus < 2){
			$('header').removeClass('menu-fixed');
		}
	}
	$(document).scroll(function(){
		menuScroll();
	});
	// Слайдер
	$('.text-slider').slick({
        adaptiveHeight: true,
        arrows: false,
        variableWidth: true,
        dots: false,
        initialSlide: 1,
        slidesToShow: 3,
        slideToScroll: 1,
        centerPadding: '0px',
        centerMode: true,
        respondTo: 'window'
  	});
  	$('.slider-main').slick({
      	adaptiveHeight: true,
      	arrows: false,
      	autoplay: true,
      	autoplaySpeed: 3000
  	});
  	$('.next-towar').slick({
	    adaptiveHeight: true,
      	arrows: false,
      	arrows: false,
      	initialSlide: 0,
        slidesToShow: 3,
        slideToScroll: 1
	});
});