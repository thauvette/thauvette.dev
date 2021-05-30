import React from 'react'

import * as styles from './skills.module.scss'

const skillList = [
  {
    title: 'JavaScript',
    description: 'I consider myself first and foremost a JS dev.',
  },
  {
    title: 'React + React Native',
    description:
      "I love building web and native apps using React and React Native. This is where I've probably logged the most hours in my career.",
  },
  {
    title: 'Redux',
    description:
      'While I love the built in state management available with React, I have spent a lot of time working with and learning redux. I still reach for it on large, data or business-logic heavy builds.',
  },
  {
    title: 'Gatsby / Next.js',
    description:
      "Don't make me choose, I really enjoy both of these static site generators.",
  },
  {
    title: 'Node',
    description:
      'I love to tinker in node and various API solutions available for JavaScript, like serverless, express etc...',
  },
  {
    title: 'HTML/CSS',
    description:
      'And of course the JS versions and various solution, jsx, css in js, css modules, styled-components etc etc etc...',
  },
  {
    title: 'UI/UX',
    description: (
      <>
        Admittedly <strong>NOT</strong> my forte but I have a good understanding
        of the core concepts and best practices.
      </>
    ),
  },
]

const Skills = () => (
  <div className={styles.Skills}>
    {skillList.map(skill => (
      <div className={styles.Skill} key={skill.title}>
        <p className={styles.Title}>{skill.title}</p>
        <p className={styles.Description}>{skill.description}</p>
      </div>
    ))}
  </div>
)

export default Skills
