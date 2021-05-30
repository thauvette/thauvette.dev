import React from 'react'
import PropTypes from 'prop-types'
import './card.scss'

const Card = ({ children }) => (
  <div className="card-container">
    <div className="card">
      <div className="card-content">{children}</div>
    </div>
  </div>
)

Card.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Card
