import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";
import { FaFlagCheckered } from "react-icons/fa";
import { GiPodiumWinner } from "react-icons/gi";
import { BiCurrentLocation, BiRun } from "react-icons/bi";
import { VscDebugStart } from "react-icons/vsc";

const Timeline = () => {
  return (
    <div className="timeline">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2016"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaFlagCheckered />}
        >
          <h3 className="vertical-timeline-element-title">Established</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Kick started the club as a small initiative
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2017"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<BiRun />}
        >
          <h3 className="vertical-timeline-element-title">RVCE Hacks</h3>
          <h4 className="vertical-timeline-element-subtitle">Winner</h4>
          <p>Coding winner description </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="February 2017"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<VscDebugStart />}
        >
          <h3 className="vertical-timeline-element-title">GSOC Headstart</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Winner of the competation
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<GiPodiumWinner />}
        >
          <h3 className="vertical-timeline-element-title">CODE WARS</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>Another Trophy filled up the closet</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="February 2017"
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<BiCurrentLocation />}
        >
          <h3 className="vertical-timeline-element-title">PRESENT</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Inauguration 2022
          </h4>
          <p>
            Activities Include Weekly Sessions, Building the club website, many
            probelm solving techniques and much more
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
