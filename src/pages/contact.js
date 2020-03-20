import React from 'react'
import Layout from '../components/layout'
import Contact from '../views/contact'
import { FormProvider } from '../context/formContext'

const ContactPage = () => {
  return (
    <>
      <Layout seoTitle="Contact" seoDescription="I'm Matt, a JS developer.">
        <FormProvider>
          <Contact />
        </FormProvider>
      </Layout>
    </>
  )
}

export default ContactPage
