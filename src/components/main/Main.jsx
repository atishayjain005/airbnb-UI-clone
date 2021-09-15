import React from 'react'
import "./main.scss"
import jaipur from "../../assets/jaipur.png"
import udaipur from "../../assets/udaipur.png"
import nashik from "../../assets/nashik.png"
import ahmedabad from "../../assets/ahmedabad.png"
import igatpuri from "../../assets/igatpuri.png"
import indore from "../../assets/indore.png"
import bhopal from "../../assets/bhopal.png"
import vadodra from "../../assets/vadodra.png"

export default function Main() {
  return (
    <div>
    <div className="section1">
      <h1>Explore nearby</h1>
      <div className="nearbyDestinations">
        <div className="location">
          <a href="#">
            <div className="picture">
              <picture >
                <img src={jaipur}></img>
              </picture>
            </div>
            <div className="details">
              <div className="destination">
                <b>Jaipur</b>
              </div>
              <div className="time">7.5-hour drive</div>
            </div>
          </a>
        </div>
        <div className="location">
          <a href="#">
            <div className="picture">
              <picture>
                <img src={udaipur}></img>
              </picture>
            </div>
            <div className="details">
              <div className="destination">
                <b>Udaipur</b>
              </div>
              <div className="time">6-drive</div>
            </div>
          </a>
        </div>
        <div className="location">
          <a href="#">
            <div className="picture">
              <picture>
                <img src={nashik}></img>
              </picture>
            </div>
            <div className="details">
              <div className="destination">
                <b>Nashik</b>
              </div>
              <div className="time">5.5-hour</div>
            </div>
          </a>
        </div>
        <div className="location">
          <a href="#">
            <div className="picture">
              <picture>
                <img src={ahmedabad}></img>
              </picture>
            </div>
            <div className="details">
              <div className="destination">
                <b>Ahmedabad</b>
              </div>
              <div className="time">5.5-hour</div>
            </div>
          </a>
        </div>
        <div className="location">
          <a href="#">
            <div className="picture">
              <picture>
                <img src={igatpuri}></img>
              </picture>
            </div>
            <div className="details">
              <div className="destination">
                <b>Igatpuri</b>
              </div>
              <div className="time">6-hour drive</div>
            </div>
          </a>
        </div>
        <div className="location">
          <a href="#">
            <div className="picture">
              <picture>
                <img src={indore}></img>
              </picture>
            </div>
            <div className="details">
              <div className="destination">
                <b>Indore</b>
              </div>
              <div className="time">15-minute drive</div>
            </div>
          </a>
        </div>
        <div className="location">
          <a href="#">
            <div className="picture">
              <picture>
                <img src={bhopal}></img>
              </picture>
            </div>
            <div className="details">
              <div className="destination">
                <b>Bhopal</b>
              </div>
              <div className="time">3-hour drive</div>
            </div>
          </a>
        </div>
        <div className="location">
          <a href="#">
            <div className="picture">
              <picture>
                <img src={vadodra}></img>
              </picture>
            </div>
            <div className="details">
              <div className="destination">
                <b>Vadodra</b>
              </div>
              <div className="time">5-hour drive</div>
            </div>
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}
