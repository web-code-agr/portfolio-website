import React from 'react'
import {faFacebook} from  "@fortawesome/free-brands-svg-icons"
import {faGithub} from  "@fortawesome/free-brands-svg-icons"
import {faInstagram} from  "@fortawesome/free-brands-svg-icons"
import {faLinkedin} from  "@fortawesome/free-brands-svg-icons"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom"

function HomePage() {
    return (
        <div className="HomePage">
            <header className="Hero">
                <h1 className="hero-text">
                    Hi, I am  
                    <span> Vaibhav Kant Agrawal</span>
                </h1>
                <p className="h-sub-text">
                    I am 5th year Undergrauate student at IIT Kharagpur persuing majors in Mechanical Engineering 
                    with expertise in Mechanical system design. I have been passionate about the power of data to
                    bring the change in the world which kept me motivated to persue my career in Data Science and 
                    Artificial Intelligence field.

                </p>
                <div className="icons">
                    <Link className="icon-holder" to={{pathname:"https://www.facebook.com/vaibhav.agrawal.5074"}} target="_blank">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb"/>
                    </Link>
                    <Link className="icon-holder" to={{pathname:"https://github.com/web-code-agr"}} target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="icon gh"/>
                    </Link>
                    <Link className="icon-holder" to={{pathname:"https://www.linkedin.com/in/vaibhav-kant-agrawal-5ba58b153/"}} target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="icon li"/>
                    </Link>
                    <Link className="icon-holder" to={{pathname: "https://www.instagram.com/that_sleepyguy/"}} target="_blank">
                        <FontAwesomeIcon icon={faInstagram} className="icon ig"/>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage
