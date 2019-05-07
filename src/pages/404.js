import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { container } from '../lib/styles';
import { Link } from 'gatsby';

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div css={[container]}>
        <h1 css={{ margin: '1.5rem 0' }}>Page not Found!</h1>

        <Link to="/">Back home</Link>
      </div>
    </Layout>
  );
}
