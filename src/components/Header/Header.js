import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {

  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" >Authentic Homemade Food</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
            </Nav>
            <Nav>
              <Nav.Link href="home#services">Services</Nav.Link>
              <Nav.Link as={CustomLink} to="/blogs">Blogs</Nav.Link>
              <Nav.Link as={CustomLink} to="/about">About Us</Nav.Link>
              {
                user ?
                <button onClick={handleSignOut} className="btn btn-link text-decoration-none text-white">SignOut</button>
                :
                <Nav.Link as={CustomLink  } to="/login">
                SignIn
              </Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
