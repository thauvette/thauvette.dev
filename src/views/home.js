import React from 'react'
import Image from '../components/image'
import './home.scss'
const Home = () => {
    return (
        <>
            <div className="profile-pic">
                <Image />
            </div>
            <div className="profile-text">
                <h3>Matt Thauvette</h3>
                <p>JavaScript Developer</p>
                
            </div>
       </>
    )
}

export default Home;