import Container from "react-bootstrap/Container";
import Abstract from "./Abstract";
import Publications from "./Publications";
import WorkExperience from "./Work";
import Education from "./Education";
import Service from "./Service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox, faFile, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <>
      <h3>
        <FontAwesomeIcon icon={faInbox} /> Contact
      </h3>
      <h4>Work: dha{`n[at]s`}mu.edu.sg</h4>
      <h4>Personal: me[a{`t]`}donggyun.com</h4>
      <Button href="https://twitter.com/handk85" variant="outline-info">
        <FontAwesomeIcon icon={faTwitter} /> Twitter
      </Button>{" "}
      <Button href="https://github.com/handk85" variant="outline-secondary">
        <FontAwesomeIcon icon={faGithub} /> Github
      </Button>{" "}
      <Button href="https://linkedin.com/in/handk" variant="outline-primary">
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
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
        href="https://donggyun.com/cv/DK-CV.pdf"
        variant="outline-success"
      >
        <FontAwesomeIcon icon={faFile} /> View my CV
      </Button>
    </>
  );
}

function App() {
  return (
    <>
      <Abstract />
      <Container>
        <hr />
        <Contact />
        <hr />
        <CV />
        <hr />
        <WorkExperience />
        <hr />
        <Publications />
        <hr />
        <Education />
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
