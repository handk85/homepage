import { useState, useEffect, ReactElement } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  Typography,
  Link,
  CircularProgress,
  Divider,
} from "@mui/material";
import App from "./App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faClipboard } from "@fortawesome/free-solid-svg-icons";
import { generateBibtex, getVenue, getAuthors } from "./Paper";
import { Paper } from "./Types";
import { load } from "js-yaml";

function generateLink(url: string, name: string): ReactElement {
  return <Link href={url}>[{name}]</Link>;
}

function objToString(item: Paper): string {
  const venue: string = getVenue(item);
  const authors = getAuthors(item);
  if (item.type === "thesis") {
    return `[THESIS] "${item.title}", ${item.school}, ${item.year}`;
  }
  return `${authors}, "${item.title}", ${venue}, ${item.year}${
    item.note ? ` (${item.note})` : ""
  }`;
}

function BibtexModal(props: any) {
  const [copied, setCopied] = useState(false);

  const paper: Paper = props.paper;
  const bibtex = generateBibtex(paper);
  return (
    <Dialog
      {...props}
      maxWidth="xl"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <DialogTitle id="alert-dialog-title">Bibtex</DialogTitle>
      <DialogContent>
        <pre>{bibtex}</pre>
      </DialogContent>
      <DialogActions>
        <Button
          disabled={copied}
          onClick={() => {
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 3000);
            navigator.clipboard.writeText(bibtex);
          }}
          startIcon={<FontAwesomeIcon icon={faClipboard} />}
        >
          {copied ? "Copied" : "Copy to clipboard"}
        </Button>
        <Button onClick={props.onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

function Papers(props: { papers: Paper[] }) {
  const [modalShow, setModalShow] = useState(false);
  const [bibtexPaper, setBibtexPaper] = useState<Paper>();
  const { papers } = props;

  const perYear: { [year: string]: Paper[] } = papers.reduce((result, item) => {
    result[item.year] = result[item.year] || [];
    result[item.year].push(item);
    return result;
  }, Object.create(null));

  const years = Object.keys(perYear).sort((a, b) => parseInt(b) - parseInt(a));
  return (
    <>
      {years.map((y) => {
        return (
          <>
            <Typography variant="h6" style={{ paddingTop: "10px" }}>
              {y}
            </Typography>
            <List>
              {perYear[y].map((item) => {
                return (
                  <ListItem>
                    <ListItemText>
                      {objToString(item)}{" "}
                      {item.site && generateLink(item.site, "SITE")}
                      {item.pdf && generateLink(`${item.pdf}`, "PDF")}
                      {item.DOI &&
                        generateLink(`https://doi.org/${item.DOI}`, "DOI")}
                      {item.type !== "thesis" && item.type !== "book" && (
                        <a
                          href=""
                          onClick={(e) => {
                            e.preventDefault();
                            setModalShow(true);
                            setBibtexPaper(item);
                          }}
                        >
                          [Bibtex]
                        </a>
                      )}
                    </ListItemText>
                  </ListItem>
                );
              })}
            </List>
            {bibtexPaper && (
              <BibtexModal
                open={modalShow}
                onClose={() => setModalShow(false)}
                paper={bibtexPaper}
              />
            )}
          </>
        );
      })}
    </>
  );
}

async function loadYaml(path: string) {
  const response = await fetch(path);
  const text = await response.text();
  const data: Paper[] = (await load(text)) as Paper[];
  data.sort((a: Paper, b: Paper) => {
    return b.year - a.year;
  });
  return data;
}

function PaperList() {
  const [papers, setPapers] = useState<Paper[]>();

  useEffect(() => {
    (async function () {
      const data = await loadYaml(`./data/publications.yaml`);
      setPapers(data);
    })();
  }, []);

  return <>{!papers ? <CircularProgress /> : <Papers papers={papers} />}</>;
}

function Publications() {
  return (
    <App>
      <Typography variant="h5">
        <FontAwesomeIcon icon={faBookOpen} /> Publications
      </Typography>
      <>
        <br />
        <Typography variant="h6">Bibliographic Profiles</Typography>
        <Button
          href="https://orcid.org/0000-0002-8599-2197"
          variant="outlined"
          startIcon={<i className="ai ai-orcid" />}
        >
          ORCID
        </Button>{" "}
        <Button
          href="https://scholar.google.com/citations?user=gfAdVBwAAAAJ"
          variant="outlined"
          startIcon={<i className="ai ai-google-scholar" />}
        >
          Scholar
        </Button>{" "}
        <Button
          href="https://dblp.org/pid/35/10082.html"
          variant="outlined"
          startIcon={<i className="ai ai-dblp" />}
        >
          DBLP
        </Button>
        <Divider sx={{ my: 4 }} />
      </>
      <PaperList />
    </App>
  );
}

export default Publications;
