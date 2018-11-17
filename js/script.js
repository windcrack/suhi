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
	$('.show').click(function(){
		$(this).parent('.description').addClass('moret');
	});
	$('.button-open').click(function(){
		$('.side-menu').show();
		$('.button-open').hide();
	});
	$('.button-close').click(function(){
		$('.side-menu').hide();
		$('.button-open').show();
	});
});