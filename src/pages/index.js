import React from 'react'
import Hero from '../components/hero/hero'
import Layout from '../components/layout'
import ProjectList from '../components/projectList/projectList'
import Section from '../components/section/section'
import Skills from '../components/skills/skills'

const IndexPage = () => (
  <>
    <Layout seoTitle="Welcome" seoDescription="I'm Matt, a JS developer.">
      <Hero />
      <Section
        title="Skills"
        // btnText="view resume"
        // targetPage="/resume"
        id="skills"
        // leftChildren={<p>Full resume coming soon.</p>}
      >
        <Skills />
      </Section>
      <Section
        title="Projects"
        // btnText="view all projects"
        // targetPage="/projects"
        id="projects"
      >
        <ProjectList />
      </Section>
    </Layout>
  </>
)

export default IndexPage
