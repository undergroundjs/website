import React from "react"
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from "react-bootstrap";
import { Link } from "gatsby";
import { element } from "prop-types";

class Header extends React.Component {
  
  dropdown = () => {
       const navEle = element.getElementByClassName('navbar')
       navEle.classList.add("verticalNavbar")
  }

  render() {
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
        <Navbar className="navbar" expand="lg" sticky="top">
          <Navbar.Brand class="navbarTitle" href="#home">
            <img
              src={require('../images/ugjs-square.jpg')}
              width="70"
              height="70"
              // className="d-inline-block align-top"
              alt="Underground JS Logo"
              />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link>
              <Link 
              to="/"
              activeStyle={{
                color: "red",
              }}
              ref={el => {
                this.myLink = el
              }}
              className = "navbarTitle"
                >
                  home
              </Link>
              </Nav.Link>
              <Nav.Link>
              <Link 
              to="/about"
              activeStyle={{
                color: "red",
              }}
              ref={el => {
                this.myLink = el
              }}
              className = "navbarTitle"
                >
                  about
              </Link>
              </Nav.Link>
              <Nav.Link>
              <Link 
              to="/speakers"
              activeStyle={{
                color: "red",
              }}
              ref={el => {
                this.myLink = el
              }}
              className = "navbarTitle"
                >
                  speakers
              </Link>
              </Nav.Link>
              <Nav.Link>
              <Link 
              to="/venue"
              activeStyle={{
                color: "red",
              }}
              ref={el => {
                this.myLink = el
              }}
              className = "navbarTitle"
                >
                  venue
              </Link>
              </Nav.Link>
              <Nav.Link>
              <Link 
              to="/sponsors"
              activeStyle={{
                color: "red",
              }}
              ref={el => {
                this.myLink = el
              }}
              className = "navbarTitle"
                >
                  sponsors
              </Link>
              </Nav.Link>
              <Nav.Link>
              <Link 
              to="/faq"
              activeStyle={{
                color: "red",
              }}
              ref={el => {
                this.myLink = el
              }}
              className = "navbarTitle"
                >
                  faq
              </Link>
              </Nav.Link>
              <Nav.Link>
              <Link 
              to="/contact"
              activeStyle={{
                color: "red",
              }}
              ref={el => {
                this.myLink = el
              }}
              className = "navbarTitle"
                >
                  contact
              </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
  }
}
  
  export default Header
  