import React from 'react'
import { NavLink } from 'react-router-dom'

import { NavStyle } from './style'
import Button from './Button'
import logo from '../../assets/images/hori.png'
import { HashLink } from 'react-router-hash-link'

class NavBar extends React.Component {
  constructor() {
    super()
    this.state = {
      scrollPosition: 0,
      display: false,
      background: '',
      toggle: 'translateX(100%)',
      line1: '',
      line2: '1',
      line3: '',
    }
  }

  /* This section controls the NavBar fade on Scroll*/
  checkScroll = (event) => {
    this.setState(
      {
        scrollPosition: window.pageYOffset,
      },
      this.scrollAction
    )
  }

  scrollAction = () => {
    if (this.state.scrollPosition > 50) {
      this.setState({
        background: '#0D0D0D',
      })
    } else {
      this.setState({
        background: 'transparent',
      })
    }
  }
  /* The above section controls the NavBar fade on Scroll*/

  /*  Code below controls the Hamburger Menu Button */

  onClickButton = () => {
    this.setState(
      (prevState) => ({
        display: !prevState.display,
      }),
      this.change
    )
  }

  onClickBackdrop = () => {
    this.setState({
      display: false,
      toggle: 'translateX(100%)',
      line1: '',
      line2: '1',
      line3: '',
    })
  }

  change = () => {
    if (this.state.display === true) {
      this.setState({
        toggle: 'translateX(0%)',
        line1: 'rotate(-45deg) translate(-4px,6px)',
        line2: '0',
        line3: 'rotate(45deg) translate(-4px,-6px)',
      })
    } else {
      this.setState({
        toggle: 'translateX(100%)',
        line1: '',
        line2: '1',
        line3: '',
      })
    }
  }

  /*  Code above controls the Hamburger Menu Button */

  render() {
    const styleContain = {}
    window.onscroll = () => this.checkScroll()

    return (
      <NavStyle
        transform={this.state.toggle}
        display={this.state.displayBackdrop}
      >
        {this.state.display ? (
          <div onClick={this.onClickBackdrop} className='backdrop'></div>
        ) : null}
        <div
          style={{ ...styleContain, backgroundColor: this.state.background }}
          className='container'
        >
          <div className='logo'>
            <NavLink to='/'>
              <img src={logo} alt='Logo here' />
            </NavLink>
          </div>
          <div className='nav_items'>
            <NavLink to='/' className='single_item'>
              Home<span></span>
            </NavLink>
            <HashLink
              smooth
              to='/#campaign'
              className='single_item'
              scroll={(el) =>
                el.scrollIntoView({ behavior: 'auto', block: 'end' })
              }
            >
              Campaign map <span></span>
            </HashLink>
            <HashLink
              smooth
              to='/#archive'
              className='single_item'
              scroll={(el) =>
                el.scrollIntoView({ behavior: 'auto', block: 'end' })
              }
            >
              Archive <span></span>
            </HashLink>

            <NavLink to='/about' className='single_item'>
              About<span></span>
            </NavLink>

            <NavLink to='/buy' className='single_item'>
              Buy<span></span>
            </NavLink>

            <NavLink to='/hierachy' className='single_item'>
              Hierachy<span></span>
            </NavLink>

            <a
              href='https://t.me/+4ICOg08hzMQwZTdk'
              target='_blank'
              rel='noopener noreferrer'
              className='discord'
            >
              <button>Join our discord</button>
            </a>
          </div>

          {/*Navigation on Mobile */}

          <div className='nav_items_mobile'>
            <NavLink
              to='/'
              className='single_item'
              onClick={this.onClickBackdrop}
            >
              Home
            </NavLink>

            <HashLink
              smooth
              to='/#campaign'
              className='single_item'
              scroll={(el) =>
                el.scrollIntoView({ behavior: 'auto', block: 'end' })
              }
            >
              Campaign map <span></span>
            </HashLink>

            <HashLink
              smooth
              to='/#archive'
              className='single_item'
              scroll={(el) =>
                el.scrollIntoView({ behavior: 'auto', block: 'end' })
              }
            >
              Archive <span></span>
            </HashLink>

            <NavLink
              to='/about'
              className='single_item'
              onClick={this.onClickBackdrop}
            >
              About
            </NavLink>

            <NavLink
              to='/buy'
              className='single_item'
              onClick={this.onClickBackdrop}
            >
              Buy a bandit
            </NavLink>

            <NavLink
              to='/hierachy'
              className='single_item'
              onClick={this.onClickBackdrop}
            >
              Hierachy
            </NavLink>

            <a
              href='https://t.me/+4ICOg08hzMQwZTdk'
              target='_blank'
              rel='noopener noreferrer'
              className='discord'
            >
              <button>Join our discord</button>
            </a>
          </div>
        </div>

        <Button
          onClick={this.onClickButton}
          line1={this.state.line1}
          line2={this.state.line2}
          line3={this.state.line3}
        />
      </NavStyle>
    )
  }
}
export default NavBar
