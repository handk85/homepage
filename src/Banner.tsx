import { Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";

type BannerColor =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

function Banner(props: { color: BannerColor; content: JSX.Element }) {
  return (
    <Navbar bg={props.color} role="banner">
      <Container>
        <Navbar.Text>
          <FontAwesomeIcon icon={faBullhorn} /> {props.content}
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Banner;
