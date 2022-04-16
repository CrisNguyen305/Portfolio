import "./About.css"
import React from 'react'
import photo from  "../../photo/IMG_6759.jpg"
import { SiJavascript , SiPython } from "react-icons/si"
import { FaNodeJs ,  FaReact , FaAws} from "react-icons/fa"
import { DiBootstrap } from "react-icons/di"

function About() {
    return (
        <div id="about">
            <h1 class="aboutText">About me</h1>
            <div class="aboutGrid">
                <div class="describeAboutme">
                    <p class="describeAboutme">Hello! My name is <p id="crisName">Huu Nguyen (Cris)</p></p>
                    <p class="describeAboutme">
                        I am 3rd year student at <a id="schoolLink" target={"_blank"} href="https://www.qut.edu.au/study?utm_source=goog
                        le&utm_medium=cpc&utm_campaign=qut_undergraduate_school_leaver_keyword&
                        gclid=Cj0KCQjw0umSBhDrARIsAH7FCofVg8gfVijoIAWWDJNHULcHG4z4Obbo3o5vyUowRfKTScH7tTEnIVwaAtCQEALw_wcB"> 
                        Queensland University of Technology (QUT)</a>  and currently living in Brisbane, Australia.
                    </p>
                    <p className="describeAboutme">Here are a few technology I've been working with recently:</p>
                    <ul id="listorder">
                        <li>
                            <SiJavascript className="icon"/> JavaScript (ES6+)
                        </li>
                        <li>
                            <SiPython className="icon"/> Python
                        </li>
                        <li>
                            <FaNodeJs className="icon"/> Node.js
                        </li>
                        <li>
                            <FaReact className="icon"/> React
                        </li>
                        <li>
                            <DiBootstrap className="icon"/> Bootstrap
                        </li>
                        <li>
                            <FaAws className="icon"/> Cloud Service (AWS)
                        </li>
                    </ul>
                    <p className="describeAboutme">I also have a passion with Design, Hardware Programing and Beers.</p>
                </div>
                <img src={photo} alt="" class="imgAbout"></img>
            </div>
        </div>
    )
}

export default About