import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavStyle } from './style'
import Button from './Button'

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
    return (
      <NavStyle
        transform={this.state.toggle}
        display={this.state.displayBackdrop}
      >
        {(window.onscroll = () => this.checkScroll())}
        {this.state.display ? (
          <div onClick={this.onClickBackdrop} className='backdrop'></div>
        ) : null}
        <div
          style={{ ...styleContain, backgroundColor: this.state.background }}
          className='container'
        >
          <div className='logo'>
            <img src='l.jpg' alt='Logo here' />
          </div>
          <div className='nav_items'>
            <NavLink
              exact
              to='/'
              className='single_item'
              activeClassName='when_active'
            >
              Home<span></span>
            </NavLink>
            <NavLink
              exact
              to='/whatweoffer'
              className='single_item'
              activeClassName='when_active'
            >
              What we Offer<span></span>
            </NavLink>
            <NavLink
              exact
              to='/topwears'
              className='single_item'
              activeClassName='when_active'
            >
              Top Wears<span></span>
            </NavLink>
            <NavLink
              exact
              to='/catalogue'
              className='single_item'
              activeClassName='when_active'
            >
              Catalogue<span></span>
            </NavLink>
            <NavLink
              exact
              to='/contact'
              className='single_item'
              activeClassName='when_active'
            >
              Contact Us<span></span>
            </NavLink>
          </div>

          {/*Navigation on Mobile */}

          <div className='nav_items_mobile'>
            <NavLink
              exact
              to='/'
              onClick={this.onClickBackdrop}
              className='single_item'
              activeClassName='when_active_mobile'
            >
              Home<span></span>
            </NavLink>
            <NavLink
              exact
              to='/whatweoffer'
              onClick={this.onClickBackdrop}
              className='single_item'
              activeClassName='when_active_mobile'
            >
              What we Offer<span></span>
            </NavLink>
            <NavLink
              exact
              to='/topwears'
              onClick={this.onClickBackdrop}
              className='single_item'
              activeClassName='when_active_mobile'
            >
              Top Wears<span></span>
            </NavLink>
            <NavLink
              exact
              to='/catalogue'
              onClick={this.onClickBackdrop}
              className='single_item'
              activeClassName='when_active_mobile'
            >
              Catalogue<span></span>
            </NavLink>
            <NavLink
              exact
              to='/contact'
              onClick={this.onClickBackdrop}
              className='single_item'
              activeClassName='when_active_mobile'
            >
              Contact Us<span></span>
            </NavLink>
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
