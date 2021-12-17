import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter'
import TelegramIcon from '@mui/icons-material/Telegram'
import InstagramIcon from '@mui/icons-material/Instagram'

import Logo from '../../assets/images/ALIEN1.png'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div>
          <img src={Logo} alt='logo' height={100} width={100} />
        </div>
        <div className='footer-bottom'>
          <div className='footer-icons'>
            <a href='/' className='footer-link'>
              <TwitterIcon />
            </a>
            <a href='/' className='footer-link'>
              <TelegramIcon />
            </a>
            <a href='/' className='footer-link'>
              <InstagramIcon />
            </a>
          </div>

          <div>&copy; 2021 Alien Bandits</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
