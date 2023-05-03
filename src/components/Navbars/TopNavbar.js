import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Button} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase.js";
import { signOut } from "firebase/auth";

import "../../assets/css/navbar.css";

function TopNavbar() {
  const navigate = useNavigate();
  return (
    <Navbar variant="light" bg="light" className="text-dark navbar-whole">
      <Container >
        <Navbar.Brand href="#home">Practice Makes Progress</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-dark">
            <Nav.Link href="#home" className="navItem">Home</Nav.Link>
            <Nav.Link href="#link" className="navItem">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Button onClick={ () => {signOut(auth); navigate("/admin");}}>Sign out</Button>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;