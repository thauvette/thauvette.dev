import React from 'react'
import './social.scss'
import {Twitter, GitHub, LinkedIn} from './icons'
const socialLinks = [
    {title: 'twitter', url: 'https://twitter.com/TheDrumMatt', icon: Twitter},
    {title: 'github', url: 'https://github.com/thauvette', icon: GitHub},
    {title: 'linkedIn', url: 'hhttps://www.linkedin.com/in/matt-thauvette/', icon: LinkedIn}
]


const Social = () => {
   

  return (
      <div className="social-links">
        {socialLinks.map(link => (
            <div key={link.url} className="social-link">
                <link.icon width={32} />
            </div>
        ))}
    </div>
  )
}

export default Social;