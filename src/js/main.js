// const toggleNav = () => {
// 	const button = document.querySelector('.header__toggle-navigation');
// 	const list = document.querySelector('.header__navigation');

// 	button.addEventListener('click', () => {
// 		list.classList.toggle('header__navigation--active');
// 	});
// }
// toggleNav();

// const carousel = () => {
// 	const slides = document.querySelectorAll('.hero__slide');

// 	const prev = '<svg class="hero__prev-icon"><use xlink:href="#icon-arrow"></use></svg>';
// 	const next = '<svg class="hero__next-icon"><use xlink:href="#icon-arrow"></use></svg>';
	
// 	const owl = $(".hero__slider");
	
// 	owl.owlCarousel({
// 		items: 1,
// 		loop: true,
// 		nav: true,
// 		navContainerClass: 'hero__arrows',
// 		navClass: ['hero__prev', 'hero__next'],
// 		navText: [prev, next],
// 		dotsClass: 'hero__thumbnails' ,
// 		dotClass: 'hero__thumbnail',
// 	});
	
// 	const thumbnails = document.querySelectorAll('.hero__thumbnail');
	
// 	thumbnails.forEach((thumbnail, i) => {
// 		let image = slides[i].getAttribute('style');
// 		image = image.replace('background-image: ', '');
// 		thumbnail.style.backgroundImage = image;
// 	});
// }
// carousel();
