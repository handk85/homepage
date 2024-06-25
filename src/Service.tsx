import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { load } from "js-yaml";
import { ServiceItem } from "./Types";
import App from "./App";
import { Typography, List, ListItem } from "@mui/material";

function Service() {
  const [service, setService] = useState<ServiceItem[]>();
  const [subreview, setSubreview] = useState<string[]>();

  useEffect(() => {
    fetch("./data/service.yaml").then(async (response) => {
      const text = await response.text();
      const data = (await load(text)) as {
        service: ServiceItem[];
        subreview: string[];
      };
      setService(data.service);
      setSubreview(data.subreview);
    });
  }, []);

  return (
    <App>
      <Typography variant="h5">
        <FontAwesomeIcon icon={faLink} /> Service
      </Typography>
      <List>
        {service &&
          service.map((item, i) => {
            return (
              <ListItem key={i}>
                <Typography>
                  {`${item.title}, ${item.venue}, ${item.date}`}
                </Typography>
              </ListItem>
            );
          })}
      </List>
      {subreview && (
        <Typography style={{ paddingLeft: "2rem" }}>
          In addition, I was a sub-reviewer for these conferences:&nbsp;
          {subreview.join(", ")}
        </Typography>
      )}
    </App>
  );
}

export default Service;
