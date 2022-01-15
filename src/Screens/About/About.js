import React from 'react'

import NavBar from '../../components/drawer-buy/Drawer'
import banditgif from '../../assets/images/E (9).png'
import Footer from '../../components/footer/Footer'
import { AboutStyle } from './style'

const About = () => {
  return (
    <AboutStyle>
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

      <div className='text'>
        <h2>What’s an NFT?</h2>

        <p>
          Alien Bandits is a collection of 10,000 bandits NFT ready to be
          captured, they live on the polygon block chain. The bounty price on
          each bandit increases as the activities on it and your membership
          doubles with new features. Get exclusive access to our{' '}
          <span>ARCHIVE</span> when you are a bandit holder (Marshall, Sheriff
          and General Bar).
        </p>

        <p>
          The prices for each bandit are equal with exception to our super rare
          NFTs such as Prime and the upper divisions. Prime the leader of the
          revolution and the conqueror of different <span>CRYPTOVERSE</span>.
        </p>

        <p>
          The Alien Bandits NFT cost 0.004Eth as our starting floor price and
          would definitely increase as we go about our activities and strictly
          adhering to our <span>CAMPAIGN MAP</span>.
        </p>

        <p>
          A thousand Alien Bandits have been held back and would be used for our
          Airdrop giveaway to our lucky sheriff Holder of a bandit
        </p>
      </div>

      <div className='text'>
        <h2>Do we have a Sponsor?</h2>

        <p>
          We welcome partnership, potential investors and collaborators that
          share the same vision and insight in taking the project to a higher
          ground. Currently being backed by Alien Wears Ink, media influencers
          and small-time investors who have collectively shared interest in
          backing the Campaign. More to come...
        </p>
      </div>

      <div className='text'>
        <h2>Reasons you should buy a Bandit</h2>

        <p>
          Unlike other NFT projects that tend to have a short life span, this is
          a revolution and a project that tends to help build the NFT community
          hereby letting individuals eat their cakes and have it. By capturing a
          bandit for as low as 0.004 Eth you tend to get a boost in your initial
          amount you bought the NFT hereby sustaining a good liquidity and
          promotion crusade to get our campaign map fulfilled with every bit of
          it achieved. Here’s a chance to get into the next big thing, it wont
          definitely be a smooth ride but then tighten up your seatbelts and get
          ready to tour the cryptoverse while flipping and swapping an Alien
          Bandit. Get a chance to participate in our giveaways and airdrops,
          Join the campaign and let’s capture as much bandits as possible.
          Follow our socials to stay updated!!
        </p>
      </div>

      <div className='text'>
        <h2>Benefits and Profits</h2>

        <p>
          Different means have been derived to make our esteem community benefit
          from this aside swapping and resales. In our upcoming project where
          Corps members can participate in a game and win Corps and BNB directly
          sent to there wallet, long term Corps members get an airdrop of our
          yet to be released token to give them a greater edge and profitable
          value increases. With all this in place, Adam Corps members get
          bonuses and Ethereum.
        </p>
      </div>

      <div className='text'>
        <h2>Giveaway and Airdrops</h2>

        <p>
          Follow and Join our Channels to stay updated and win free NFTs and
          Corps. Every active week we disburse free NFTs to members of our
          community, our iconic suit would also be shipped to winners of our LAB
          test from Alien Wears Ink.
        </p>
      </div>

      <div style={{ background: 'black' }}>
        <Footer />
      </div>
    </AboutStyle>
  )
}

export default About
