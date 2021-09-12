import { useState, useEffect, ReactElement } from "react";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faClipboard } from "@fortawesome/free-solid-svg-icons";
import { Paper, generateBibtex, PaperType } from "./Paper";
import { load } from "js-yaml";

const YAML_LOCATIONS: Record<PaperType, string> = {
  conference: "./data/proceedings.yaml",
  journal: "./data/journals.yaml",
  thesis: "./data/thesis.yaml",
};

function generateLink(url: string, name: string): ReactElement {
  return <a href={url}>[{name}]</a>;
}

function getVenue(item: Paper) {
  switch (item.type) {
    case "journal":
      return item.journal;
    case "conference":
      return item.booktitle;
    case "thesis":
      return item.school;
  }
}

function getAuthors(item: Paper) {
  const authors: string[] = item.author.map((author) => {
    return `${author.given[0]}. ${author.family}`;
  });
  authors[authors.length - 1] = `and ${authors[authors.length - 1]}`;
  return authors.join(", ");
}

function objToString(item: Paper): string {
  const venue: string = getVenue(item);
  const authors = getAuthors(item);
  if (item.type === "thesis") {
    return `"${item.title}", ${item.school}, ${item.year}`;
  }
  return `${authors}, "${item.title}", In ${venue}, ${item.year}`;
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
              {item.pdf &&
                generateLink(`https://donggyun.com/pdfs/${item.pdf}`, "PDF")}
              {item.DOI && generateLink(`https://doi.org/${item.DOI}`, "DOI")}
              {item.type !== "thesis" && (
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
  const [papers, setPapers] = useState<Paper[]>([]);
  const { paperType } = props;

  useEffect(() => {
    (async function () {
      const data = await loadYaml(YAML_LOCATIONS[paperType]);
      data.forEach((item) => {
        item.type = paperType;
      });
      setPapers(data);
    })();
  }, [paperType]);

  return (
    <>
      <h4 style={{ textTransform: "capitalize" }}>{paperType}</h4>
      {papers.length < 1 ? (
        <Spinner animation="border" />
      ) : (
        <Papers papers={papers} />
      )}
    </>
  );
}

function Publications() {
  return (
    <>
      <h3>
        <FontAwesomeIcon icon={faBook} /> Publications
      </h3>
      <>
        <PaperGroup paperType="journal" />
        <PaperGroup paperType="conference" />
        <PaperGroup paperType="thesis" />
        <h4>Book</h4>
        <ul>
          <li>
            Authored by D. Mark and J. LaMarche, Translated by D. Han (English
            to Korean), "More iPhone 3 Development", Wikibooks, 2010
          </li>
        </ul>
      </>
    </>
  );
}

export default Publications;
