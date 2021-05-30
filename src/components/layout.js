import React from 'react'
import PropTypes from 'prop-types'
import './layout.scss'
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
}

export default Layout
