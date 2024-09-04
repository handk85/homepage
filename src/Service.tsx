import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { load } from "js-yaml";
import { ServiceItem } from "./Types";
import App from "./App";
import { Typography, List, ListItem, CircularProgress } from "@mui/material";

function Service() {
  const [servicePerYear, setServicePerYear] =
    useState<{ [year: string]: ServiceItem[] }>();
  const [years, setYears] = useState<string[]>();

  useEffect(() => {
    fetch("./data/service.yaml").then(async (response) => {
      const text = await response.text();
      const data = (await load(text)) as {
        service: ServiceItem[];
        subreview: string[];
      };

      const perYear = data.service.reduce((result, item) => {
        const year: string = item.date.slice(-4);
        result[year] = result[year] || [];
        result[year].push(item);
        return result;
      }, Object.create(null));

      setYears(
        Object.keys(perYear).sort(
          (a, b) => parseInt(b.slice(-4)) - parseInt(a.slice(-4))
        )
      );

      setServicePerYear(perYear);
    });
  }, []);

  return (
    <App>
      <Typography variant="h5">
        <FontAwesomeIcon icon={faLink} /> Service
      </Typography>
      <br />
      <br />
      {!years && <CircularProgress />}
      {years &&
        years.map((y) => {
          return (
            <>
              <Typography variant="h6">{y}</Typography>
              <List>
                {servicePerYear &&
                  servicePerYear[y] &&
                  servicePerYear[y].map((item, i) => {
                    return (
                      <ListItem key={i}>
                        <Typography>
                          {`${item.title}, ${item.venue}, ${item.date}`}
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

export default Service;
