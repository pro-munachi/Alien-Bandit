import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import MenuIcon from '@mui/icons-material/Menu'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { NavLink } from 'react-router-dom'

import './drawer.css'
import Logo from '../../assets/images/ALIEN1.png'

export default function AppBar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
        height: '100vh',
        bgcolor: 'black',
        color: '#c0262d',
      }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box className='close'>
        <p onClick={toggleDrawer(anchor, false)}>X</p>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={Logo} alt='logo' height={90} />
      </Box>
      <List>
        {[
          { name: 'Home', link: '/' },
          { name: 'Buy a bandit', link: '/buy' },
          { name: 'Provenence', link: '/map' },
          { name: 'Members', link: '/map' },
        ].map((text, index) => (
          <ListItem button key={text.name}>
            {/* <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon> */}
            <NavLink
              to={text.link}
              style={{ textDecoration: 'none', color: '#c0262d' }}
            >
              <ListItemText primary={text.name} />
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <div className='menu'>
      <div className='hamburger'>
        {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              <MenuIcon className='ham' />
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>

      <div className='nav-full'>
        <div className='logo'>
          <img src={Logo} alt='logo' />
        </div>
        <div className='nav-links'>
          <ul>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                Bandits
              </NavLink>
            </li>
            <li>
              <NavLink
                to='buy'
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                Buy a bandit
              </NavLink>
            </li>
            <li>
              <NavLink
                to='map'
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                Provenence
              </NavLink>
            </li>
            <li>
              <NavLink
                to='map'
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                Members
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
