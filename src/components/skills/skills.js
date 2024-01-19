import React from 'react'

import * as sharedStyles from '../../styles/shared/sectionLists.module.scss'

const skillList = [
  // {
  //   title: 'Programing Languages',
  //   description: 'Javascript, Typescript, HTML, CSS, Sass',
  // },
  // {
  //   title: 'Libraries and Frameworks',
  //   description: 'React, React Native, Node.js, Sequelize, Gatsby, Next,js, Tailwind',
  // },
  // {
  //   title: 'Tools & Platforms',
  //   description:
  //     'Git, GitHub, GitLab, Netlify, Docker, Webpack, Vite, CAR, Figma',
  // },
  {
    title: 'JavaScript / Typescript',
    description: 'I consider myself first and foremost a JS dev.',
  },
  {
    title: 'React / React Native / Preact',
    description:
      "I love building web and native apps using React, React Native and Preact. This is where I've logged the most hours in my career.",
  },
  // {
  //   title: 'Jest + React Testing Library',
  //   description: "I'm a sucker for TDD.",
  // },
  // {
  //   title: 'Redux',
  //   description:
  //     'While I love the built in state management available with React, I have spent a lot of time working with and learning redux. I still reach for it on data or business-logic heavy builds.',
  // },
  {
    title: 'Gatsby / Next.js',
    description:
      "Don't make me choose, I really enjoy both of these static site generators.",
  },
  {
    title: 'Node',
    description:
      'I love to tinker in node and various API solutions available for JavaScript.',
  },
  {
    title: 'HTML/CSS',
    description:
      'And of course the JS versions and various solution, jsx, css in js, css modules, styled-components, sass, etc etc etc...',
  },
  {
    title: 'UI/UX',
    description: (
      <>
        Admittedly <strong>NOT</strong> my forte, but I have a good
        understanding of the core concepts and best practices.
      </>
    ),
  },
]

const Skills = () => (
  <div>
    {skillList.map(skill => (
      <div className={`${sharedStyles.Item}`} key={skill.title}>
        <p className={sharedStyles.ItemTitle}>{skill.title}</p>
        <div>
          <p>{skill.description}</p>
        </div>
      </div>
    ))}
  </div>
)

export default Skills
