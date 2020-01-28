import React from 'react';
import { Link } from 'gatsby';
import { Styled } from 'theme-ui';
import { Box, Container } from 'theme-ui/layout';
import SectionHeading from 'gatsby-theme-conference/src/components/section-heading';
import FlexList from 'gatsby-theme-conference/src/components/flex-list';
import SpeakerCard from 'gatsby-theme-conference/src/components/speaker-card';

export default ({ speakers = [], showViewAll = true }) => (
  <Box id="speakers" py={5}>
    <Container>
      <SectionHeading>Speakers</SectionHeading>
      <FlexList
        css={{
          justifyContent: 'center',
        }}
      >
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.id} as="li" {...speaker} />
        ))}
      </FlexList>
      {showViewAll && (
        <Box
          css={{
            textAlign: 'center',
          }}
        >
          <Styled.a as={Link} to="/speakers">
            View all speakers
          </Styled.a>
        </Box>
      )}
    </Container>
  </Box>
);
