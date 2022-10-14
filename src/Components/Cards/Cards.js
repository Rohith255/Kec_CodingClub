import React from "react";
import "./Cards.css";
export default function Cards() {
  const C_header = ["psychology", "emoji_objects", "hub"];
  const C_para = [
    "For decades, Eduford College has improved the health of our communities, one graduate at a time. The JoAnn McGrath School of Nursing and Health Professions, as one of the largest nursing schools in Wisconsin, offers a wide array of fully accredited nursing programs, guaranteed clinical placements and a technology-rich Center for Clinical Education.",
    "Building on our strong roots in leadership, health care and education, Eduford is proud to offer an array of coed graduate programs for women and men who are ready to advance their careers and grow as leaders. The Eduford College Community Psychology Master's program will help you to meet your goals of becoming a Licensed Professional Counselor.",
    "The Eduford, as one of the largest nursing schools in Wisconsin, offers a wide array of fully accredited nursing programs, guaranteed clinical placements and a technology-rich Center for Clinical Education. The Eduford College Community Psychology Master's program will help you to meet your goals of becoming a Licensed Professional Counselor.",
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
            Student Activities complements the University's academic programs.
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
