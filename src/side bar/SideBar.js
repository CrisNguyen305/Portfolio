import React from 'react'
import "./SideBar.css"

function SideBar() {
    return (
        <div className='sidebar'>
            <a target="_blank" href="https://www.facebook.com/nvhuu.305" title="Facebook">
                <i class='bx bxl-facebook' id="fb"></i>
            </a>
            <a target="_blank" href="https://www.linkedin.com/feed" title="Linkedin">
                <i class='bx bxl-linkedin' id="linked" ></i>
            </a>
            <a target="_blank" href="https://www.instagram.com/ngvhuu/" title="Instagram">
                <i class='bx bxl-instagram' id="ig"></i>
            </a>
            <a target="_blank"  href="https://github.com/HariGold" title="Github">
                <i class='bx bxl-github' id="git"></i>
            </a>
        </div>
    )
}

export default SideBar;