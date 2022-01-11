import React from 'react'

import { ArchiveStyle } from './style'
import door from '../../assets/images/door.png'

const Archive = () => {
  return (
    <ArchiveStyle>
      <h2>The Archive</h2>
      <div>
        <p>
          In the Archive Treasures, machines, weapons, gears and precious stones
          are hidden away by the prime, it serves as a secret room where stolen
          items are kept to increase the worth of the prime figure. This is
          exclusively available to only Marshall 2 and above in the chain. This
          will be in operation once we attain 50% Sales of traded Ethereum. Get
          a chance to get treasures and rewards in the archive with rare items,
          weapon, coins when you win a chest in the archive.
        </p>
        <img src={door} alt='door' />
      </div>
    </ArchiveStyle>
  )
}

export default Archive
