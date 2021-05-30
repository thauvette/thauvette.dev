import React from 'react'

import './layout.scss'
import PropTypes from 'prop-types'
import Menu from './menu/menu'
import Footer from './footer/footer'
import Seo from './seo'

const Layout = ({ children, seoTitle, seoDescription }) => {
  return (
    <>
      <Seo title={seoTitle} description={seoDescription} />
      <header>
        <Menu />
      </header>
      <div className="main-content content-container">{children}</div>

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  seoTitle: PropTypes.string.isRequired,
  seoDescription: PropTypes.string.isRequired,
}

export default Layout
