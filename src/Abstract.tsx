import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

function playFirstName() {
  var audio = new Audio("donggyun.m4a");
  audio.play();
}

function Abstract() {
  return (
    <Container style={{ marginTop: "2rem", marginBottom: "1rem" }}>
      <Row className="align-items-center">
        <Col md="auto">
          <img src="./profile.jpg" width={200} alt="DongGyun Han" />
        </Col>
        <Col>
          <h2>
            DongGyun
            <sup style={{ fontSize: "60%" }}>
              <FontAwesomeIcon icon={faVolumeUp} onClick={playFirstName} />
            </sup>{" "}
            Han
          </h2>
          <h5>Lecturer</h5>
          <h5>Department of Computer Science</h5>
          <h5>Royal Holloway, University of London</h5>
          Dr DongGyun Han is a lecturer (assistant professor) at the{" "}
          <a href="https://www.cs.rhul.ac.uk/">
            Department of Computer Science
          </a>{" "}
          at{" "}
          <a href="https://www.royalholloway.ac.uk/">
            Royal Holloway, University of London
          </a>
          . He is mainly working on software engineering research. His main
          research interests are empirical study, AI for software engineering
          (AI4SE), code review, and software binary analysis. He was a research
          scientist (postdoc) at{" "}
          <a href="https://soarsmu.github.io/">
            SOftware Analytics Research (SOAR) group
          </a>{" "}
          and <a href="https://smc.smu.edu.sg/">Secure Mobile Centre</a> at{" "}
          <a href="https://www.smu.edu.sg">
            Singapore Management University (SMU)
          </a>{" "}
          under the supervision of{" "}
          <a href="https://flyer.sis.smu.edu.sg">Debin Gao</a> and{" "}
          <a href="http://www.mysmu.edu/faculty/davidlo/">David Lo</a>. Before
          joining SMU, he was a software development engineer at{" "}
          <a href="https://aws.amazon.com">Amazon Web Services</a>. He completed
          his PhD at the{" "}
          <a href="http://ucl.ac.uk">University College London (UCL)</a> under
          the supervision of{" "}
          <a href="http://www0.cs.ucl.ac.uk/staff/j.krinke/">Jens Krinke</a>,{" "}
          <a href="http://www0.cs.ucl.ac.uk/staff/M.Harman/">Mark Harman</a>,
          and{" "}
          <a href="http://www0.cs.ucl.ac.uk/staff/F.Sarro/">Federica Sarro</a>.
          He has worked for{" "}
          <a href="https://itc.kaist.ac.kr/">
            KAIST Institute for IT Convergence
          </a>{" "}
          as a researcher. He received his MPhil. at the{" "}
          <a href="http://www.ust.hk">
            Hong Kong University of Science and Technology (HKUST)
          </a>{" "}
          under the supervision of{" "}
          <a href="http://www.cse.ust.hk/~hunkim">Sung Kim</a>. He received
          B.Eng. in{" "}
          <a href="http://ce.jejunu.ac.kr">Computer Engineering Department</a>{" "}
          at <a href="http://jejunu.ac.kr">Jeju National University</a> under
          the supervision of{" "}
          <a href="http://cybertec.jejunu.ac.kr/profile.html">Hoyoung Kwak</a>.
        </Col>
      </Row>
    </Container>
  );
}

export default Abstract;
