import React from 'react'
import PropTypes from "prop-types"
import './card.scss'

const Card = props => {
    return (
        <div className="card-container">
            <div className={`card`} >
                <div className={`card-content`}>
                    {props.children}    
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
  export default Card