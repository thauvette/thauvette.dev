import React from "react"
import PropTypes from "prop-types"
import "./layout.scss"

const Layout = ({ children }) => {
  
  return (
    <>
      <div id="main-content-container">
          <div className="main-content"> 
            {children}
          </div>
        </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
