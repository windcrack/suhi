$(document).ready(() =>{
	if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
		$(".description").each(function(){
		    let review_full = $(this).html(),
		    	review = review_full;
		    if( review.length > 70 ) {
		      review = review.substring(0, 70);
		      $(this).html( review + '<div class="crop">...</div>' );
		    }
		    $(this).append('<div class="full_text" style="display: none;">' + review_full + '</div>');
		});
		 
		$(".description").on('click',".crop",function(){
		   $(this).parent().html (
		      $(this).parent().find(".full_text").html()
		   );
		});
	}
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
		function hideMoreAgane(ha){
			if(more[ha].classList.contains('show')){
				more[ha].classList.remove('show');
				more[ha].classList.add('hide');
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
			if (target.classList.contains('btn-side-open')) {
				$('button').removeClass('btn-side-open');
				$('button').addClass('btn-side-close');
			} else if(target.classList.contains('btn-side-close')){
				$('button').removeClass('btn-side-close');
				$('button').addClass('btn-side-open');
			}
		});
	$('.detailed').click(function(){
		if ($('.more-opt').hasClass('show')) {
			$('.description').removeClass('hide');
			$('.more-opt').addClass('hide');
		}
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
	// $('.cash').click(() =>{
	// 	$('.credit').css('display', 'none');
	// 	$('.no-credit').css('display', 'block');
	// 	$('.map').removeClass('active-link-down');
	// 	$('.cash').addClass('active-link-down');
		
	// });
	// $('.map').click(() =>{
	// 	$('.credit').css('display', 'block');
	// 	$('.no-credit').css('display', 'none');
	// 	$('.map').addClass('active-link-down');
	// 	$('.cash').removeClass('active-link-down');
	// });
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
        arrows: false,
        variableWidth: true,
        dots: false,
        infinite: false,
        centerPadding: '0px',
        responsive:[
        	{
        		breakpoint: 600,
        		settings:{
        			adaptiveHeight: true,
			        arrows: false,
			        variableWidth: true,
			        dots: false,
			        initialSlide: 0,
			        slidesToShow: 3,
			        slideToScroll: 1,
			        centerPadding: '0px',
        		}
        	}
        ]
  	});
  	$('.slider-main').slick({
      	adaptiveHeight: true,
      	arrows: false,
      	autoplay: true,
      	autoplaySpeed: 3000
  	});
  	
	function flexHeightFix(parent=null, child){
			console.log(parent);
			console.log(child);
			return;
		}
});
function callSliderWithFlexHeightFix(parent, child, params){
	$(parent).slick({
      	arrows: true,
      	initialSlide: 0,
        slidesToShow: 3,
        slideToScroll: 1
	});
	let parentObject = document.querySelector(parent);
	$(child).css('height', parentObject.clientHeight);
}
