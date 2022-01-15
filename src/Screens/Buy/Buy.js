import React from 'react'

import { BuyStyle } from './style.js'
import banditgif from '../../assets/images/E (8).png'
import Footer from '../../components/footer/Footer'
import NavBar from '../../components/drawer-buy/Drawer'
import Sliders from '../../components/slider/Slider.js'

const Buy = () => {
  return (
    <BuyStyle>
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

      <div className='slider'>
        <Sliders />
      </div>

      <div className='map-bottom'>
        <h2>How to Purchase an Alien Bandit</h2>
        <div>
          <h3>01</h3>
          <p>
            Click on this Opensea
            <a
              href='https://opensea.io/collection/alien-bandits'
              target='_blank'
              rel='noopener noreferrer'
            >
              link
            </a>
            .
          </p>
        </div>
        <div>
          <h3>02</h3>
          <p>
            Create an account with Opensea and connect your preferred wallet
            (e.g. metamask).
          </p>
        </div>
        <div>
          <h3>03</h3>
          <p>
            Make sure your account is connected then click on the
            <span>Buy Now</span> option.
          </p>
        </div>
        <div>
          <h3>04</h3>
          <p>Complete and sign the smart contract to complete transaction.</p>
        </div>
        <div>
          <h3>05</h3>
          <p>
            You can import collectible or NFT on your wallet to view the NFT if
            you can’t find it.
          </p>
        </div>
      </div>

      <div className='buy-but'>
        <h2>Buy a Bandit</h2>
        <p>
          The initial sale has sold out. To get your Alien Bandit, check out the
          collection on OpenSea.
        </p>

        <a
          href='https://opensea.io/collection/alien-bandits'
          target='_blank'
          rel='noopener noreferrer'
        >
          BUY A BANDIT ON OPEN SEA
        </a>
      </div>

      <div className='footer'>
        <Footer />
      </div>
    </BuyStyle>
  )
}

export default Buy
