import React from 'react'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

import bandit1 from '../../assets/images/E (1).png'
import bandit2 from '../../assets/images/E (2).png'
import bandit3 from '../../assets/images/E (3).png'
import bandit4 from '../../assets/images/E (4).png'
import bandit5 from '../../assets/images/E (5).png'
import bandit6 from '../../assets/images/E (6).png'
import bandit7 from '../../assets/images/E (7).png'
import bandit8 from '../../assets/images/E (8).png'
import { HomeStyle } from './style.js'
import banditgif from '../../assets/images/aliengif.gif'
import Footer from '../../components/footer/Footer'
import NavBar from '../../components/drawer/Drawer'
import Welcome from '../../components/welcome/Welcome'
import Archive from '../../components/archive/Archive'
import Sliders from '../../components/slider/Slider'
import Map from '../../components/map/Map'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

let itemData = [bandit1, bandit2, bandit3, bandit4]
let teamData = [bandit5, bandit6, bandit7, bandit8]

const Home = () => {
  return (
    <HomeStyle>
      <NavBar />
      <div className='image'>
        <div className='image-text'>
          <h1>Welcome to Alien Bandit's</h1>
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

      <div className='second'>
        <div className='second-top'>
          <div className='top1'>
            <img src={bandit2} alt='bandit' />
          </div>
          <div className='top2'>
            <h2>10,000 Bandits</h2>
            <p>
              Alien Bandits is a collection of 10,000 bandits NFT ready to be
              captured, they live on the polygon block chain. The bounty price
              on each bandit increases as the activities on it and your
              membership doubles with new features. Get exclusive access to our
              ARCHIVE when you are a bandit holder (Marshall, Sheriff and
              General Bar).
            </p>
          </div>
        </div>
        <div className='background' />

        <div className='second-bottom'>
          <div className='bottom1'>
            <img src={bandit3} alt='bandit' />
          </div>

          <div className='bottom2'>
            <img src={bandit4} alt='bandit' />
          </div>
        </div>
      </div>

      <div className='welcome'>
        <Welcome />
      </div>

      <div className='map'>
        <Map />
      </div>

      <div className='archive'>
        <Archive />
      </div>
    </HomeStyle>
  )
}

export default Home
