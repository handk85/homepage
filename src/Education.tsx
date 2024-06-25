import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { ReactNode, useEffect, useState } from "react";
import { load } from "js-yaml";
import { EducationItem } from "./Types";
import { Typography, List, ListItem } from "@mui/material";

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
      <Typography variant="h5">
        <FontAwesomeIcon icon={faGraduationCap} /> Education
      </Typography>
      {education && (
        <List dense={true}>
          {education.map((item) => {
            return (
              <List dense={true}>
                <ListItem>
                  <Typography>
                    {item.degree}, {item.department},{" "}
                    {item.schoolUrl ? (
                      <a href={item.schoolUrl}>{item.school}</a>
                    ) : (
                      item.school
                    )}
                    , {item.period}
                    {item.thesis && (
                      <List dense={true} component="div" disablePadding>
                        <ListItem>
                          <Typography>Thesis: {item.thesis}</Typography>
                        </ListItem>
                        {item.supervisor && (
                          <ListItem>
                            <Typography>
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
                                      {item.name}{" "}
                                      {item.note && `(${item.note})`}
                                    </span>
                                  );
                                })
                                .reduce((prev, curr) => [prev, ", ", curr])}
                            </Typography>
                          </ListItem>
                        )}
                      </List>
                    )}
                  </Typography>
                </ListItem>
              </List>
            );
          })}
        </List>
      )}
    </>
  );
}

export default Education;
