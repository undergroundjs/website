import React from "react"
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from "react-bootstrap";
import { Link } from "gatsby"

class Header extends React.Component {
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
        <Navbar className="navbar" expand="lg">
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
            <Nav className="ml-auto">
              <Link 
              to="/"
              activeStyle={{
                color: "red",
              }}
              ref={el => {
                this.myLink = el
              }}
                >
                  Home
              </Link>
              <Link 
              to="/about"
              activeStyle={{
                color: "red",
              }}
              ref={el => {
                this.myLink = el
              }}
                >
                  About
              </Link>
              <Link 
              to="/speakers"
              activeStyle={{
                color: "red",
              }}
              ref={el => {
                this.myLink = el
              }}
                >
                  Speakers
              </Link>
              <Link 
              to="/venue"
              activeStyle={{
                color: "red",
              }}
              ref={el => {
                this.myLink = el
              }}
                >
                  Venue
              </Link>
              <Link 
              to="/sponsors"
              activeStyle={{
                color: "red",
              }}
              ref={el => {
                this.myLink = el
              }}
                >
                  Sponsors
              </Link>
              <Link 
              to="/faq"
              activeStyle={{
                color: "red",
              }}
              ref={el => {
                this.myLink = el
              }}
                >
                  FAQ
              </Link>
              <Link 
              to="/contact"
              activeStyle={{
                color: "red",
              }}
              ref={el => {
                this.myLink = el
              }}
                >
                  Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
  }
}
  
  export default Header
  