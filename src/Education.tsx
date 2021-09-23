import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { ReactNode, useEffect, useState } from "react";
import { load } from "js-yaml";
import { Spinner } from "react-bootstrap";
import { EducationItem } from "./Types";

function Education() {
  const [education, setEducation] = useState<EducationItem[]>();
  useEffect(() => {
    fetch("./data/education.yaml").then(async (response) => {
      const text = await response.text();
      const data = (await load(text)) as EducationItem[];
      setEducation(data);
    });
  }, []);

  return (
    <>
      <h3>
        <FontAwesomeIcon icon={faGraduationCap} /> Education
      </h3>
      {!education ? (
        <Spinner animation="border" />
      ) : (
        <ul>
          {education.map((item) => {
            return (
              <li>
                {item.degree}, {item.department},{" "}
                {item.schoolUrl ? (
                  <a href={item.schoolUrl}>{item.school}</a>
                ) : (
                  item.school
                )}
                , {item.period}
                {item.thesis && (
                  <ul>
                    <li>Thesis: {item.thesis}</li>
                  </ul>
                )}
                {item.supervisor && (
                  <ul>
                    <li>
                      {item.supervisor.length < 2
                        ? "Supervisor"
                        : "Supervisors"}
                      :{" "}
                      {item.supervisor
                        .map<ReactNode>((item) => {
                          return item.homepage ? (
                            <span>
                              <a href={item.homepage}>{item.name}</a>{" "}
                              {item.note && `(${item.note})`}
                            </span>
                          ) : (
                            <span>
                              {item.name} {item.note && `(${item.note})`}
                            </span>
                          );
                        })
                        .reduce((prev, curr) => [prev, ", ", curr])}
                    </li>
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Education;
