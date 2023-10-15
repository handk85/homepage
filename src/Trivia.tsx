import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faGuitar, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Row, Col, Card } from "react-bootstrap";
import App from "./App";

function Youtube(props: { title: string; desc: string; url: string }) {
  return (
    <Col>
      <Card style={{ width: "562px" }}>
        <iframe
          width="560"
          height="315"
          src={props.url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

function Music() {
  return (
    <>
      <h3>
        <FontAwesomeIcon icon={faMusic} /> Music
      </h3>
      <Row>
        <Col md="auto">
          <Card style={{ width: "350px" }}>
            <Card.Img src="./dk.jpg" alt="In a gig" />
          </Card>
          <Card.Body>
            <Card.Text>
              <p className="text-secondary">
                Hope and Anchor, London, UK, 25 August 2016
              </p>
            </Card.Text>
          </Card.Body>
        </Col>
        <Col>
          <p>
            In my free time, I love to play musical instruments. I mostly play
            electric guitar, but I also can play acoustic guitar, bass, and
            piano at a basic level. Playing music helps me relieve stress.
            Therefore, I always have at least an electric guitar with me
            whenever I relocate to a city. Rather than exercising a specific
            song (I am lazy and not good at memorising something…), I love to
            improvise over diverse backing tracks available on YouTube. I also
            have basic songwriting skills, so I write my own songs sometimes.
          </p>
        </Col>
      </Row>

      <br />

      <h4>
        <FontAwesomeIcon icon={faYoutube} /> Videos
      </h4>

      <Row xs={1} md={2} className="g-4">
        <Youtube
          title="Wham! - Last Christmas (cover)"
          desc="Berlin, Germany, 26 July 2020"
          url="https://www.youtube.com/embed/C9Ncz6B6fX8?si=rvAxcbGCZKMV_smD"
        />
        <Youtube
          title="Toy - 내가 너의 곁에 잠시 살았다는걸 (cover)"
          desc="Berlin, Germany, 25 November 2019"
          url="https://www.youtube.com/embed/KQjBOIO8N98?si=dZmyrIeqczn7bHss"
        />
        <Youtube
          title="Improvisation on C"
          desc="Seattle, US, 15 December 2018"
          url="https://www.youtube.com/embed/mEGWIXHneb0?si=KdS5-OUldjIv4gtR"
        />
        <Youtube
          title="Jason Mraz - Not so usual (cover)"
          desc="Roadtrip & The Workshop, London, UK, 23 June 2017"
          url="https://www.youtube.com/embed/8Ma4zfZlWyI?si=azsjkY7wdrLy_nAi"
        />
        <Youtube
          title="The Huges - Winter Hate Song"
          desc="Hope & Anchor, London, UK, 25 August 2016"
          url="https://www.youtube.com/embed/WxBt_WMWH7g?si=HRFjfef-q-g9l83O"
        />
        <Youtube
          title="Coldplay - Yellow (cover)"
          desc="The Water Rats, London, UK, 10 June 2016"
          url="https://www.youtube.com/embed/XQ2bM1s6cYM?si=fLWlawPShDtRy9S4"
        />
      </Row>

      <br />
      <h4>
        <FontAwesomeIcon icon={faGuitar} /> Guitars that I owned
      </h4>
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
    </>
  );
}

function Island() {
  return (
    <>
      <h3>
        <FontAwesomeIcon icon={faGlobe} /> Island
      </h3>
      <br />
      <blockquote className="blockquote">
        <p>
          I was born on an island and have spent most of my lifetime on multiple
          islands.
        </p>
      </blockquote>
      <p>
        Jeju Island is a beautiful place where I was born and grew up until my
        early twenties. Then, I was in Hong Kong and the UK for my master and
        PhD degrees, respectively. During my postdoc, I was in Singapore. Of
        course, I have chances to live in non-island cities as well. When I
        spent three months in New York for an internship, however, I was in
        Manhattan (which is an island). When I worked in Berlin after finishing
        my PhD, my office was on the Museum island.
      </p>
    </>
  );
}

function Trivia() {
  return (
    <App>
      <Island />
      <hr />
      <Music />
    </App>
  );
}

export default Trivia;
