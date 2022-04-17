import "./Work.css"
import {FiGithub} from "react-icons/fi"
import projectPhoto from "../../photo/Move-screenshot.png"
import React from 'react'

function Work() {
    return (
        <div className="workPage">
            <h1>Some Things I've built</h1>
            <div className="containerWorkPage">
                <div className="projectPhoto">
                    <img id="_projectPhoto" src={projectPhoto} alt=""/>
                </div>
                <div className="projectInfo">
                    <h2 id="projectName">Movea</h2>
                    <div className="projectOverview">
                    </div>
                    <ul id="_listTechnologiesUsed">
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>IMDB API</li>
                    </ul>
                    <div className="projectLink">
                        <a target={"_blank"} href="https://github.com/CrisNguyen305/Movea-React-Ver-">
                            <FiGithub id="iconLink"/>
                        </a>
                    </div>
                    
                    
                
                </div>
                
            </div>
        </div>
    )
}

export default Work