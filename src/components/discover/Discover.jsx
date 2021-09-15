import React from 'react'
import "./discover.scss" ;
import six from "../../assets/six.jpg";
import seven from "../../assets/seven.jpg"   ;
import eight from "../../assets/eight.jpg"   ;   

export default function Discover() {
  return (
    <div className="section3">
    <h1>Discover things to do</h1>
      <div className="wrapper">
          <div className="cards">
              <picture>
                  <img src={six} alt="" />
              </picture>
              <p>Olympians & Paralympians</p>
              <blockquote>Online activities hosted by athletes.</blockquote>
          </div>
          <div className="cards">
              <picture>
                  <img src={seven} alt="" />
              </picture>
              <p>Online Experiences</p>
              <blockquote>Live, interactive activities led by Hosts.</blockquote>
          </div>
          <div className="cards">
              <picture>
                  <img src={eight} alt="" />
              </picture>
              <p>Experiences</p>
              <blockquote>Find unforgettable activities near you.</blockquote>
          </div>
      </div>
    </div>
  )
}
