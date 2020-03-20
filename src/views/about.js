import React from 'react'
import { Link } from 'gatsby'
import routes from '../config/routes'
import './about.scss'

const About = () => {
  return (
    <div className="about-page">
      <h3>Hi I'm Matt,</h3>
      <p>
        a developer working in Halifax, NS. My main focus is building web and
        native apps with javascript, React, React Native and Node.
      </p>
      <p>
        If you are interested in working on a project together,{' '}
        <Link className="btn btn-hollow" to={routes.contact.link}>
          please contact me.
        </Link>
      </p>
    </div>
  )
}

export default About
