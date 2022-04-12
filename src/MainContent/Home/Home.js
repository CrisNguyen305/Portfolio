import "./Home.css"
import React from 'react'
import homePageImage from "../../photo/cover-img-1-1.png"

function Home() {
    return (
        <div className="home">
            <div class="text">
            <h3 class="myname">Hi, my name is</h3>
            <h1 class="name">Cris Nguyen.</h1>
            <h1 class="whatido">I'm a Software developer.</h1>
            <p class="describe">
                I design and code beautifully simple things, and I love what I do.
            </p>
        </div>
        <div class="img">
            <img src={homePageImage} alt="" />
        </div>
        </div>
    )
}

export default Home