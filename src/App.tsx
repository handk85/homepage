import Container from "react-bootstrap/Container";
import Abstract from "./Abstract";
import Publications from "./Publications";
import WorkExperience from "./Work";
import Education from "./Education";
import TeachingExperience from "./Teaching";
import Service from "./Service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInbox,
  faFile,
  faUser,
  faIdBadge,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import Button from "react-bootstrap/Button";
import Banner from "./Banner";
import "academicons/css/academicons.css";

function Contact() {
  return (
    <>
      <h3>
        <FontAwesomeIcon icon={faInbox} /> Contact
      </h3>
      <h4>Work: dha{`n[at]s`}mu.edu.sg</h4>
      <h4>Personal: me[a{`t]`}donggyun.com</h4>
      <Button href="https://github.com/handk85" variant="outline-secondary">
        <FontAwesomeIcon icon={faGithub} /> Github
      </Button>{" "}
      <Button href="https://linkedin.com/in/handk" variant="outline-primary">
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
      </Button>{" "}
      <Button href="https://twitter.com/handk85" variant="outline-info">
        <FontAwesomeIcon icon={faTwitter} /> Twitter
      </Button>{" "}
    </>
  );
}

function CV() {
  return (
    <>
      <h3>
        <FontAwesomeIcon icon={faUser} /> Curriculum Vitae
      </h3>
      <Button
        href="https://donggyun.com/pdfs/DK-CV.pdf"
        variant="outline-success"
      >
        <FontAwesomeIcon icon={faFile} /> View my CV
      </Button>
    </>
  );
}

function BibliographicProfiles() {
  return (
    <>
      <h3>
        <FontAwesomeIcon icon={faIdBadge} /> Bibliographic Profiles{" "}
      </h3>
      <Button
        href="https://orcid.org/0000-0002-8599-2197"
        variant="outline-success"
      >
        <i className="ai ai-orcid" /> ORCID
      </Button>{" "}
      <Button
        href="https://scholar.google.com/citations?user=gfAdVBwAAAAJ"
        variant="outline-success"
      >
        <i className="ai ai-google-scholar" /> Google Scholar
      </Button>{" "}
      <Button
        href="https://dblp.org/pid/35/10082.html"
        variant="outline-success"
      >
        <i className="ai ai-dblp" /> DBLP
      </Button>{" "}
      <Button
        href="https://academic.microsoft.com/profile/2e50hi11-f21i-4941-8020-ieg85847jg8i/handk85/"
        variant="outline-success"
      >
        <FontAwesomeIcon icon={faMicrosoft} /> Microsoft Academic
      </Button>
    </>
  );
}

function App() {
  return (
    <>
      <Banner
        color="success"
        content={
          <span>
            I started a blog{" "}
            <a href="https://blog.donggyun.com">https://blog.donggyun.com</a>
          </span>
        }
      />
      <Banner
        color="info"
        content={
          <span>
            I am looking for a faculty position in software engineering
          </span>
        }
      />
      <Abstract />
      <Container>
        <hr />
        <BibliographicProfiles />
        <hr />
        <CV />
        <hr />
        <Contact />
        <hr />
        <Publications />
        <hr />
        <Education />
        <hr />
        <WorkExperience />
        <hr />
        <TeachingExperience />
        <hr />
        <Service />
        <footer style={{ marginTop: "5rem", marginBottom: "3rem" }}>
          <hr />
          <p className="text-center">
            &copy; 2021 DongGyun Han. The&nbsp;
            <a href="https://github.com/handk85/react-homepage">
              source code of this homepage
            </a>
            &nbsp;is available at Github. Please feel free to extend it for your
            own homepage.
          </p>
        </footer>
      </Container>
    </>
  );
}

export default App;
