import React from 'react'
import { ArrowRight } from '../../components/icons'

import * as styles from './section.module.scss'

const Section = ({ title, targetPage, btnText, children, id }) => (
  <div className={styles.SectionContainer} id={id}>
    <div className={styles.SectionLeft}>
      <div className={styles.LeftContent}>
        <h3 className={styles.SectionTitle}>{title}</h3>
        {!!(btnText && targetPage) && (
          <button className="btn">
            <p>{btnText}</p>
            <ArrowRight />
          </button>
        )}
      </div>
    </div>
    <div className={styles.SectionRight}>{children}</div>
  </div>
)

export default Section
