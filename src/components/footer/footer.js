import React from 'react'
import Social from '../social'
import * as styles from './footer.module.scss'

const Footer = () => (
  <footer className="content-container">
    <div className={styles.Footer}>
      <div>
        <Social />
      </div>
      <div>
        <p>Made with 😘 by Matt</p>
      </div>
      <div>
        <p>{new Date().getFullYear()} thauvette.dev</p>
      </div>
    </div>
  </footer>
)

export default Footer
