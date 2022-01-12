import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

import { SliderStyle } from './style'
import bandit1 from '../../assets/images/E (1).png'
import bandit2 from '../../assets/images/E (2).png'
import bandit3 from '../../assets/images/E (3).png'
import bandit4 from '../../assets/images/E (4).png'
import bandit5 from '../../assets/images/E (5).png'
import bandit6 from '../../assets/images/E (6).png'
import bandit7 from '../../assets/images/E (7).png'
import bandit8 from '../../assets/images/E (8).png'
import bandit9 from '../../assets/images/E (9).png'
import bandit10 from '../../assets/images/E (10).png'

const items = [
  {
    img: bandit10,
    name: 'bandit 1',
  },
  {
    img: bandit9,
    name: 'bandit 2',
  },
  {
    img: bandit8,
    name: 'bandit 3',
  },
  {
    img: bandit7,
    name: 'bandit 4',
  },
  {
    img: bandit6,
    name: 'bandit 5',
  },
  {
    img: bandit5,
    name: 'bandit 6',
  },
  {
    img: bandit4,
    name: 'bandit 7',
  },
  {
    img: bandit3,
    name: 'bandit 8',
  },
  {
    img: bandit2,
    name: 'bandit 9',
  },
  {
    img: bandit1,
    name: 'bandit 10',
  },
]

const Sliders = () => {
  return (
    <SliderStyle>
      <div className='slider'>
        <Carousel>
          {items.map((item) => (
            <div key={item.name}>
              <img src={item.img} className='pic' alt={item.name} />
              <p className='legend'>{item.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </SliderStyle>
  )
}

export default Sliders
