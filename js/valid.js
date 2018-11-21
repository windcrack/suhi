let main = document.querySelectorAll('.main'),
	noMain = document.querySelectorAll('.no-main'),
	body = document.querySelector('body'),
	btn1 = document.querySelector('.link-credits-one'),
	btn2 = document.querySelector('.link-credits-two'),
	chek1, chek2, chek3, chek4, chek5;
btn1.disabled = true;
btn1.style.opacity = 0.5;
btn1.style.cursor = "not-allowed";
btn2.disabled = true;
btn2.style.opacity = 0.5;
btn2.style.cursor = "not-allowed";
let mainCheck = function(){
	chek1 = main[0].value;
	chek2 = main[1].value;
	chek3 = main[2].value;
	chek4 = main[3].value;
	chek5 = main[4].value;
	if (chek1 != "" && chek2 != "" && chek3 != "" && chek4 != "" && chek5 != "") {
		btn1.disabled = false;
		btn1.style.opacity = 1;
		btn1.style.cursor = "pointer";
		btn2.disabled = false;
		btn2.style.opacity = 1;
		btn2.style.cursor = "pointer";
	}else{
		btn1.disabled = true;
		btn1.style.opacity = 0.5;
		btn1.style.cursor = "not-allowed";
		btn2.disabled = true;
		btn2.style.opacity = 0.5;
		btn2.style.cursor = "not-allowed";
	}
}
let nomainCheck = function(){
	chek1 = noMain[0].value;
	chek2 = noMain[1].value;
	console.log(chek2);
	if (chek1 != ""){
		btn1.disabled = false;
		btn1.style.opacity = 1;
		btn1.style.cursor = "pointer";
		btn2.disabled = false;
		btn2.style.opacity = 1;
		btn2.style.cursor = "pointer";
	}else{
		btn1.disabled = true;
		btn1.style.opacity = 0.5;
		btn1.style.cursor = "not-allowed";
		btn2.disabled = true;
		btn2.style.opacity = 0.5;
		btn2.style.cursor = "not-allowed";
	}
}
body.addEventListener('input', e =>{
	let target = e.target;
	if (target.classList.contains('hous')) {
		target.value = target.value.replace(/[^0-9]/, "");
	}
	if (target.classList.contains('appt')) {
		target.value = target.value.replace(/[^0-9]/, "");
	}
	if (target.classList.contains('main')) {
		mainCheck();
	}
	if (target.classList.contains('no-main')) {
		nomainCheck();
	}
});