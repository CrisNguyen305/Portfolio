import "./About.css"
import React from 'react'
import photo from  "../../photo/IMG_6759.jpg"

function About() {
    return (
        <div id="about">
            <h1 class="aboutText">About me</h1>
            <div class="aboutGrid">
                <div class="describeAboutme">
                    <p class="describeAboutme">Hello! My name is Cris</p>
                    <p class="describeAboutme">Here are a few technologies I've been working with recently:</p>
                    <ul id="listorder">
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>Node.js</li>
                    </ul>
                </div>
                <img src={photo} alt="" class="imgAbout"></img>
            </div>
        </div>
    )
}

export default About