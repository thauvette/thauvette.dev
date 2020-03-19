import React from 'react'
import SEO from '../components/seo'
import Card from '../components/card'
import Home from './home'
import AboutPage from './about'
import Contact from './contact'
import routes from '../config/routes'
import {FormProvider} from '../context/formContext'

function renderView(props) {
    switch(props.route) {
        case routes.home: 
            return <Home />
        case routes.about:
            return <AboutPage setView={props.setView}/>
        case routes.contact:
            return  <Contact />
        default: return <Home />
    }
}

const Views = props => {
    return (
        <FormProvider>
            <SEO title={props.seoTitle} />
            <Card route={props.route}>
                {renderView(props)}
            </Card>
        </FormProvider>
    )
}

export default Views;