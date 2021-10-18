import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import {Link} from 'react-router-dom';


function Header() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://a.trellocdn.com/prgb/dist/images/header-logo-spirit-loading.87e1af770a49ce8e84e3.gif"
              width="70"
              height="20"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar bg="primary" variant="dark">
            <Container>
              <Nav className="me-auto">
                <Link to = "/">
                {/* <Nav.Link>Home</Nav.Link> */}
                <div style={{color:"white"}}>Home</div>
                </Link>
                {/* <Link to ="/:id">
                <Nav.Link href="#Boards">Boards</Nav.Link>
                </Link> */}
              </Nav>
            </Container>
          </Navbar>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
