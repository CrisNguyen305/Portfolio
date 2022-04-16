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
                        If you have request or any question, don’t hesitate to use the form. I'll try my best to get back to you very soon!
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
                    <form action="">
                        {/* <label htmlFor="name">Name</label> */}
                        <input type="text" placeholder="Name" className="inputName" />
                        <input type="text" placeholder="Email" className="inputEmail"/>
                        <input type="text" placeholder="Subject" className="inputSubject"/>
                        <input type="text" placeholder="Message" className="inputMessage"/>
                        <button className="sendMessage">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact