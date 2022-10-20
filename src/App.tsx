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
  faPenFancy,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Button from "react-bootstrap/Button";
import "academicons/css/academicons.css";

function OfficeHours() {
  return (
    <div>
      <h3>
        <FontAwesomeIcon icon={faClock} /> Office Hours
      </h3>
      <p>
        <b>14:00&#8211;16:00 Every Tuesday (Autumn Term, 2022)</b>
      </p>
      <ul>
        <li>Upon request via mail</li>
        <li>First come, first served</li>
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <>
      <h3>
        <FontAwesomeIcon icon={faInbox} /> Contact
      </h3>
      <h4>Mail: DongGyun.Han@rhul.ac.uk</h4>
      <Button href="https://blog.donggyun.com" variant="outline-success">
        <FontAwesomeIcon icon={faPenFancy} /> Blog
      </Button>{" "}
      <Button href="https://github.com/handk85" variant="outline-secondary">
        <FontAwesomeIcon icon={faGithub} /> Github
      </Button>{" "}
      <Button href="https://linkedin.com/in/handk" variant="outline-primary">
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
      </Button>{" "}
      <Button href="https://twitter.com/dr_d_han" variant="outline-info">
        <FontAwesomeIcon icon={faTwitter} /> Twitter
      </Button>{" "}
      <Button
        href="https://donggyun.com/pdfs/CV-DongGyun.pdf"
        variant="outline-success"
      >
        <FontAwesomeIcon icon={faFile} /> CV
      </Button>{" "}
      <br />
      <br />
      <h4>Address:</h4>
      <p>Room 0-14, McCrea Building,</p>
      <p>Department of Computer Science,</p>
      <p>Royal Holloway, University of London,</p>
      <p>Egham, Surrey, TW20 0EX</p>
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.774438575285!2d-0.5651530670257586!3d51.425569988794315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876772fe423337f%3A0x2337180a1e018f1!2sMcCrea%20Building!5e0!3m2!1sen!2suk!4v1659102801074!5m2!1sen!2suk"
        width="100%"
        height="400em"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
      ></iframe>
    </>
  );
}

function App() {
  return (
    <>
      <Abstract />
      <Container>
        <hr />
        <OfficeHours />
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
            <a href="https://github.com/handk85/academic-homepage">
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
