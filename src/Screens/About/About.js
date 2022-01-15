import React from 'react'

import NavBar from '../../components/drawer-buy/Drawer'
import banditgif from '../../assets/images/E (8).png'

const About = () => {
  return (
    <About>
      <NavBar />

      <div className='image'>
        <div className='image-text'>
          <h1>This is the Alien Bandit's</h1>
          <a
            href='https://opensea.io/collection/alien-bandits'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button> Buy on Opensea</button>
          </a>
        </div>
        <div className='image-img'>
          <img src={banditgif} alt='bandit' />
        </div>
      </div>
    </About>
  )
}

export default About
