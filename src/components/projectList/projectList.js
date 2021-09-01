import React from 'react'

import * as sharedStyles from '../../styles/shared/sectionLists.module.scss'

// const tags = ['solo', 'react', 'react native']
// todo: update team to take array
const projects = [
  {
    title: 'Financial Calculator Embeds',
    description:
      'Embedded widgets built with preact and d3 for use by financial advisors',
    role: 'widget guy',
    tools: ['preact', 'd3', 'yup', 'css modules'],
    tags: ['react', 'preact', 'widget'],
    team: (
      <>
        <a
          href="https://mikesux.design/"
          target="_blank"
          rel="noreferrer noopener"
        >
          mikesux.design
        </a>
      </>
    ),
    links: [
      {
        title: 'Gordon Stirrett',
        url: 'https://www.gordonstirrett.com/calculators/investment-calculator',
      },
    ],
  },
  {
    title: 'IWNDT',
    description:
      'r/stopdrinking inspired, feature rich, customizable sobriety tracking native App, including milestones, diary, stats, and more.',
    role: 'Solo design and development',
    tools: ['React Native', 'Redux', 'redux-persist', 'typescript'],
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
    links: [
      { title: 'CTMA', url: 'https://reservation.ctma.ca/book/' },
      { title: 'ferries.ca', url: 'https://www.ferries.ca/book' },
    ],
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
    links: [
      {
        title: 'Ayers Rock Resort',
        url: 'https://www.ayersrockresort.com.au/book',
      },
    ],
  },
]

const ProjectList = () => (
  <div>
    {projects.map(project => (
      <div className={sharedStyles.Item} key={project.title}>
        <p className={sharedStyles.ItemTitle}>{project.title}</p>
        <div>
          {project.team && (
            <div className={sharedStyles.ItemDetailsContainer}>
              <p className={sharedStyles.ItemDetailsLabel}>team:</p>
              <p>{project.team}</p>
            </div>
          )}
          {project.role && (
            <div className={sharedStyles.ItemDetailsContainer}>
              <p className={sharedStyles.ItemDetailsLabel}>role:</p>
              <p>{project.role}</p>
            </div>
          )}
          <div className={sharedStyles.ItemDetailsContainer}>
            <p className={sharedStyles.ItemDetailsLabel}>product:</p>
            <p>{project.description}</p>
          </div>
          {project.links && (
            <div className={sharedStyles.ItemDetailsContainer}>
              <p className={sharedStyles.ItemDetailsLabel}>links:</p>

              {project.links.map(link => (
                <a
                  className={sharedStyles.ItemDetailsLink}
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {link.title}
                </a>
              ))}
            </div>
          )}
          {project.tools && (
            <div className={sharedStyles.ItemDetailsContainer}>
              <p className={sharedStyles.ItemDetailsLabel}>tools:</p>
              <p>{project.tools.join(', ')}</p>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
)

export default ProjectList
