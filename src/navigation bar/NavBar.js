import React from 'react'
import "./NavBar.css"
import Pdf from "../Documentation/Huu Nguyen (Resume).pdf"
// import { Link } from 'react-router-dom'
// import { HashLink as Link} from "react-router-hash-link"
import {Link} from "react-scroll"

function NavBar() {
    return (
        <div className='header'>
            <div className="header_left">
                <Link 
                    activeClass="active"
                    to={"home"}
                    spy={true}
                    smooth={true}
                    offset={-250}
                    duration={500}
                    key={1}
                > 
                    Cris.
                </Link>
            </div>
            <div className="header_right">
                <Link 
                    activeClass="active"
                    to={"about"}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    key={1}
                >
                    About
                </Link>
                <Link smooth to={"/about"}>Experience</Link>
                <Link smooth to={"/about"}>Work</Link>
                <Link smooth to={"/about"}>Contact me</Link>
                {/* <i class="navigation_bar"></i>
                <i class="navigation_bar">Experience</i>
                <i class="navigation_bar">Work</i>
                <i class="navigation_bar">Contact me</i> */}
                <a href={Pdf} target="_blank">
                    <button class="navigation_bar_resume">Resume</button>
                </a>
            </div>
        </div>
    )
}

export default NavBar