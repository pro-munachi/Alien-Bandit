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
import './home.css'
import Footer from '../../components/footer/Footer'

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
    <Box>
      <div className='home'></div>
      <Box sx={{ width: '90%', margin: 'auto' }}>
        <Box container sx={{ margin: '20px 0' }}>
          <div className='home-first'>
            <Box className='buygrid'>
              <Typography variant='h4' sx={{ marginTop: 3 }}>
                Welcome to the Alien Bandit club
              </Typography>
              <Typography>
                BAYC is a collection of 10,000 Bored Ape NFTs—unique digital
                collectibles living on the Ethereum blockchain. Your Bored Ape
                doubles as your Yacht Club membership card, and grants access to
                members-only benefits, the first of which is access to THE
                BATHROOM, a collaborative graffiti board. Future areas and perks
                can be unlocked by the community through roadmap activation.
              </Typography>
            </Box>
            <Box
              item
              xs={6}
              md={4}
              sx={{ backgroundColor: 'black' }}
              className='buygrid'
            >
              <>
                <ImageList cols={2} className='imagelist'>
                  {itemData.map((item) => (
                    <ImageListItem key={item}>
                      <img
                        src={`${item}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={'bandits'}
                        loading='lazy'
                        style={{ borderRadius: '10px' }}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </>
            </Box>
          </div>
          <div className='home-first1'>
            <Box item xs={6} md={8} className='buygrid'>
              <Item
                sx={{
                  backgroundColor: 'black',
                  color: 'white',
                  textAlign: 'left',
                }}
              >
                <Typography
                  variant='h4'
                  sx={{ color: '#c0262d', fontStyle: 'italic' }}
                >
                  FAIR DISTRIBUTION
                </Typography>
                <Typography variant='h5'>
                  (BONDING CURVES ARE A PONZI)
                </Typography>
                <Typography>
                  There are no bonding curves here. Buying a Bored Ape costs
                  0.08 ETH. There are no price tiers; BAYC membership costs the
                  same for everyone.
                </Typography>
              </Item>
            </Box>
            <Box item xs={6} md={4} className='buygrid'>
              <Item
                sx={{
                  backgroundColor: 'black',
                  color: 'white',
                  textAlign: 'left',
                }}
              >
                <Typography>
                  Note: Thirty apes are being withheld from the sale. These will
                  be used for giveaways, puzzle rewards—and for the creators'
                  BAYC memberships.
                </Typography>
              </Item>
            </Box>
          </div>
        </Box>
      </Box>

      <Box sx={{ width: '90%', margin: 'auto' }}>
        <div className='home-first'>
          <Box className='buygrid'>
            <Typography variant='h4' sx={{ marginTop: 3 }}>
              THE TEAM{' '}
            </Typography>
            <Typography>
              BAYC is a collection of 10,000 Bored Ape NFTs—unique digital
              collectibles living on the Ethereum blockchain. Your Bored Ape
              doubles as your Yacht Club membership card, and grants access to
              members-only benefits, the first of which is access to THE
              BATHROOM, a collaborative graffiti board. Future areas and perks
              can be unlocked by the community through roadmap activation.
            </Typography>
          </Box>
          <Box
            item
            xs={6}
            md={4}
            sx={{ backgroundColor: 'black' }}
            className='buygrid'
          >
            <>
              <ImageList cols={2} className='imagelist'>
                {teamData.map((item) => (
                  <ImageListItem key={item}>
                    <img
                      src={`${item}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={'bandits'}
                      loading='lazy'
                      style={{ borderRadius: '10px' }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </>
          </Box>
        </div>
      </Box>
      <Footer />
    </Box>
  )
}

export default Home
