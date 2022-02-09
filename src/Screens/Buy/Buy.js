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
          <h1>This is the Alien Bandits</h1>
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

      <div className='how'>
        <div className='map-bottom'>
          <h2>How to Capture an Alien Bandit</h2>
          <div>
            <h3>01</h3>
            <p>
              Purchase USD.
              <span style={{ fontStyle: 'italic' }}>
                Note: You can buy Matic from Binance directly and send to your
                Metamask
              </span>
              .
            </p>
          </div>
          <div>
            <h3>02</h3>
            <p>
              Send to Kucoin account before doing that, click
              <a
                href='https://www.kucoin.com/ucenter/signup'
                target='_blank'
                rel='noopener noreferrer'
              >
                here
              </a>{' '}
              to sign in.
            </p>
          </div>

          <div>
            <h3>03</h3>
            <p>
              Convert to Matic And send Matic to your Metamask Wallet.
              <span style={{ fontStyle: 'italic' }}>
                Note: You must have added or switched to the Polygon mainnet on
                your Metamask
              </span>
              .
              <a
                href='https://quickswap.exchange/#/swap'
                target='_blank'
                rel='noopener noreferrer'
              >
                Click here
              </a>{' '}
              to switch on Pc.
            </p>
          </div>

          <div>
            <h3>04</h3>
            <p>
              Wrap the Matic on your Metamask wallet by clicking on the Import
              token then paste to add custom token.{' '}
              <span style={{ fontStyle: 'italic' }}>
                Wrapped ETH address: 0x7ceb23fd6bcadd59e62ac25578270cff1b9f619
              </span>
              .
            </p>
          </div>

          <div>
            <h3>05</h3>
            <p>
              Paste the above address Click on this
              <a
                href='https://opensea.io/collection/alien-bandits'
                target='_blank'
                rel='noopener noreferrer'
              >
                link
              </a>{' '}
              to capture a bandit, Navigate and capture your preferred Bandit by
              clicking on Buy now then sign to complete transaction.{' '}
              <span style={{ fontStyle: 'italic' }}>
                Note: This can be achieved after Connecting your wallet to
                opensea.io{' '}
              </span>
              .
            </p>
          </div>
        </div>
      </div>

      <div className='buy-but'>
        <h2>Buy a Bandit</h2>
        <p>
          The initial sale will start on Feb 1st. To get your Alien Bandit,
          check out the collection on OpenSea.
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
