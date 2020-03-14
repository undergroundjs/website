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
        <Navbar class="navbar" expand="sm">
          <Navbar.Brand href="#home">
            <img
              src="..\..\images\ugjs-square.jpg"
              with="30"
              height="30"
              className="d-inline-block align-top"
              alt="Underground JS Logo"
              />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
  }
  
  export default Header
  