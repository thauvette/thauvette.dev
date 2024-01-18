import React from 'react'
import PropTypes from 'prop-types'

import Menu from './menu/menu'
import Footer from './footer/footer'
import Seo from './seo'

import './layout.scss'
import Background from './background/background'

const Layout = ({ children, seoTitle, seoDescription }) => (
  <>
    <Seo title={seoTitle} description={seoDescription} />
    <header>
      <Menu />
    </header>
    <div className="main-content content-container">{children}</div>
    <Footer />
    <Background />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  seoTitle: PropTypes.string.isRequired,
  seoDescription: PropTypes.string.isRequired,
}

export default Layout
