import React from 'react'
import PropTypes from 'prop-types'
import * as styles from './drawer.module.scss'

const MobileMenuDrawer = ({ isOpen, onLinkClick, sectionLinks }) => (
  <div
    className={`${styles.MobileMenuDrawer} ${
      isOpen ? styles.MobileMenuDrawerActive : ''
    }`}
  >
    <div className={styles.DrawerList}>
      {sectionLinks.map(link => (
        <a href={link.target} key={link.target} onClick={onLinkClick}>
          {link.title}
        </a>
      ))}
    </div>
  </div>
)
MobileMenuDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onLinkClick: PropTypes.func.isRequired,
  sectionLinks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}
export default MobileMenuDrawer
