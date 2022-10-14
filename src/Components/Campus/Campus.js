import React from "react";
import "./Campus.css";
import campus from "../../assets/campus.jpg";
import campus01 from "../../assets/campus01.jpg";
import campus02 from "../../assets/campus02.jpg";

export default function Campus() {
  const card_images = [campus, campus01, campus02];
  const card_header = [
    "World Class Library",
    "Largest Play Ground",
    "Tasty and Healthy Food.",
  ];
  const card_para = [
    "Pursue research at Eduford’s librarien holdings. Whether your focus is oareas or emerging fields, our libraries offer academic resources, a maker hub, collaborative spaces and more.",
    "The College introduces students to philosophy and theology and challenges them to delve deeply into the arts, humanities, languages, social sciences and sciences.",
    "Whether students pursue studies in Arthem well in an ever-changing world.",
  ];
  let index = 0;
  let flag = 0;
  return (
    <div className="Campus-main">
      <div className="Campus-header">
        <h1>Our Activities</h1>
      </div>
      <div className="Campus-para">
        <p>
          We commit to meet the financial need of every admitted undergraduate
          student. We don’t consider your ability to pay when we review your
          application, and we don’t base our decision on whether you can cover
          the cost. If you’re accepted here, you belong here.
        </p>
      </div>
      <div className="Campus-card">
        {card_images.map((data) => {
          return (
            <div className="Campus-card-box">
              <div className="Campus-card-box-01">
                <div className="Campus-card-box-img">
                  <img src={data}></img>
                </div>
              </div>
              <div className="Campus-card-box-header">
                <h2>{card_header[index++]}</h2>
              </div>
              <div className="Campus-card-box-para">{card_para[flag++]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
