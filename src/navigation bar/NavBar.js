import React from 'react'
import "./NavBar.css"
import Pdf from "../Documentation/Huu Nguyen (Resume).pdf"

function NavBar() {
    return (
        <div className='header'>
            <div className="header_left">Cris.</div>
            <div className="header_right">
                <i class="navigation_bar">About</i>
                <i class="navigation_bar">Experience</i>
                <i class="navigation_bar">Work</i>
                <i class="navigation_bar">Contact me</i>
                <a href={Pdf} target="_blank">
                    <button class="navigation_bar_resume">Resume</button>
                </a>
            </div>
        </div>
    )
}

export default NavBar