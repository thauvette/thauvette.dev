import React from 'react'
import ProfileImage from '../../components/profileImage'

import { ArrowRight } from '../../components/icons'
import * as styles from './home.module.scss'

const Home = () => (
  <div className={styles.homeContainer}>
    <div className={styles.pictureColumn}>
      <div className={styles?.profilePic}>
        <div className={styles.imageContainer}>
          <ProfileImage />
          <div className={styles.overlay} />
        </div>
      </div>
    </div>
    <div className={styles?.profileText}>
      <p className={styles.subTitle}>JS + React + React Native Developer</p>
      <h1 className={styles.title}>Matt Thauvette</h1>
      <div className={styles.ctaContainer}>
        <a className={`${styles.ctaLink} btn`} href="#contact">
          <p>Get in Touch</p>
          <ArrowRight />
        </a>
      </div>
    </div>
  </div>
)

export default Home
