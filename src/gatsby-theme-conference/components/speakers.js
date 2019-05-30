import React from 'react'
import { Link } from 'gatsby'
import { Styled } from 'theme-ui'
import { Box, Container } from 'theme-ui/layout'
import SectionHeading from '../../../node_modules/gatsby-theme-conference/src/components/section-heading'
import FlexList from '../../../node_modules/gatsby-theme-conference/src/components/flex-list'
import SpeakerCard from '../../../node_modules/gatsby-theme-conference/src/components/speaker-card'

export default ({speakers = [] }) =>
  <Box
    id='speakers'
    py={5}>
    <Container>
      <SectionHeading>
        Speakers
      </SectionHeading>
      <FlexList
        css={{
          justifyContent: 'center',
        }}>
        {speakers.sort(() => 0.5 - Math.random())
          .map(speaker => (
          <SpeakerCard
            key={speaker.id}
            as='li'
            {...speaker}
          />
        ))}
      </FlexList>
      <Box
        css={{
          textAlign: 'center'
        }}>
        <Styled.a
          as={Link}
          to='/speakers'>
          View all speakers
        </Styled.a>
      </Box>
    </Container>
  </Box>
