import React from "react";
import "./Cards.css";
export default function Cards() {
  const C_header = ["psychology", "emoji_objects", "hub"];
  const C_para = [
    "Conduct workshops on areas of computer science like web development, application development, machine learning, IoT etc. ",
    "Contribute to open source projects, build websites and applications, provide technical support to organizations and various clubs on campus Represent the college at inter-collegiate coding events",
    "Conduct more coding competitions to reach every students of our department. Organizing guest lecture monthly twice to impart coding skills to the students",
  ];
  let index = 0;
  return (
    <div className="Card-details">
      <div className="Card-details-01">
        <div className="Card-header">
          <h2>Our Mission</h2>
        </div>
        <div className="Card-para">
          <p className="para-content">
            To provide a platform for the students Community to enhance their
            coding skills, and to Equip them with the industry standards best
            practices.It provides an environment for relaxation, social
            interaction, education and exchange of thoughts. It serves Tech
            students, staff, faculty, alumni and the greater Lubbock community.
            It enhances the overall educational experiences of students through
            development of, exposure to, and participation in social, cultural,
            multicultural, intellectual, recreational, traditional, community
            service, and campus governance programs.
          </p>
        </div>
        <div className="Card-section">
          {C_header.map((data) => {
            return (
              <div className="Card-details-box">
                <div className="Card-box-header">
                  <span class="material-symbols-outlined">{data}</span>
                </div>
                <div className="Card-box-para">
                  <p>{C_para[index++]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
