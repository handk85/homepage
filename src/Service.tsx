import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Spinner from "react-bootstrap/Spinner";
import { load } from "js-yaml";
import { ServiceItem } from "./Types";
import App from "./App";

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
      {!service ? (
        <Spinner animation="border" />
      ) : (
        <>
          <h3>
            <FontAwesomeIcon icon={faLink} /> Service
          </h3>
          <ul>
            {service.map((item, i) => {
              return (
                <li key={i}>{`${item.title}, ${item.venue}, ${item.date}`}</li>
              );
            })}
          </ul>
          {subreview && (
            <p style={{ paddingLeft: "2rem" }}>
              In addition, I was a sub-reviewer for these conferences:&nbsp;
              {subreview.join(", ")}
            </p>
          )}
        </>
      )}
    </App>
  );
}

export default Service;
