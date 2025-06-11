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
} from "@fortawesome/free-brands-svg-icons";
import { Button, Typography, Divider, List, ListItem } from "@mui/material";

function OfficeHours() {
  return (
    <>
      <Typography variant="h6">
        <FontAwesomeIcon icon={faClock} /> Office Hours
      </Typography>
      <br />
      <Typography>
        <b>14:00&#8211;16:00 Every Tuesday (Term 2, Academic Year 2024/25)</b>
      </Typography>
      <List>
        <ListItem>
          <Typography>
            You can choose specific type of meetings (e.g., modules, personal
            tutor, and others)
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>Please add a note of the meeting agenda</Typography>
        </ListItem>
        <ListItem>
          <Typography>
            By default, meetings will be in-person at my office (McCrea 0-14)
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            If you are not able to have an in-person meeting, please let me know
          </Typography>
        </ListItem>
      </List>
      <Button
        href="https://outlook.office365.com/bookwithme/user/2817d6351c804d8fbb61ccd7023a0a93@rhul.ac.uk?anonymous&ep=plink"
        startIcon={<FontAwesomeIcon icon={faCalendarPlus} />}
      >
        Book a slot
      </Button>
    </>
  );
}

function Contact() {
  return (
    <>
      <Typography variant="h6">
        <FontAwesomeIcon icon={faInbox} /> Contact
      </Typography>
      <Typography variant="subtitle1" mt={2} mb={2}>
        Mail: DongGyun.Han@rhul.ac.uk
      </Typography>
      <Button
        variant="outlined"
        href="https://linkedin.com/in/handk"
        startIcon={<FontAwesomeIcon icon={faLinkedin} />}
      >
        LinkedIn
      </Button>{" "}
      <Button
        variant="outlined"
        href="https://github.com/handk85"
        startIcon={<FontAwesomeIcon icon={faGithub} />}
      >
        Github
      </Button>{" "}
      <Button
        variant="outlined"
        href="https://twitter.com/dr_d_han"
        startIcon={<FontAwesomeIcon icon={faTwitter} />}
      >
        Twitter
      </Button>{" "}
      <br />
      <br />
      <Typography variant="subtitle1">Address:</Typography>
      <Typography>
        Room 0-14, McCrea Building <br />
        Department of Computer Science <br />
        Royal Holloway, University of London <br />
        Egham
        <br />
        TW20 0EX
        <br />
        <br />
      </Typography>
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
      <Divider sx={{ my: 2 }} />
      <Contact />
    </App>
  );
}

export default Home;
