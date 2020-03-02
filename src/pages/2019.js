import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout'

export default () => {
  return (
    <Layout>
      <div>
        <h1>2019 Archive</h1>
        <p>
          UndergroundJS 2019 took place at{' '}
          <a href="https://www.rocketown.com/" component={Link} to="https://www.rocketown.com/">Rocketown</a> on
          Friday, August 2nd.
        </p>
      </div>
      <p>Sponsors</p>
      <p>Speakers</p>
    </Layout>
  );
};
