import React from 'react';
import './about.scss';
import routes from '../config/routes'
const AboutPage = ({setView}) => {
    return (
        <div className="about-page">
            <h3>
                Hi I'm Matt,
            </h3>
            <p>
                a developer working in Halifax, NS. My main focus is building web and native apps with javascript, React, React Native and Node. 
            </p>
            <p>
                If you are interested in working on a project together,{' '} 
                <button className="btn btn-hollow"
                    onClick={() => setView(routes.contact)}
                >
                    please contact me.
                </button>
            </p>
        </div>
    )
}

export default AboutPage;