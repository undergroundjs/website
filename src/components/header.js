import React from "react"
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from "react-bootstrap";
import { Link } from "gatsby";

class Header extends React.Component {
  
  render() {
    return (
        <Navbar expand="lg" sticky="top">
          <Navbar.Brand class="navbarTitle" href="#home">
            <img
              src={require('../images/ugjs-logo-sm-color.png')}
              height="70"
              alt="Underground JS Logo"
              />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <div id="hamburgerButton">
            <span class="icon-bar top-bar"></span>
            <span class="icon-bar middle-bar"></span>
            <span class="icon-bar bottom-bar"></span>	
            </div>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link>
              <Link 
              to="/"
              activeStyle={{
                color: "#f48705",
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
                color: "#f48705",
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
                color: "#f48705",
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
                color: "#f48705",
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
                color: "#f48705",
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
                color: "#f48705",
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
                color: "#f48705",
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
  