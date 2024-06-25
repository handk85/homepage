import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import { load } from "js-yaml";
import { Teaching } from "./Types";
import App from "./App";
import { Typography, List, ListItem } from "@mui/material";

function TeachingExperience() {
  const [teaching, setTeaching] = useState<Teaching[]>();

  useEffect(() => {
    fetch("./data/teaching.yaml").then(async (response) => {
      const text = await response.text();
      const data: Teaching[] = (await load(text)) as Teaching[];
      setTeaching(data);
    });
  }, []);

  return (
    <App>
      <Typography variant="h5">
        <FontAwesomeIcon icon={faChalkboardTeacher} /> Teaching
      </Typography>
      <List>
        {teaching &&
          teaching.map((item, i) => {
            return (
              <ListItem key={i}>
                <Typography>
                  {`${item.course}, ${item.school}, ${item.date}`}
                </Typography>
              </ListItem>
            );
          })}
      </List>
    </App>
  );
}

export default TeachingExperience;
