import React from 'react'
import PropTypes from 'prop-types'
import './layout.scss'
import Menu from '../components/menu'
import Social from '../components/social'
import Card from './card'
import Seo from './seo'
const Layout = ({ children, seoTitle, seoDescription }) => {
  return (
    <>
      <Seo title={seoTitle} description={seoDescription} />
      <div id="main-content-container">
        <div className="main-content">
          <Menu />
          <Card>{children}</Card>
          <Social />
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
