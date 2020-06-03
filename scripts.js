'use strict';


// Получим сгенерированные из админки значения
var dataFromSpan = document.getElementById('countDownDate');
var dateValue = dataFromSpan.getAttribute('data-value');
var expValue = dataFromSpan.getAttribute('data-exp');

var zero = 0;

// Установим дату, до которой будем откручивать счётчик
var countDownDate = new Date(dateValue).getTime();

// Обновляем счётчик каждую секунду через setInterval
var x = setInterval(function() {

	// Получим дату и время сейчас
	var now = new Date().getTime();

	// Получим разницу во времени
	var distance = countDownDate - now;

	// Получим значения для дальнейшего вывода
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Вставим значения 
	document.getElementById("cdt_d").innerHTML = days;
	document.getElementById("cdt_h").innerHTML = hours;
	document.getElementById("cdt_m").innerHTML = minutes;
	document.getElementById("cdt_s").innerHTML = seconds;

	// Если время вышло - отдадим инфу, что время вышло
	if (distance < 0) {

		clearInterval(x);
		document.getElementById("cdt_d").innerHTML =
		document.getElementById("cdt_h").innerHTML =
		document.getElementById("cdt_m").innerHTML =
		document.getElementById("cdt_s").innerHTML = zero;
	
		// document.getElementById("cdt").innerHTML = expValue;
	}
}, 1000);


const buttons = document.querySelectorAll('.trigger[data-modal-trigger]');

for(let button of buttons) {
	modalEvent(button);
}

function modalEvent(button) {
	button.addEventListener('click', () => {
		const trigger = button.getAttribute('data-modal-trigger');
		const modal = document.querySelector(`[data-modal=${trigger}]`);
		const contentWrapper = modal.querySelector('.content-wrapper');
		const close = modal.querySelector('.close');

		close.addEventListener('click', () => modal.classList.remove('open'));
		modal.addEventListener('click', () => modal.classList.remove('open'));
		contentWrapper.addEventListener('click', (e) => e.stopPropagation());

		modal.classList.toggle('open');
	});
}
