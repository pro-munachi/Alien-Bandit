import React from 'react'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

import './buy.css'
import banditgif from '../../assets/images/aliengif.gif'
import Footer from '../../components/footer/Footer'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const Buy = () => {
  return (
    <Box>
      <Box style={{ paddingBottom: '20px' }}>
        <div className='buy'></div>
        <Box className='buy-container' style={{ display: 'flex' }}>
          <Grid container spacing={2} columns={{ xs: 4, md: 12 }}>
            <Grid item xs={6} md={8}>
              <Item
                style={{
                  backgroundColor: 'black',
                  color: 'white',
                  textAlign: 'left',
                }}
              >
                {' '}
                <Typography variant='h4'>THE SPEC</Typography>
                <br />
                <Typography>
                  Each Bored Ape is unique and programmatically generated from
                  over 170 possible traits, including expression, headwear,
                  clothing, and more. All apes are dope, but some are rarer than
                  others.
                </Typography>{' '}
                <br />
                <Typography>
                  The apes are stored as ERC-721 tokens on the Ethereum
                  blockchain and hosted on IPFS. (See Record and Proof.)
                  Purchasing an ape costs 0.08 ETH.
                </Typography>{' '}
                <br />
                <Typography>
                  To access members-only areas such as THE BATHROOM, Apeholders
                  will need to be signed into their Metamask Wallet.
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={6} md={4}>
              <Item style={{ backgroundColor: 'black', color: 'white' }}>
                <img src={banditgif} alt='gif' />
              </Item>
            </Grid>
          </Grid>
        </Box>
        <Box className='buy-but'>
          <h2>Buy a Bandit</h2>
          <p>
            The initial sale has sold out. To get your Bored Ape, check out the
            collection on OpenSea.
          </p>

          <a
            href='https://opensea.io/collection/alien-bandits'
            target='_blank'
            rel='noopener noreferrer'
          >
            BUY A BANDIT ON OPEN SEA
          </a>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default Buy
