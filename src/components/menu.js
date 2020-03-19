import React from 'react'
import routes from '../config/routes'
import './menu.scss'
const Menu = props => {
    return (
        <div className="menu" role="navigation">
            {Object.entries(routes).map(([routeId, routeName]) => {
                return (
                    <button 
                        key={routeId} 
                        className="menu-button"
                        onClick={() => props.setView(routeName)}
                    >
                        {routeName}
                    </button>
                    )
            })}
        </div>
    )
}

export default Menu