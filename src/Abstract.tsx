import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Abstract() {
  return (
    <Container style={{ marginTop: "2rem", marginBottom: "1rem" }}>
      <Row>
        <Col md="auto">
          <Figure>
            <Figure.Image width={200} alt="DongGyun Han" src="./profile.jpg" />
          </Figure>
        </Col>
        <Col>
          <h2>DongGyun Han</h2>
          <h4>Research Scientist, Singapore Management University</h4>
          Dr. DongGyun Han is a research scientist (postdoc) at{" "}
          <a href="https://soarsmu.github.io/">
            SOftware Analytics Research (SOAR) group
          </a>{" "}
          and <a href="https://smc.smu.edu.sg/">Secure Mobile Centre</a> at{" "}
          <a href="https://www.smu.edu.sg">
            Singapore Management University (SMU)
          </a>
          . He is mainly working on the intersection between cybersecurity and
          software engineering under the supervision of{" "}
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
          His main research interests are empirical study, AI for software
          engineering (AI4SE), code review, and software binary analysis.
        </Col>
      </Row>
    </Container>
  );
}

export default Abstract;
