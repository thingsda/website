export const reducer = (state, action) => {
  switch (action.type) {
    case 'NEXT_IMAGE':
      return {
        ...state,
        currentImageIndex:
          state.currentImageIndex >= state.numberOfImages - 1
            ? 0
            : state.currentImageIndex + 1,
      }
  }
}

const Carousel = () => {
  const sliders = document.querySelectorAll('[data-image-slider]')
  for (const slider of sliders) {
    const images = Array.prototype.slice.call(
      slider.querySelectorAll('[data-image-slider] > *'),
    )
    const initialIndex = images.findIndex(
      el => el.getAttribute('data-image-slider-hide') === null,
    )
    let state = {
      currentImageIndex: initialIndex,
      numberOfImages: images.length,
    }
    setInterval(() => {
      state = reducer(state, { type: 'NEXT_IMAGE' })
      render()
    }, Number(slider.getAttribute('data-image-slider-interval')) || 2000)

    function render() {
      for (var i = 0; i < images.length; ++i) {
        if (i !== state.currentImageIndex) {
          images[i].setAttribute('data-image-slider-hide', '')
        } else {
          images[i].removeAttribute('data-image-slider-hide')
        }
      }
    }
  }
}

export default Carousel
