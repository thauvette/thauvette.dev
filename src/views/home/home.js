import React from 'react'
import Image from '../../components/image'
import * as styles from './home.module.scss'

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles?.profilePic}>
        <div className={styles.imageContainer}>
          <Image />
        </div>
      </div>
      <div className={styles?.profileText}>
        <h3 className={styles.title}>Matt Thauvette</h3>
        <h5 className={styles.subTitle}>JavaScript Developer</h5>
      </div>
    </div>
  )
}

export default Home
