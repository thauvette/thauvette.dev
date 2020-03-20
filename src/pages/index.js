import React, {useState} from "react"

import Layout from "../components/layout"
import  Social from '../components/social'
import routes from '../config/routes'

import Views from '../views/views'
import Menu from '../components/menu'

const IndexPage = () => {
  const [currentView, setCurrentView] = useState(routes.home)
  
  return (
    <Layout>
      <Menu route={currentView} setView={setCurrentView}/>
      <Views route={currentView} seoTitle={currentView} setView={setCurrentView}/>
      <Social />
    </Layout>
  )
}

export default IndexPage
