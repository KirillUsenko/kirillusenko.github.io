const prices = document.querySelectorAll('.services-prices')
const hoverClass = 'services-prices_hover'

const clearHovers = () =>
	prices.forEach(item => {
		item.classList.remove(hoverClass)
	})

prices.forEach(item => {
	item.addEventListener('click', () =>
		window.open(item.getAttribute('to'), '_self')
	)
	item.addEventListener('mouseenter', () => {
		clearHovers()
		item.classList.add(hoverClass)
	})
})
