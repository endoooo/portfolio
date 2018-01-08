import React, { Component } from 'react'

import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <nav className="footer-nav">
            <ul className="footer-nav__list">
              <li className="footer-nav__list-item">
                <a href="/" className="footer-nav__list-item-link footer-nav__list-item-link--active">olá!</a>
              </li>
              <li className="footer-nav__list-item">
                <a href="/2018" className="footer-nav__list-item-link">endo@2018</a>
              </li>
              <li className="footer-nav__list-item">
                <a href="/profissional" className="footer-nav__list-item-link">profissional</a>
              </li>
              <li className="footer-nav__list-item">
                <a href="/sobre" className="footer-nav__list-item-link">sobre</a>
              </li>
            </ul>
          </nav>
          <div className="footer-contact">
            <div className="footer-contact__hi">Diga olá:</div>
            <div className="footer-contact__email">eric@endoooo.com.br</div>
            <button className="footer-contact__copy-btn">copiar</button>
          </div>
          <div className="footer-social-media">
            <a href="http://twitter.com/endoooo" target="_blank" className="footer-social-media__link">@endoooo</a>
            <a href="https://www.linkedin.com/in/eric-endo-21039357" target="_blank" className="footer-social-media__link">Eric Endo</a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
