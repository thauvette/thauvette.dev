import React from 'react'
import './social.scss'
import { GitHub, LinkedIn } from './icons'
const socialLinks = [
  { title: 'github', url: 'https://github.com/thauvette', icon: GitHub },
  {
    title: 'linkedIn',
    url: 'https://www.linkedin.com/in/matt-thauvette/',
    icon: LinkedIn,
  },
]

const Social = () => {
  return (
    <div className="social-links">
      {socialLinks.map(link => (
        <div key={link.url} className="social-link">
          <a href={link.url} rel="noopener noreferrer" target="_blank">
            <link.icon width={24} />
          </a>
        </div>
      ))}
    </div>
  )
}

export default Social
