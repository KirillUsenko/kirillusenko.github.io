$(document).ready(() => {
	let time = 1,
		money = 500000
	result = 2500000

	$('.burger').click(() => {
		document.querySelector('.burger').classList.toggle('burger_active')
		document
			.querySelector('.burger-menu')
			.classList.toggle('burger-menu_active')
	})

	$('.burger-menu__item').click(() => {
		document.querySelector('.burger').classList.toggle('burger_active')
		document
			.querySelector('.burger-menu')
			.classList.toggle('burger-menu_active')
	})

	$('.calculator-slider__line').on('change', e => {
		if (e.target.getAttribute('id') === 'startMoney') {
			money = e.target.value
		} else {
			time = e.target.value
		}
		result = (time * money) / 1.5

		$('.calculator-form__profit span').html(
			`${Number(result).toLocaleString()} рублей`
		)
	})

	$('form').submit(e => {
		e.preventDefault()
	})

	$('.form__inner').submit(e => {
		emailjs.sendForm('service_3uh69d1', 'template_xvgxw8i', e.target).then(
			() => {
				alert('Заявка отправлена!')
			},
			error => {
				alert('Произошла ошибка!')
			}
		)
	})

	$('a[href*="#"], button[href*="#"]').click(e => {
		document.querySelector(e.target.getAttribute('href')).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
		return false
	})

	$('.opinions__slider').owlCarousel({
		nav: true,
		dots: true,
		loop: true,
		responsive: {
			0: {
				items: 1,
				margin: 20,
			},
			1300: {
				items: 2,
				margin: 50,
			},
		},
	})
})
