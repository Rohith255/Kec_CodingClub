import React from 'react'
import './Hero.css'
export default function Hero() {
  return (
    <div className="Hero-main">
      <div className="Hero-navbar">
        <div className="Hero-navbar-logo">
          <img
            src="https://kongu.edu/images/klogo.png"
            width="50%"
            height="95%"
          ></img>
        </div>
        <div className="Hero-navbar-logins">
          <div className="Hero-navbar-logins-01">
            <button className="btn-01">Login</button>
            <button className="btn-02">Create Account</button>
          </div>
        </div>
      </div>
      <div className="Hero-section">
        <div className="Hero-section-01">
          <div className="Hero-section-header">
            <h1>KEC - Coding Club</h1>
          </div>
          <div className="Hero-section-para">
            <p>
              We’re a leading research university with a heart. Founded in the
              decade that the U.S. Constitution was signed, we’re the nation’s
              oldest Catholic and Jesuit university. Today we’re a
              forward-looking, diverse community devoted to social justice,
              restless inquiry and respect for each person’s individual needs
              and talents..
            </p>
          </div>
          <div className='Hero-section-button'>
            <button>Get's Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
