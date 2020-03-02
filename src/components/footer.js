import React from 'react'
import { Link } from 'gatsby';

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
                        <a href="/code-of-conduct" component={Link} to="/code-of-conduct">
                            Code of Conduct
                        </a>
                    </ul>
                    <ul>
                        <a href="/become-a-sponsor" component={Link} to="/become-a-sponsor">
                            Become a Sponsor
                        </a>
                    </ul>
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
                </div>
                <div class="social">
                    <ul>
                        <a href="https://twitter.com/undergroundjs" component={Link} to="https://twitter.com/undergroundjs">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                        </a>
                    </ul>
                </div>
            </div>
            <p class="copyright">
                © 2019 UndergroundJS, Inc.
            </p>
        </footer>
    )
}

export default Footer