import React from 'react'
import Layout from '../components/layout'
import Home from '../views/home'
const IndexPage = () => {
  return (
    <>
      <Layout seoTitle="Welcome" seoDescription="I'm Matt, a JS developer.">
        <Home />
      </Layout>
    </>
  )
}

export default IndexPage
