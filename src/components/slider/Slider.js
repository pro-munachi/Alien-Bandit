import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

import { SliderStyle } from './style'
import door from '../../assets/images/door.png'

const Sliders = () => {
  return (
    <SliderStyle>
      <div className='slider'>
        <Carousel>
          <div>
            <img src={door} />
            <p className='legend'>Legend 1</p>
          </div>
          <div>
            <img src={door} />
            <p className='legend'>Legend 2</p>
          </div>
          <div>
            <img src={door} />
            <p className='legend'>Legend 3</p>
          </div>
        </Carousel>
      </div>
    </SliderStyle>
  )
}

export default Sliders
