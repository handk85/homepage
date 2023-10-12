import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faGuitar } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Row, Col, Card } from "react-bootstrap";
import App from "./App";

function Youtube(props: { url: string }) {
  const { url } = props;
  return (
    <iframe
      width="560"
      height="315"
      src={url}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
}

function Music() {
  return (
    <App>
      <h3>
        <FontAwesomeIcon icon={faMusic} /> Music
      </h3>
      <Row>
        <Col md="auto">
          <Card style={{ width: "350px" }}>
            <Card.Img src="./dk.jpg" alt="In a gig" />
          </Card>
          <Card.Body>
            <Card.Text>Hope and Anchor, London, UK, 25 August 2016</Card.Text>
          </Card.Body>
        </Col>
        <Col>
          <p>
            In my free time, I love to play musical instruments. I mostly play
            electric guitar, but I also can play acoustic guitar, bass, and
            piano at a basic level. Playing music helps me relieve stress.
            Therefore, I always have at least an electric guitar with me
            whenever I move around the world. Rather than exercising a specific
            song (I am lazy and not good at memorising something…), I love to
            improvise over diverse backing tracks available on YouTube. I also
            have a basic songwriting skills, so I write my own songs sometimes.
          </p>
        </Col>
      </Row>

      <hr />

      <h3>
        <FontAwesomeIcon icon={faYoutube} /> Videos
      </h3>

      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card style={{ width: "562px" }}>
            <Youtube url="https://www.youtube.com/embed/C9Ncz6B6fX8?si=rvAxcbGCZKMV_smD" />
            <Card.Body>
              <Card.Title>Wham! - Last Christmas (cover)</Card.Title>
              <Card.Text>Berlin, Germany, 26 July 2020</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "562px" }}>
            <Youtube url="https://www.youtube.com/embed/KQjBOIO8N98?si=dZmyrIeqczn7bHss" />
            <Card.Body>
              <Card.Title>
                Toy - 내가 너의 곁에 잠시 살았다는걸 (cover)
              </Card.Title>
              <Card.Text>Berlin, Germany, 25 November 2019</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "562px" }}>
            <Youtube url="https://www.youtube.com/embed/mEGWIXHneb0?si=KdS5-OUldjIv4gtR" />
            <Card.Body>
              <Card.Title>Improvisation on C</Card.Title>
              <Card.Text>Seattle, US, 15 December 2018</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "562px" }}>
            <Youtube url="https://www.youtube.com/embed/8Ma4zfZlWyI?si=azsjkY7wdrLy_nAi" />
            <Card.Body>
              <Card.Title>Jason Mraz - Not so usual (cover)</Card.Title>
              <Card.Text>
                Roadtrip & The Workshop, London, UK, 23 June 2017
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "562px" }}>
            <Youtube url="https://www.youtube.com/embed/WxBt_WMWH7g?si=HRFjfef-q-g9l83O" />
            <Card.Body>
              <Card.Title>The Huges - Winter Hate Song</Card.Title>
              <Card.Text>Hope & Anchor, London, UK, 25 August 2016</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "562px" }}>
            <Youtube url="https://www.youtube.com/embed/XQ2bM1s6cYM?si=fLWlawPShDtRy9S4" />
            <Card.Body>
              <Card.Title>Coldplay - Yellow (cover)</Card.Title>
              <Card.Text>The Water Rats, London, UK, 10 June 2016</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <br />
      <hr />
      <h3>
        <FontAwesomeIcon icon={faGuitar} /> Guitars that I owned
      </h3>
      <ul>
        <li>
          Epiphone Les Paul Standard 60s (Bourbon Burst), 2022&#8211;Present
          &#8212; Using in UK
        </li>
        <li>
          Squire Classic Vibe 70s Stratocaster HSS (Walnut), 2021&#8211;2022
          &#8212; Used in Singapore
        </li>
        <li>
          PRS SE Custom 24 (Tampas Green), 2019&#8211;2021 &#8212; Used in
          Berlin
        </li>
        <li>
          Epiphone Les Paul Custom Pro (Ebony), 2017&#8211;2018 &#8212; Used in
          Seattle and UK
        </li>
        <li>
          American Standard Stratocaster (Sienna Sunburst), 2016&#8211;Present
          &#8212; Used in New York, UK, Seattle, Korea
        </li>
        <li>
          Epiphone Dot ES-335 (Cherry), 2015&#8211;2016 &#8212; Used in UK
        </li>
        <li>
          Epiphone Les Paul Standard (Cherry Sunburst), 2012&#8211;2015 &#8212;
          Used in Hong Kong and Korea
        </li>
        <li>
          Squire Stratorcaster (Sunburst), 2004&#8211;2012 &#8212; Used in Korea
          and Hong Kong
        </li>
      </ul>
    </App>
  );
}

export default Music;
