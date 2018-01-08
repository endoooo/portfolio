import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Header from './components/Header'
import Footer from './components/Footer'
import Menu from './components/Menu'

import './index.css'

class TemplateWrapper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuIsOpen: false,
    }
  }

  toggleMenu = () => {
    this.setState({ menuIsOpen: !this.state.menuIsOpen })
  }

  render() {
    const { menuIsOpen } = this.state

    return (
      <div>
        <Header
          onToggleMenu={this.toggleMenu}
        />
        {this.props.children()}
        <Footer />
        {
          menuIsOpen && (
            <Menu
              onToggleMenu={this.toggleMenu}
            />
          )
        }
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
