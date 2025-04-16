import React from 'react'

import Social from '../social'

import * as styles from './hero.module.scss'

const Hero = () => (
  <div className={styles.homeContainer}>
    <div className={styles?.profileText}>
      <h1 className={styles.title}>Matt Thauvette</h1>
      <ul>
        <li>
          Senior Software Engineer -{' '}
          <a target="__blank" href="https://www.quickfactsinc.com/">
            QuickFacts
          </a>
        </li>
        <li>Professional Musician</li>
        <li>Fitness & Jiu-Jitsu Enthusiast</li>
        <li>Nerd</li>
      </ul>
      <div className={styles.socialContainer}>
        <Social />
      </div>
    </div>
    <div className={styles.bio}>
      <h2>About me</h2>
      <p>
        In the mid-2000s, fresh out of university with a degree in jazz
        performance, my coding journey took flight as I began crafting websites
        for the bands I played in. What started as a musical endeavor soon
        evolved into a passion for web development. My skills progressed from
        mastering the basics of HTML, CSS, and JavaScript to embracing advanced
        technologies such as Angular 1, React, and Node.
      </p>
      <p>
        As my interest in web development deepened, I transitioned into creating
        sites and web apps for friends and their networks, ultimately launching
        my freelance side gig. In 2018, seeking a change from life on the road,
        I joined a startup and later transitioned to an agency where I
        transformed my side hustle into a fulfilling career. I consider myself
        fortunate to have turned two hobbies into successful professional
        ventures.
      </p>
    </div>
  </div>
)

export default Hero
