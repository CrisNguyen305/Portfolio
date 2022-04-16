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
            <ul className="header_right">
                <li className="nav_items">
                    <Link 
                        className='nav_items'
                        activeClass="active"
                        to={"about"}
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={800}
                        key={1}
                    >
                        About
                    </Link>
                </li>
                <li className="nav_items">
                    <Link 
                        className='nav_items'
                        activeClass="active"
                        to={""}
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        key={1}
                    >
                        Experience
                    </Link>
                </li>
                <li className="nav_items">
                    <Link smooth to={"/about"}>Work</Link>
                </li>
                <li className="nav_items">
                    <Link 
                        className='nav_items'
                        activeClass="active"
                        to={"contact"}
                        spy={true}
                        smooth={true}
                        offset={-180}
                        duration={800}
                        key={1}
                    >
                        Contact me
                    </Link>
                </li>

                <a href={Pdf} target="_blank">
                    <button class="navigation_bar_resume">Resume</button>
                </a>
            </ul>
        </div>
    )
}

export default NavBar