import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import { load } from "js-yaml";
import { Teaching } from "./Types";
import App from "./App";
import { Typography, List, ListItem, CircularProgress } from "@mui/material";

function TeachingExperience() {
  const [teachingPerYear, setTeachingPerYear] =
    useState<{ [year: string]: Teaching[] }>();
  const [years, setYears] = useState<string[]>();

  useEffect(() => {
    fetch("./data/teaching.yaml").then(async (response) => {
      const text = await response.text();
      const data: Teaching[] = (await load(text)) as Teaching[];

      const perYear = data.reduce((result, item) => {
        const year: string = item.date;
        result[year] = result[year] || [];
        result[year].push(item);
        return result;
      }, Object.create(null));

      setYears(
        Object.keys(perYear).sort(
          (a, b) => parseInt(b.slice(-2)) - parseInt(a.slice(-2))
        )
      );
      setTeachingPerYear(perYear);
    });
  }, []);

  return (
    <App>
      <Typography variant="h5">
        <FontAwesomeIcon icon={faChalkboardTeacher} /> Teaching
      </Typography>
      {!years && <CircularProgress />}
      <br />
      <br />
      {years &&
        years.map((y) => {
          return (
            <>
              <Typography variant="h6">{y}</Typography>
              <List>
                {teachingPerYear &&
                  teachingPerYear[y] &&
                  teachingPerYear[y].map((item, i) => {
                    return (
                      <ListItem key={i}>
                        <Typography>
                          {`${item.course}, ${item.school}, ${item.date}`}
                        </Typography>
                      </ListItem>
                    );
                  })}
              </List>
            </>
          );
        })}
    </App>
  );
}

export default TeachingExperience;
