import React from 'react'

import { MapStyle } from './style'

const Map = () => {
  return (
    <MapStyle>
      <div className='map-top'>
        <h2>Campaign Map</h2>
        <p>
          The Campaign map guides our every move and what we plan to accomplish
          as we go on, we are in this for a long haul. Setting goals and
          percentage sales target to unlock each level
        </p>
      </div>

      <div className='map-bottom'>
        <div>
          <h3>01</h3>
          <p>
            We launch in all district, creating awareness and getting a lot more
            audience to get indulge In the project and increasing our activities
            in capturing wanted bandits.
          </p>
        </div>
        <div>
          <h3>02</h3>
          <p>
            Once we attain 20% capture of bandits, we airdrop bandits to our
            esteemed holders to boost the morals and keep the campaign moving
            forward.
          </p>
        </div>
        <div>
          <h3>03</h3>
          <p>
            Alien bandits launch its YouTube channel and send gift items to
            corps member including our iconic suit clothing.
          </p>
        </div>
        <div>
          <h3>04</h3>
          <p>
            Corps member gets a chance to own a character in our upcoming Corps
            member project and be able to unlock the door to the archive.
          </p>
        </div>
        <div>
          <h3>05</h3>
          <p>
            Launch and sales of comic book project to explain the back graphed
            storyline behind the alien bandits and its origin. This will be made
            available when we capture 60% bandits.
          </p>
        </div>
        <div>
          <h3>06</h3>
          <p>
            Attain 80% Capture and Ethereum traded above 200 and we proceed to
            release our first online gaming project where cryptocurrency can be
            won using Corp, our official token.
          </p>
        </div>
        <div>
          <h3>07</h3>
          <p>Reward members with 10,000 Corp during the presale.</p>
        </div>
        <div>
          <h3>08</h3>
          <p>
            Secure our partnership program with our clothing line to release our
            iconic suit and other gears. Only accessible to corps member.
          </p>
        </div>
      </div>

      <div className='map-top'>
        <h2>Utility</h2>
      </div>

      <div className='map-bottom'>
        <div>
          <h3>01</h3>
          <p>Access to our Archive</p>
        </div>
        <div>
          <h3>02</h3>
          <p>Initiation into our Corp Members Board</p>
        </div>
        <div>
          <h3>03</h3>
          <p>Access to our upcoming projects</p>
        </div>
        <div>
          <h3>04</h3>
          <p>Access to our yet to launch token</p>
        </div>
        <div>
          <h3>05</h3>
          <p>Access to exclusive Whitelist Nfts</p>
        </div>
        <div>
          <h3>06</h3>
          <p>Access to our raffle draws in the lab</p>
        </div>
      </div>

      <div className='map-top'>
        <h2>Navigator</h2>
        <p style={{ textAlign: 'center' }}>
          This will help Locate rare Bandit's that are really hard to find.
        </p>
      </div>

      <div className='map-top'>
        <h2>Lab</h2>
        <p style={{ textAlign: 'center' }}>
          Since they are all Clones of the Prime, the lab can be used to
          generate Bandit's and modify to be rarer than others. Introducing Rare
          Traits, that be added and listed.
        </p>
      </div>

      <div className='map-top'>
        <h2>Alienverse</h2>
        <p style={{ textAlign: 'center' }}>
          So we are basically Creating our own Verse..To accommodate all our
          changes and creations.
        </p>
      </div>
    </MapStyle>
  )
}

export default Map
