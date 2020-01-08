import React from 'react';
import { Styled } from 'theme-ui';
import SponsorList from '../gatsby-theme-conference/components/sponsors';
import Layout from 'gatsby-theme-conference/src/components/layout';

const sponsors = [
  {
    id: 'nss',
    name: 'Nashville Software School',
    logo: 'nss-logo',
    tier: 'gold',
    url: 'http://nashvillesoftwareschool.com/',
  },
  {
    id: 'xoi',
    name: 'XOi Technologies',
    logo: 'xoi-logo',
    tier: 'gold',
    url: 'http://www.xoi.io/',
  },
  {
    id: 'vaco',
    name: 'Vaco Technology-Nashville',
    logo: 'vaco-logo',
    tier: 'gold',
    url: 'http://www.vaco.com/',
  },
  {
    id: 'smiledirectclub',
    name: 'SmileDirectClub',
    logo: 'smiledirectclub-logo',
    tier: 'gold',
    url: 'https://smiledirectclub.com/',
  },
  {
    id: 'gatsby',
    name: 'Gatsby',
    logo: 'gatsby-logo',
    tier: 'community',
    url: 'https://gatsbyjs.org',
  },
  {
    id: 'cypress',
    name: 'Cypress.io',
    logo: 'cypress-logo',
    tier: 'community',
    url: 'https://www.cypress.io/',
  },
];

export default (props) => {
  return (
    <Layout>
      <Styled.h1>2019 Archive</Styled.h1>
      <Styled.p>
        UndergroundJS 2019 took place at{' '}
        <Styled.a href="https://www.rocketown.com/">Rocketown</Styled.a> on
        Friday, August 2nd.
      </Styled.p>
      <SponsorList sponsors={sponsors} maxBreakpointSizes={[180, 240, 400]} />
    </Layout>
  );
};
