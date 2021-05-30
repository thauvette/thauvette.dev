import React from 'react'
import Social from '../social'
import * as styles from './footer.module.scss'

const Footer = () => (
  <footer className="content-container">
    <div className={styles.Footer}>
      <div className={styles.FooterLeft}>
        <Social />
      </div>
      <div className={styles.FooterCenter}></div>
      <div className={styles.FooterRight}></div>
    </div>
  </footer>
)

export default Footer
