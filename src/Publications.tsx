import { useState, useEffect, ReactElement } from "react";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faClipboard } from "@fortawesome/free-solid-svg-icons";
import { generateBibtex, getVenue, getAuthors } from "./Paper";
import { Paper, PaperType } from "./Types";
import { load } from "js-yaml";

function generateLink(url: string, name: string): ReactElement {
  return <a href={url}>[{name}]</a>;
}

function objToString(item: Paper): string {
  const venue: string = getVenue(item);
  const authors = getAuthors(item);
  if (item.type === "thesis") {
    return `"${item.title}", ${item.school}, ${item.year}`;
  }
  return `${authors}, "${item.title}", ${venue}, ${item.year}${
    item.note ? `, ${item.note}` : ""
  }`;
}

function BibtexModal(props: any) {
  const [copied, setCopied] = useState(false);

  const paper: Paper = props.paper;
  const bibtex = generateBibtex(paper);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Bibtex</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <pre>{bibtex}</pre>
      </Modal.Body>
      <Modal.Footer>
        <Button
          active={copied}
          onClick={() => {
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 3000);
            navigator.clipboard.writeText(bibtex);
          }}
        >
          <FontAwesomeIcon icon={faClipboard} />{" "}
          {copied ? "Copied" : "Copy to clipboard"}
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Papers(props: { papers: Paper[] }) {
  const [modalShow, setModalShow] = useState(false);
  const [bibtexPaper, setBibtexPaper] = useState<Paper>();
  const { papers } = props;

  return (
    <>
      <ul>
        {papers.map((item) => {
          return (
            <li key={item.id}>
              {objToString(item)} {item.site && generateLink(item.site, "SITE")}
              {item.pdf && generateLink(`${item.pdf}`, "PDF")}
              {item.DOI && generateLink(`https://doi.org/${item.DOI}`, "DOI")}
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
            </li>
          );
        })}
      </ul>
      {bibtexPaper && (
        <BibtexModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          paper={bibtexPaper}
        />
      )}
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

function PaperGroup(props: { paperType: PaperType }) {
  const [papers, setPapers] = useState<Paper[]>();
  const { paperType } = props;

  useEffect(() => {
    (async function () {
      const data = await loadYaml(`./data/${paperType}.yaml`);
      data.forEach((item) => {
        item.type = paperType;
      });
      setPapers(data);
    })();
  }, [paperType]);

  return (
    <>
      <h4 style={{ textTransform: "capitalize" }}>{paperType}</h4>
      {!papers ? <Spinner animation="border" /> : <Papers papers={papers} />}
    </>
  );
}

function Publications() {
  return (
    <>
      <h3>
        <FontAwesomeIcon icon={faBookOpen} /> Publications
      </h3>
      <>
        <PaperGroup paperType="journal" />
        <PaperGroup paperType="conference" />
        <PaperGroup paperType="thesis" />
        <PaperGroup paperType="book" />
      </>
    </>
  );
}

export default Publications;
