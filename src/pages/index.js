import React from 'react'
import Contact from '../components/contact/contact'
import Hero from '../components/hero/hero'
import Layout from '../components/layout'
import ProjectList from '../components/projectList/projectList'
import Section from '../components/section/section'
import Skills from '../components/skills/skills'
import { FormProvider } from '../context/formContext'

const IndexPage = () => (
  <>
    <Layout seoTitle="Welcome" seoDescription="I'm Matt, a JS developer.">
      <Hero />
      <Section
        title="skill set"
        // btnText="view resume"
        // targetPage="/resume"
        id="skills"
        leftChildren={<p>Full resume coming soon.</p>}
      >
        <Skills />
      </Section>
      <Section
        title="projects"
        // btnText="view all projects"
        // targetPage="/projects"
        id="projects"
      >
        <ProjectList />
      </Section>
      <Section
        title="contact"
        id="contact"
        leftChildren={
          <p>
            I&apos;m always up for something new. <br /> Want to work together?
            Drop me a line.
          </p>
        }
      >
        <FormProvider>
          <Contact />
        </FormProvider>
      </Section>
    </Layout>
  </>
)

export default IndexPage
