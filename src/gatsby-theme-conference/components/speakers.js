import React from 'react';
import { Link } from 'gatsby';
import { Styled } from 'theme-ui';
import { Box, Container } from 'theme-ui/layout';
import SectionHeading from 'gatsby-theme-conference/src/components/section-heading';
import FlexList from 'gatsby-theme-conference/src/components/flex-list';
import SpeakerCard from 'gatsby-theme-conference/src/components/speaker-card';

export default ({ speakers = [] }) => {
  const keynoteSpeakers = speakers.filter((speaker, i) => i < 3);
  const nonKeynoteSpeakers = speakers.filter((speaker, i) => i > 2);

  return (
    <Box id="speakers" py={5}>
      <Container>
        <SectionHeading>Speakers</SectionHeading>
        <FlexList
          css={{
            justifyContent: 'center',
          }}
        >
          {keynoteSpeakers
            .sort(() => 0.5 - Math.random())
            .map((speaker) => (
              <SpeakerCard key={speaker.id} as="li" {...speaker} />
            ))}
        </FlexList>
        <FlexList
          css={{
            justifyContent: 'center',
          }}
        >
          {nonKeynoteSpeakers
            .sort(() => 0.5 - Math.random())
            .map((speaker) => (
              <SpeakerCard key={speaker.id} as="li" {...speaker} />
            ))}
        </FlexList>
        <Box
          css={{
            textAlign: 'center',
          }}
        >
          <Styled.a as={Link} to="/speakers">
            View all speakers
          </Styled.a>
        </Box>
      </Container>
    </Box>
  );
};
