import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Header.css'

import logo from '../../assets/images/eric-endo-logo-white.svg'

class Header extends Component {
  render() {
    return (
      <header className="header container-fluid">
        <h1 className="header__title">
          <a href="/">
            <img src={logo} alt="Eric Endo" className="header__title-img" />
          </a>
        </h1>
        <button
          className="header__button"
          onClick={this.props.onToggleMenu}
        >
          Explore
        </button>
      </header>
    )
  }
}

Header.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Header
