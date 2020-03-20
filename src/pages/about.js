import React from "react"
import Layout from "../components/layout"
import About from '../views/about'

const AboutPage = () => {  
  return (
    <>
    <Layout seoTitle="About Me" seoDescription="I'm Matt, a JS developer." >
      <About />
    </Layout>
    </>
  )
}

export default AboutPage
