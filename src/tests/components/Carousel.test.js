import { reducer } from '../../components/Carousel'

test('Going to the next image yields the next image', () => {
  let state = { currentImageIndex: 0, numberOfImages: 2 }

  state = reducer(state, { type: 'NEXT_IMAGE' })

  expect(state.currentImageIndex).toEqual(1)
})

test('After reaching the last image it starts again', () => {
  let state = { currentImageIndex: 1, numberOfImages: 2 }

  state = reducer(state, { type: 'NEXT_IMAGE' })

  expect(state.currentImageIndex).toEqual(0)
})
