import React from 'react'
import {Link} from 'gatsby'
import './menu.scss'
import routes from '../config/routes'

const Menu = props => {
    return (
        <div className="menu" role="navigation">
            {Object.values(routes).map(page => {
                return (
                    <Link 
                        to={page.link}
                        key={page.link} 
                        className="menu-link"
                  
                    >
                        {page.text}
                    </Link>
                )
            })}
        </div>
    )
}

export default Menu