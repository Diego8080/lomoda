'use strict';

const headerCityButton = document.querySelector('.header__city-button');

headerCityButton.textContent = localStorage.getItem('lomoda-location') || 'Ваш город:';


headerCityButton.addEventListener('click', () => {
	const city = prompt('Укажите ваш город?');
	headerCityButton.textContent = city;
	localStorage.setItem('lomoda-location', city);
});

//Modal window

const subheaderCart = document.querySelector('.subheader__cart');
const cartOverlay = document.querySelector('.cart-overlay');

const cartModalOpen = () => {
	cartOverlay.classList.add('cart-overlay-open');
};

subheaderCart.addEventListener('click', cartModalOpen);

const cartModalClose = () => {
	cartOverlay.classList.remove('cart-overlay-open');
};

cartOverlay.addEventListener('click', event => {
	const target = event.target;
if (target.matches('.cart__btn-close') || target.matches('.cart-overlay')) {
	cartModalClose();
}

});