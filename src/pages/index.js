import React from 'react'
import Contact from '../components/contact/contact'
import Hero from '../components/hero/hero'
import Layout from '../components/layout'
import Section from '../components/section/section'
import Skills from '../components/skills/skills'
import { FormProvider } from '../context/formContext'

const IndexPage = () => (
  <>
    <Layout seoTitle="Welcome" seoDescription="I'm Matt, a JS developer.">
      <Hero />
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
        <FormProvider>
          <Contact />
        </FormProvider>
      </Section>
    </Layout>
  </>
)

export default IndexPage
