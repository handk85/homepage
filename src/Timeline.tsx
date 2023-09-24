import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import Spinner from "react-bootstrap/Spinner";
import { load } from "js-yaml";
import { EducationItem, Work, TimelineItem } from "./Types";
import App from "./App";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  const [education, setEducation] = useState<EducationItem[]>();
  useEffect(() => {
    fetch("./data/education.yaml").then(async (response) => {
      const text = await response.text();
      const data = (await load(text)) as EducationItem[];
      setEducation(data);
    });
  }, []);

  const [work, setWork] = useState<Work[]>();
  useEffect(() => {
    fetch("./data/work.yaml").then(async (response) => {
      const text = await response.text();
      const data: Work[] = (await load(text)) as Work[];
      setWork(data);
    });
  }, []);

  const [items, setItems] = useState<TimelineItem[]>();
  useEffect(() => {
    if (!education || !work) {
      return;
    }

    const tempItems: Array<TimelineItem> = [];
    education.forEach((item) => {
      const t: TimelineItem = {
        title: item.degree,
        affiliation: item.school,
        date: item.period.match(/\d+/g)![0],
        type: "education",
      };
      tempItems.push(t);
    });
    work.forEach((item) => {
      const t: TimelineItem = {
        title: item.title,
        affiliation: `${item.affiliation}`,
        city: `${item.city}, ${item.country}`,
        date: `${item.begin.year} - ${item.end ? item.end.year : "Present"}`,
        type: "work",
      };
      if (item.end && item.begin.year === item.end.year) {
        t.date = `${item.begin.year}`;
      }
      tempItems.push(t);
    });

    tempItems.sort((a, b) => (a.date > b.date ? -1 : 1));
    setItems(tempItems);
    console.log(tempItems);
  }, [education, work]);

  return (
    <App style={{ background: "#aaa" }}>
      <h3>
        <FontAwesomeIcon icon={faClock} /> Timeline
      </h3>
      {!items ? (
        <Spinner animation="border" />
      ) : (
        <>
          <VerticalTimeline lineColor="#aaa">
            {items.map((item) => {
              return (
                <VerticalTimelineElement
                  contentStyle={{ background: "#eee" }}
                  contentArrowStyle={{ borderRight: "15px solid #eee" }}
                  className={`vertical-timeline-element--${item.type}`}
                  iconStyle={{
                    background:
                      item.type === "work"
                        ? "rgb(33, 150, 243)"
                        : "rgb(233, 30, 99)",
                    color: "#fff",
                  }}
                  icon={
                    <FontAwesomeIcon
                      size="lg"
                      icon={
                        item.type === "work" ? faBriefcase : faGraduationCap
                      }
                    />
                  }
                  date={item.date}
                >
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.affiliation}
                  </h4>
                  {item.city && (
                    <h4 className="vertical-timeline-element-subtitle">
                      {item.city}
                    </h4>
                  )}
                  <p>{item.description}</p>
                </VerticalTimelineElement>
              );
            })}
            <VerticalTimelineElement
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            />
          </VerticalTimeline>
        </>
      )}
    </App>
  );
}

export default Timeline;
