import React from 'react'

import * as sharedStyles from '../../styles/shared/sectionLists.module.scss'

// const tags = ['solo', 'react', 'react native']

const projects = [
  {
    title: 'IWNDT',
    description:
      'r/stopdrinking inspired, feature rich, customizable sobriety tracking native App, including milestones, diary, stats, and more.',
    role: 'Solo design and development',
    tools: ['React Native', 'Redux', 'redux-persist'],
    tags: ['solo', 'react native'],
  },
  {
    title: 'Ferry Booking Engine',
    description:
      'Reuseable, translatable, theme-able, ferries booking engine used in production by several clients.',
    team: (
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://verbinteractive.com"
      >
        VERB Interactive
      </a>
    ),
    role: 'Front-end technical lead & lead developer',
    tools: ['React', 'Redux'],
    tags: ['VERB', 'react'],
  },
  {
    title: 'Voyages, Ayers Rock Resort',
    description:
      'A multiple step, multi product booking solution for a full vacation experience including accommodations, tours and spas.',
    team: (
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://verbinteractive.com"
      >
        VERB Interactive
      </a>
    ),
    role: 'Front-end technical lead & lead developer',
    tools: ['React', 'Redux'],
    tags: ['VERB', 'react'],
  },
]

const ProjectList = () => (
  <div>
    {projects.map(project => (
      <div className={sharedStyles.Item} key={project.title}>
        <p className={sharedStyles.ItemTitle}>{project.title}</p>
        <div className={sharedStyles.ItemDescription}>
          {project.team && (
            <div className={sharedStyles.ItemDetailsContainer}>
              <p className={sharedStyles.ItemDetailsLabel}>team:</p>
              <p className={sharedStyles.ItemDetailsValue}>{project.team}</p>
            </div>
          )}
          {project.role && (
            <div className={sharedStyles.ItemDetailsContainer}>
              <p className={sharedStyles.ItemDetailsLabel}>role:</p>
              <p className={sharedStyles.ItemDetailsValue}>{project.role}</p>
            </div>
          )}
          <div className={sharedStyles.ItemDetailsContainer}>
            <p className={sharedStyles.ItemDetailsLabel}>product:</p>
            <p className={sharedStyles.ItemDetailsValue}>
              {project.description}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
)

export default ProjectList
