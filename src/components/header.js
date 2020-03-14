import React from "react"
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from "react-bootstrap";
import { Link } from "gatsby"

const Header = () => {
    return (
      // <header class="navbar">
      //   <a href="/" component={Link} to="/" class="navbarTitle">
      //     UndergroundJS
      //   </a>
      //   <nav>
      //     <ul>
      //       <li>
      //         <Link to="/about">
      //           About
      //         </Link>
      //       </li>
      //       <li>
      //         <Link to="/contact">
      //           Contact
      //         </Link>
      //       </li>
      //     </ul>
      //   </nav>
      // </header>
        <Navbar bg="dark" expand="lg">
          <Navbar.Brand class="navbarTitle" href="#home">
            <img
              src={require('../images/ugjs-square.jpg')}
              width="70"
              height="70"
              // className="d-inline-block align-top"
              alt="Underground JS Logo"
              />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/speakers">Speakers</Nav.Link>
              <Nav.Link href="/venue">Venue</Nav.Link>
              <Nav.Link href="/become-a-sponsor">Sponsors</Nav.Link>
              <Nav.Link href="/faq">FAQ</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
  }
  
  export default Header
  