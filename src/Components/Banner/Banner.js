import React from "react";
import "./Banner.css";
import Typewriter from "typewriter-effect";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Logo from "../../assets/cClub_logo.jpeg";
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner_nav">
        <div className="icon">
          <img src={Logo} className="icon_img" />
        </div>
        <div className="banner_menu">
          <div className="banner_menu_container">
            <div className="menu-item">Home</div>
            <div className="menu-item">About</div>
            <div className="menu-item login">Sign In</div>
            <div className="menu-item">Sign Up</div>
          </div>
        </div>
      </div>
      <div className="banner_content">
        <div className="heading"> Welcome to</div>
        <div className="heading2">
          <Typewriter
            options={{
              strings: ["Coding Club", "MCA"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <div className="banner_button">
          Let's Get Started
          <div className="swipe_down">
            <span class="material-symbols-outlined down">expand_more</span>
            <span class="material-symbols-outlined ">expand_more</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
