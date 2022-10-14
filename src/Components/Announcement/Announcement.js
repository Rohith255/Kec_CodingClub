import React from "react";
import "./Announcement.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import picBg from "../../assets/announcement.svg";

const Announcement = () => {
  return (
    <div className="announcement">
      <div className="announcement-title">Announcements</div>

      <div className="announcement-body">
        <div className="announce-carousal">
          <Carousel dynamicHeight={true} infiniteLoop={true} autoPlay={true}>
            <div className="announcement-post">
              <h1 className="announcement-heading">Kongu 2k21</h1>
              <h2 className="announcement-desc">
                Conducted by KEC cultural club, On 26-05-2020 Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Veniam expedita quidem
              </h2>
            </div>
            <div className="announcement-post">
              <h1 className="announcement-heading">Enthusia 2k21</h1>
              <h2 className="announcement-desc">
                Conducted by KEC cultural club, On 26-05-2020 Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Veniam expedita quidem
                odio modi architecto, praesentium natus, quaerat magni doloribus
                explicabo.
              </h2>
            </div>
            <div className="announcement-post">
              <h1 className="announcement-heading">Loaded 2k22</h1>
              <h2 className="announcement-desc">
                Conducted by KEC cultural club, On 26-05-2020 Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Veniam expedita quidem
                odio modi cumque, architecto, praesentium natus, quaerat magni
                doloribus explicabo.
              </h2>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
