import React from 'react'

import { WelcomeStyle } from './style'
import logo from '../../assets/images/ALIEN1.png'
import portion from '../../assets/images/portion.png'
import wanted from '../../assets/images/wanted.png'
import reward from '../../assets/images/reward.png'

let items = [
  {
    img: logo,
    name: 'logo',
    text: '10,000 Alien Bandits token',
  },
  {
    img: portion,
    name: 'portion',
    text: 'Different hierarchies and features',
  },
  {
    img: wanted,
    name: 'wanted',
    text: 'Each bandit carries a bounty on its head',
  },
  {
    img: reward,
    name: 'reward',
    text: 'Profits are realized when you take a bandit to the station',
  },
]

const Welcome = () => {
  return (
    <WelcomeStyle>
      <div className='container'>
        <div className='text'>
          <h2>Welcome to the corp</h2>
          <p>
            The prices for each bandit are equal with exception to our super
            rare Nfts such as Prime and the upper divisions. Prime the leader of
            the revolution and the conqueror of different ALIENVERSE. The Alien
            Bandits NFT cost 0.004Eth as our starting floor price and would
            definitely increase as we go about our activities and strictly
            adhering to our CAMPAIGN MAP. A thousand Alien Bandits have been
            held back and would be used for our Airdrop giveaway to our lucky
            sheriff Holder of a bandit.
          </p>
        </div>
        <div className='welcome-image'>
          {items.map((item) => (
            <div key={item.name}>
              <img src={item.img} alt={item.name} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </WelcomeStyle>
  )
}

export default Welcome
