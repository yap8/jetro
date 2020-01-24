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

// Burger menu
{
  const toggleButton = document.querySelector('#nav-toggle-button')
  const list = document.querySelector('#nav-list')

  const toggleShowList = () => {
    list.classList.toggle('nav__list--active')
  }

  toggleButton.addEventListener('click', toggleShowList)
}

// Hero carousel
{
  Siema.prototype.addPagination = function() {
    const buttonsWrapper = document.querySelector('#hero-carousel-thumbnails')
    const images = this.innerElements.map(item => item.querySelector('img').getAttribute('src'))

    const buttons = this.innerElements.map((element, i) => {
      const button = document.createElement('button');
      button.className = `hero-carousel__thumbnails-item${i === 0 ? ' hero-carousel__thumbnails-item--active' : ''}`
      button.style.backgroundImage = `url(${images[i]})`
      
      button.addEventListener('click', () => this.goTo(i))
      
      return button
    })
    
    buttons.forEach(button => {
      buttonsWrapper.appendChild(button)
    })
  }

  Siema.prototype.activateDots = function(buttons, index) {
    Array.from(buttons).forEach(button => button.classList.remove('hero-carousel__thumbnails-item--active'))
    buttons[index].classList.add('hero-carousel__thumbnails-item--active')
  }

  const carousel = new Siema({
    selector: '#hero-carousel-list',
    loop: true,
    onChange: function() {
      const buttons = document.querySelector('#hero-carousel-thumbnails').children
      this.activateDots(buttons, this.currentSlide)
    }
  })

  const prevButton = document.querySelector('#hero-carousel-button-prev')
  const nextButton = document.querySelector('#hero-carousel-button-next')

  prevButton.addEventListener('click', () => carousel.prev())
  nextButton.addEventListener('click', () => carousel.next())

  carousel.addPagination()
}
