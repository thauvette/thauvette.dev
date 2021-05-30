import React, { useState } from 'react'
import { Link } from 'gatsby'
import * as styles from './menu.module.scss'
import MobileMenuDrawer from './components/drawer/mobileMenuDrawer'

const sectionLinks = [
  { title: 'projects', target: '#projects' },
  { title: 'resume', target: '#skills' },
  { title: 'contact', target: '#contact', withBorder: true },
]

const Menu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  function toggleMobileMenu() {
    setMobileMenuOpen(!mobileMenuOpen)
  }
  return (
    <div className="content-container">
      <div className={`${styles.Menu}`} role="navigation">
        <div className={styles.MenuLeft}>
          <Link to="/">thauvette.dev</Link>
        </div>
        <div className={styles.MenuRight}>
          {sectionLinks.map(link => {
            return (
              <a
                key={link.target}
                className={`${styles.MenuLink} ${
                  link.withBorder ? styles.MenuLinkWithBorder : ''
                }`}
                href={`/${link.target}`}
              >
                {link.title}
              </a>
            )
          })}
        </div>
        <button
          className={`${styles.HamburgerButton}`}
          aria-label="open mobile menu"
          onClick={toggleMobileMenu}
        >
          <div
            className={`${styles.Hamburger} ${
              mobileMenuOpen ? styles.HamburgerActive : ''
            }`}
          >
            <div className={styles.Bar} />
            <div className={styles.Bar} />
            <div className={styles.Bar} />
          </div>
        </button>
      </div>
      <MobileMenuDrawer
        isOpen={mobileMenuOpen}
        onLinkClick={() => setMobileMenuOpen(false)}
        sectionLinks={sectionLinks}
      />
    </div>
  )
}

export default Menu
