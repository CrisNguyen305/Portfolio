import "./Experience.css"
import React from 'react'
import { MdOutlinePlayArrow } from "react-icons/md"

function Experience() {
    return (
        <div className="experiencePage">
            <h1>What I've learned</h1>
            <div className="containerFirstItem">
                <h2>University</h2>
                <h3>Study at <a id="schoolLink" target={"_blank"} href="https://www.qut.edu.au/study?utm_source=goog
                        le&utm_medium=cpc&utm_campaign=qut_undergraduate_school_leaver_keyword&
                        gclid=Cj0KCQjw0umSBhDrARIsAH7FCofVg8gfVijoIAWWDJNHULcHG4z4Obbo3o5vyUowRfKTScH7tTEnIVwaAtCQEALw_wcB"> 
                        Queensland University of Technology (QUT)</a></h3>
                <p>Feb 2020 - Present</p>
                <ul>
                    <li><MdOutlinePlayArrow className="icon"/>Work with a variety of different programing languages and built multiple related projects.</li>
                    <li><MdOutlinePlayArrow className="icon"/>Study and improve Data Structure and Algorithm.</li>
                    <li><MdOutlinePlayArrow className="icon"/>Learn and built some web-based projects.</li>
                    <li><MdOutlinePlayArrow className="icon"/>Communicate with multi-disciplinary teams of 
                        engineers, designers, producers, and clients on a daily basis.</li>
                </ul>
            </div>
            <div className="containerSecondItem">
                <h2>High school</h2>
                <h3>Study at <a id="schoolLink" target={"_blank"} href="https://en.wikipedia.org
                /wiki/Le_Quy_Don_High_School_for_the_Gifted,_Danang"> 
                Le Quy Don High School for the Gifted</a> (Major subject Informatics)</h3>
                <p>Sep 2016 - May 2019</p>
                <ul>
                    <li><MdOutlinePlayArrow className="icon"/>Learned Data Structure and Algorithms with C++.</li>
                    <li><MdOutlinePlayArrow className="icon"/>Worked with Hardware Programming using C.</li>
                </ul>
            </div>
        </div>
    )
}


export default Experience