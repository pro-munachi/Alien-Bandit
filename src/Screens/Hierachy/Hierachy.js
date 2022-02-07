import React from 'react'
import { Carousel } from 'react-responsive-carousel'

import NavBar from '../../components/drawer-buy/Drawer'
import { HierachyStyle } from './style'
import banditgif from '../../assets/images/E (5).png'
import prime from '../../assets/images/prime.png'
import harpies from '../../assets/images/harpies.png'
import yuries from '../../assets/images/yuries.png'
import coreeshis from '../../assets/images/coreeshi.png'
import dhuurs from '../../assets/images/dhuurs.png'
import krogins from '../../assets/images/krogins.png'
import shadows from '../../assets/images/shadows.png'
import vraals from '../../assets/images/vraals.png'
import deforms from '../../assets/images/deforms.png'
import Footer from '../../components/footer/Footer'

// bands
import hunter from '../../assets/images/9192.png'
import grisha from '../../assets/images/1092.png'
import shadow from '../../assets/images/186.png'
import luna from '../../assets/images/35.png'
import pope from '../../assets/images/818.png'
import overlord from '../../assets/images/3536.png'
import bane from '../../assets/images/33.png'
import erebus from '../../assets/images/9872.png'
import nebula from '../../assets/images/713.png'
import chuck from '../../assets/images/165.png'
import ojay from '../../assets/images/2720.png'
import kingsman from '../../assets/images/3539.png'
import duke from '../../assets/images/7132.png'

const items = [
  {
    img: yuries,
    name: 'Yuries',
    about:
      'They tend to be one of the most powerful species, in terms of there character card display and possessing a horn. They can easily be identified by the S badge on their suits and are 999 in number.',
  },
  {
    img: coreeshis,
    name: 'Coreeshi',
    about:
      ' Just like the Yuries but then with a robe of unity that enables them to teleport and change forms. They value gold and the shiny things of nature, having a total number of 999 bandits.',
  },
  {
    img: dhuurs,
    name: 'Dhuurs',
    about:
      ' Mostly referred to as the merchants or to some pipers, possess a smoke and vapor fire control character card feature. They can hardly be found and some times tend to disappear having a total number of 999 bandits.',
  },
  {
    img: krogins,
    name: 'Krogins',
    about:
      'They can easily be identified by the hallow and necklace they put on, they believe they are radiant and glow blinding lights. Special powers and also a good population 0f 1,999 bandits.',
  },
  {
    img: harpies,
    name: 'Harpies',
    about:
      '  Having a unique feature that enables them to fly and possessing strong claws that helps it to scavenge and steal items with a lot of force and speed. They are mostly found in the No Gas Zone with a population of 999 bandits',
  },
  {
    img: vraals,
    name: 'Vraals',
    about:
      ' Robe like the coreeshi and most likely in appearance but with no set of horns, they reside mainly at the Lower Ground and have been involved in series of crime cases in the cryptoverse with a population of 999 bandits.',
  },
  {
    img: shadows,
    name: 'Shadows',
    about:
      ' Most bank robberies and breaking out jail free were conducted by this Genz, they are found to be in possession of different weapon, vessels and machines. They are seen in night clubs, casinos and the black market but are difficult to get hold of because they have this strong bond and connection. Highly styled in Alien wears ink with a total population of 2,999 bandits, difficult but yet easy to capture and hard to keep an eye on.',
  },
  {
    img: deforms,
    name: 'Deforms',
    about:
      ' These are the supper rare bandits with a different set of unique features of their own, it’s a one of one and really difficult to find. The bounty price on their heads is high due to their lack of availability.',
  },
]

const bandits = [
  {
    img: hunter,
    name: 'Hunter-Creator-#9192',
  },
  {
    img: grisha,
    name: 'Grisha-Web developer-#1092',
  },
  {
    img: shadow,
    name: 'Shadow-Graphics Designer-#186',
  },
  {
    img: luna,
    name: 'Luna-EXP-#35',
  },
  {
    img: pope,
    name: 'Pope-Discord-#818',
  },
  {
    img: overlord,
    name: 'De Overlord-Instagram-#3536',
  },
  {
    img: bane,
    name: 'Bane-Telegram-#33',
  },
  {
    img: erebus,
    name: 'Erebus-Twitter-#9872',
  },
  {
    img: nebula,
    name: 'Nebula-CPM-#713',
  },
  {
    img: chuck,
    name: 'Argent-ADM-#165',
  },
  {
    img: ojay,
    name: 'OJay-BMB-#2720',
  },
  {
    img: kingsman,
    name: 'Kingsman-WA-#3539',
  },
  {
    img: duke,
    name: 'Duke-BIIH-#7132',
  },
]

const Hierachy = () => {
  return (
    <HierachyStyle>
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

      <h2 className='bands'>Band Members</h2>

      <div className='slider'>
        <Carousel>
          {bandits.map((item) => (
            <div key={item.name}>
              <img src={item.img} className='pic' alt={item.name} />
              <p className='legend'>{item.name}</p>
            </div>
          ))}
        </Carousel>
      </div>

      <div className='top'>
        <h2 className='h2'>HIERACHY</h2>
        <p>
          Each Alien Bandit has a unique and functional feature that
          distinguishes the NFT from the other bandits in the collection. Traits
          and generational hereditary features are being passed down to a
          different age. Eyes, mouths, caps, pipes, hairs, suits, wings and many
          more.
        </p>

        <p>
          Only bandit holders stand a chance to access the <span>ARCHIVE</span>,
          holder will have to sign into their <span>METAMASK</span> wallet to
          gain full access to get rewarded when you win.
        </p>
      </div>

      <div className='second'>
        <div className='second-top'>
          <div className='top1'>
            <img src={prime} alt='bandit' />
          </div>
          <div className='top2'>
            <h2>Prime</h2>
            <p>
              The leader of the revolution and Grand commander of the outlaws,
              he is the Alpha in which his traits were used to clone 9,999
              bandits including the Deforms in his LAB. He was later captured
              and held captive for 500 Caesars by the Corps Members Board CMB,
              where he served a long term. He was later declared wanted after
              successfully breaking out of jail with the help of the DEFORMS. A
              bounty of 10 Eth was placed on his head to whomever can capture
              him dead or alive in the cryptoverse. The clone’s bandits are of
              different features and Genz.
            </p>
          </div>
        </div>

        <h2 className='h2'> CLONE GENZ AND FEATURES</h2>

        <div>
          {items.map((item) => (
            <div className='second-top' key={item.name}>
              <div className='top1'>
                <img src={item.img} alt='bandit' />
              </div>
              <div className='top2'>
                <h2>{item.name}</h2>
                <p>{item.about}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: 'black' }}>
        <Footer />
      </div>
    </HierachyStyle>
  )
}

export default Hierachy
