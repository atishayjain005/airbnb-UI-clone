import React from 'react'
import "./liveanywhere.scss"
import one from "../../assets/one.jpg";
import two from "../../assets/two.jpg"
import three from "../../assets/three.jpg"
import four from "../../assets/four.jpg"

export default function Liveanywhere() {
    return (
        <div className="section2">
            <h1>Live anywhere</h1>
            <div className="wrapper">
                <div className="card1">
                    <picture>
                        <img src={one} alt="" />
                    </picture>
                    <p>Outdoor getaways</p>
                </div>
                <div className="card1">
                    <picture>
                        <img src={two} alt="" />
                    </picture>
                    <p>Unique stays</p>
                </div>
                <div className="card1">
                    <picture>
                        <img src={three} alt="" />
                    </picture>
                    <p>Entire homes</p>
                </div>
                <div className="card1">
                    <picture>
                        <img src={four} alt="" />
                    </picture>
                    <p>Pets allowed</p>
                </div>
            </div>
            <div className="container">
                <div className="trySomething">
                    <h1>Try hosting</h1>
                    <p>Earn extra income and unlock new opportunities by sharing your space.</p>
                    <button className="learnMore">Learn more</button>
                </div>
            </div>
        </div>
    )
}
