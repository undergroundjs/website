import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout'
import '../styles/index.scss'

export default () => {
  return (
    <Layout>
      <div class="banner">
          <div class="spacer">
          </div>
          <h1 class="title">
              JavaScript conference hosted in Nashville.
          </h1>
          <div class="cta">
              <a href="https://sessionize.com/ugjs-2020" component={Link} to="https://sessionize.com/ugjs-2020">
                  CFP Now Open
              </a>
              <a href="/code-of-conduct" component={Link} to="/code-of-conduct">
                  Buy Tickets
              </a>
          </div>
      </div>
    </Layout>
  );
};