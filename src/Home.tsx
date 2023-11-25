import App from "./App";
import Abstract from "./Abstract";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInbox,
  faClock,
  faCalendarPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faMastodon,
} from "@fortawesome/free-brands-svg-icons";
import Button from "react-bootstrap/Button";

function OfficeHours() {
  return (
    <div>
      <h3>
        <FontAwesomeIcon icon={faClock} /> Office Hours
      </h3>
      <p>
        <b>14:00&#8211;16:00 Every Wednesday (Academic Year 2023/24)</b>
      </p>
      <ul>
        <li>Use the below button to book a slot</li>
        <li>
          You can choose specific type of meetings (e.g., modules, personal
          tutor, and others)
        </li>
        <li>Please add a note of the meeting agenda</li>
        <li>
          By default, meetings will be in-person at my office (McCrea 0-14)
        </li>
        <li>
          If you are not able to have an in-person meeting, please let me know
        </li>
      </ul>
      <Button href="https://outlook.office.com/bookwithme/user/2817d6351c804d8fbb61ccd7023a0a93@rhul.ac.uk?anonymous&ep=plink">
        <FontAwesomeIcon icon={faCalendarPlus} /> Book a slot
      </Button>
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
      <Button href="https://linkedin.com/in/handk">
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
      </Button>{" "}
      <Button href="https://github.com/handk85">
        <FontAwesomeIcon icon={faGithub} /> Github
      </Button>{" "}
      <Button href="https://twitter.com/dr_d_han">
        <FontAwesomeIcon icon={faTwitter} /> Twitter
      </Button>{" "}
      <Button href="https://mastodon.social/@dr_d_han" rel="me">
        <FontAwesomeIcon icon={faMastodon} /> Mastodon
      </Button>{" "}
      <br />
      <br />
      <h4>Address:</h4>
      <span>
        Room 0-14, McCrea Building <br />
        Department of Computer Science <br />
        Royal Holloway, University of London <br />
        Egham
        <br />
        TW20 0EX
        <br />
        <br />
      </span>
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

function Home() {
  return (
    <App>
      <Abstract />
      <hr />
      <OfficeHours />
      <hr />
      <Contact />
    </App>
  );
}

export default Home;
