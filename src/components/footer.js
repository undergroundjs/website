import React from 'react'
import { Link } from 'gatsby';
import { Twitter } from 'react-feather';

const Footer = () => {
    return (
        <footer class="footer">
            <div class='footerMenu'>
                <div class="archive">
                    <ul>
                        <a href="/2019" component={Link} to="/2019">
                            2019 Archive
                        </a>
                    </ul>
                </div>
                <div class="pages">
                    <ul>
                        <a href="/faq" component={Link} to="/faq">
                            FAQ
                        </a>
                    </ul>
                    <ul>
                        <a href="/about" component={Link} to="/about">
                            About
                        </a>
                    </ul>
                    <ul>
                        <a href="/code-of-conduct" component={Link} to="/code-of-conduct">
                            Code of Conduct
                        </a>
                    </ul>
                    <ul>
                        <a href="/become-a-sponsor" component={Link} to="/become-a-sponsor">
                            Become a Sponsor
                        </a>
                    </ul>
                </div>
                <div class="social">
                    <ul>
                        <a href="https://twitter.com/undergroundjs" component={Link} to="https://twitter.com/undergroundjs">
                            <Twitter />
                        </a>
                    </ul>
                </div>
            </div>
            <p class="copyright">
                © 2020 UndergroundJS, Inc.
            </p>
        </footer>
    )
}

export default Footer