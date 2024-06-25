import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { load } from "js-yaml";
import { Work } from "./Types";
import { Typography, List, ListItem } from "@mui/material";

function WorkExperience() {
  const [work, setWork] = useState<Work[]>();

  useEffect(() => {
    fetch("./data/work.yaml").then(async (response) => {
      const text = await response.text();
      const data: Work[] = (await load(text)) as Work[];
      setWork(data);
    });
  }, []);

  return (
    <>
      <Typography variant="h5">
        <FontAwesomeIcon icon={faBriefcase} /> Work Experience
      </Typography>
      <List>
        {work &&
          work.map((item, i) => {
            return (
              <ListItem key={i}>
                <Typography>
                  {item.title},{" "}
                  {item.url ? (
                    <a href={item.url}>{item.affiliation}</a>
                  ) : (
                    item.affiliation
                  )}
                  , {item.city}, {item.country}, {item.begin.month}{" "}
                  {item.begin.year}&#8211;
                  {item.end ? `${item.end.month} ${item.end.year}` : "Present"}
                </Typography>
              </ListItem>
            );
          })}
      </List>
    </>
  );
}

export default WorkExperience;
