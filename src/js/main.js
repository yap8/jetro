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
    const images = this.innerElements.map(item => item.style.backgroundImage)

    const buttons = this.innerElements.map((element, i) => {
      const button = document.createElement('button');
      button.className = `hero-carousel__thumbnails-item${i === 0 ? ' hero-carousel__thumbnails-item--active' : ''}`
      button.style.backgroundImage = images[i]
      
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
