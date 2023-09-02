import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function App(props: any) {
  return (
    <>
      <Navbar expand="lg" style={{ marginBottom: "1rem" }}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            DongGyun Han
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link as={Link} to="/publications">
                Publications
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/teaching">
                Teaching
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/service">
                Service
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container style={{ minHeight: "1000px" }}>{props.children}</Container>

      <footer style={{ marginTop: "5rem", marginBottom: "3rem" }}>
        <Container>
          <hr />
          <p className="text-center">
            &copy; 2021 DongGyun Han. The&nbsp;
            <a href="https://github.com/handk85/academic-homepage">
              source code of this homepage
            </a>
            &nbsp;is available at Github. Please feel free to extend it for your
            own homepage.
          </p>
        </Container>
      </footer>
    </>
  );
}

export default App;
