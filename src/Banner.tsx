import { Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";

function Banner(props: { content: string }) {
  return (
    <Navbar bg="info" role="banner">
      <Container>
        <Navbar.Text>
          <FontAwesomeIcon icon={faBullhorn} /> {props.content}
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Banner;
