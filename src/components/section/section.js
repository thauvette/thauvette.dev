import React from 'react'
import PropTypes from 'prop-types'
import { ArrowRight } from '../icons'

import * as styles from './section.module.scss'

const Section = ({
  btnText,
  children,
  id,
  leftChildren,
  targetPage,
  title,
}) => (
  <div className={styles.SectionContainer} id={id}>
    <div className={styles.SectionLeft}>
      <div className={styles.LeftContent}>
        <h3 className={styles.SectionTitle}>{title}</h3>
        {!!(btnText && targetPage) && (
          <button
            className="btn"
            type="button"
            aria-label={`navigate to ${title} page`}
          >
            <p>{btnText}</p>
            <ArrowRight />
          </button>
        )}
        {leftChildren && leftChildren}
      </div>
    </div>
    <div className={styles.SectionRight}>{children}</div>
  </div>
)

Section.defaultProps = {
  btnText: null,
  leftChildren: null,
  targetPage: null,
}

Section.propTypes = {
  btnText: PropTypes.string,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  leftChildren: PropTypes.node,
  targetPage: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default Section
