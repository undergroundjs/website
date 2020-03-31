import React from "react"
import { Link } from "gatsby"

const Header = () => {
    return (
      <header className="navbar">
        <a href="/" component={Link} to="/" className="navbarTitle">
          UndergroundJS
        </a>
        {/* <nav>
          <ul>
            <li>
              <Link to="/about">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav> */}
      </header>
    )
  }
  
  export default Header
  