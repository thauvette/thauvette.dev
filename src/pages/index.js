import React from 'react'
import Layout from '../components/layout'
import Home from '../views/home/home'
import Skills from '../views/skills/skills'
import Section from '../components/section/section'
const IndexPage = () => {
  return (
    <>
      <Layout seoTitle="Welcome" seoDescription="I'm Matt, a JS developer.">
        <Home />
        <Section
          title="skill set"
          btnText="view resume"
          targetPage="/resume"
          id="skills"
        >
          <Skills />
        </Section>
        <Section
          title="projects"
          btnText="view all projects"
          targetPage="/projects"
          id="projects"
        >
          <p>Projects</p>
        </Section>
        <Section title="contact" id="contact">
          <p>Form</p>
        </Section>
      </Layout>
    </>
  )
}

export default IndexPage
