import "./Contact.css";
import { MdOutlineMailOutline , MdOutlinePhone } from "react-icons/md"
import React from 'react'


function Contact() {
    return (
        <div className="contact">
            <h1>Get In Touch</h1>
            <div className="container">
                <div className="textContainer">
                    <p className="greetingText">
                        I'm currently looking for opportunities, my inbox is always open.
                        Whether you want to so hi to me, I'll try my best to get back to you very soon!
                    </p>
                    <ul>
                        <li>
                            <MdOutlineMailOutline className="icon" />   vanhuu3005@gmail.com
                        </li>
                        <li>
                            <MdOutlinePhone className="icon" />     0478575053
                        </li>
                    </ul>
                </div>
                <div className="formContainer">

                </div>
            </div>
        </div>
    )
}

export default Contact