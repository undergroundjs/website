import React from 'react';
import { Styled, css } from 'theme-ui';
import { Container } from 'theme-ui/layout';
import SponsorList from '../gatsby-theme-conference/components/sponsors';
import SpeakerList from '../gatsby-theme-conference/components/speakers';
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

const speakers = [
  {
    id: 'stephaniewinn',
    name: 'Stephanie Winn',
    bio: 'Building a strong developer community for the future',
    image:
      'https://pbs.twimg.com/profile_images/1189064959201812480/1K711-ON_400x400.jpg',
    company: ' ',
    twitter: 'https://twitter.com/steph_happens',
    github: 'https://github.com/stephhappens',
  },
  {
    id: 'matthewtrask',
    name: 'Matt Trask',
    bio: 'Mental Health: you and me!',
    image: 'https://pbs.twimg.com/media/D7WdzuUWsAAFbvq?format=jpg&name=small',
    company: ' ',
    twitter: 'https://twitter.com/matthewtrask',
    github: 'https://github.com/matthewtrask',
  },
  {
    id: 'karaluton',
    name: 'Kara Luton',
    bio: 'From Tutus To Tech: Looking Back on Transitioning Careers (Twice!)',
    image:
      'https://pbs.twimg.com/profile_images/1010566462782701568/6sDbHiB0_400x400.jpg',
    company: ' ',
    twitter: 'https://twitter.com/karaluton',
    github: 'https://github.com/karaluton',
  },
  {
    id: 'jeromehardaway',
    name: 'Jerome Hardaway',
    bio: 'Writing Newbie Friendly Code In Production',
    image:
      'https://pbs.twimg.com/profile_images/1162117898816708608/XPIzXKb3_400x400.jpg',
    company: ' ',
    twitter: 'https://twitter.com/jeromehardaway',
    github: 'https://github.com/jeromehardaway',
  },
  {
    id: 'sethalexander',
    name: 'Seth Alexander',
    bio: 'Nurturing Community: 4 years of freeCodeCamp Nashville',
    image:
      'https://pbs.twimg.com/profile_images/1158966614290829312/h36r18s9_400x400.jpg',
    company: ' ',
    twitter: 'https://twitter.com/itzsaga',
    github: 'https://github.com/itzsaga',
  },
  {
    id: 'kevinold',
    name: 'Kevin Old',
    bio: 'Intro to End to End Testing with Cypress.io',
    image:
      'https://pbs.twimg.com/profile_images/511294403286020096/I7MmjdYS_400x400.jpeg',
    company: ' ',
    twitter: 'https://twitter.com/kevinold',
    github: 'https://github.com/kevinold',
  },
  {
    id: 'tysoncadenhead',
    name: 'Tyson Cadenhead',
    bio: 'GraphQL Schema Design',
    image:
      'https://pbs.twimg.com/profile_images/474643664036057089/KR4th7CZ_400x400.jpeg',
    company: ' ',
    twitter: 'https://twitter.com/tysoncadenhead',
    github: 'https://github.com/tysoncadenhead',
  },
  {
    id: 'AmandaHasenzahl',
    name: 'Amanda Hasenzahl',
    bio: 'Introduction to Image Accessibility',
    image:
      'https://pbs.twimg.com/profile_images/1103736063229595649/nceoLODq_400x400.jpg',
    company: ' ',
    twitter: 'https://twitter.com/alhasenzahl',
    github: 'https://github.com/alhasenzahl',
  },
  {
    id: 'TannerPlauche',
    name: 'Tanner Plauché',
    bio: 'Integrating Web Audio and Web Speech APIs into applications',
    image: 'https://avatars1.githubusercontent.com/u/12735406?s=460&v=4',
    company: ' ',
    twitter: 'https://twitter.com/thePhonetician',
    github: 'https://github.com/tannerplauche',
  },
  {
    id: 'SeanHamlet',
    name: 'Sean Hamlet',
    bio: 'Loop, Stack, and Queue: How Async works in a Single threaded world',
    image: 'https://avatars3.githubusercontent.com/u/12764330?s=460&v=4',
    company: ' ',
    twitter: 'https://twitter.com/shamletion',
    github: 'https://github.com/shamlet',
  },
  {
    id: 'LauraPinell',
    name: 'Laura Pinell',
    bio: 'Thinking In React: A Presentation on ReactJS Component Hierarchies',
    image: 'https://avatars1.githubusercontent.com/u/18263563?s=400&v=4',
    company: ' ',
    twitter: 'https://twitter.com/laurapinell',
    github: 'https://github.com/lapinell',
  },
];

export default (props) => {
  return (
    <Layout>
      <Container
        css={css({
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
        })}
      >
        <Styled.h1>2019 Archive</Styled.h1>
        <Styled.p>
          UndergroundJS 2019 took place at{' '}
          <Styled.a href="https://www.rocketown.com/">Rocketown</Styled.a> on
          Friday, August 2nd.
        </Styled.p>
      </Container>
      <SponsorList sponsors={sponsors} maxBreakpointSizes={[180, 240, 400]} />
      <SpeakerList speakers={speakers} showViewAll={false} />
    </Layout>
  );
};
