import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Menu.css'

import logo from '../../assets/images/eric-endo-logo-white.svg'

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <header className="menu-header container-fluid">
          <h1 className="menu-header__title">
            <img src={logo} alt="Eric Endo" className="menu-header__title-img" />
          </h1>
          <button
            className="menu-header__button"
            onClick={this.props.onToggleMenu}
          >
            Fechar
          </button>
        </header>
        <nav className="menu-nav container">
          <ul className="menu-nav__list">
            <li className="menu-nav__list-item">
              <a href="/" className="menu-nav__list-item-link menu-nav__list-item-link--active">olá!</a>
            </li>
            <li className="menu-nav__list-item">
              <a href="/2018" className="menu-nav__list-item-link">endo@2018</a>
            </li>
            <li className="menu-nav__list-item">
              <a href="/profissional" className="menu-nav__list-item-link">profissional</a>
            </li>
            <li className="menu-nav__list-item">
              <a href="/sobre" className="menu-nav__list-item-link">sobre</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
