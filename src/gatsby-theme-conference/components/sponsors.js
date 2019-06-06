import React from 'react';
import { Styled, css } from 'theme-ui';
import { Box, Container } from 'theme-ui/layout';
import SectionHeading from 'gatsby-theme-conference/src/components/section-heading';
import FlexList from 'gatsby-theme-conference/src/components/flex-list';
import Card from 'gatsby-theme-conference/src/components/card';
import { useStaticQuery, graphql } from 'gatsby';

export default ({ sponsors = [] }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { eq: "svg" } }) {
        nodes {
          name
          publicURL
        }
      }
    }
  `);

  const {
    allFile: { nodes: images },
  } = data;

  console.log(data, images);

  return (
    <Box
      id="sponsors"
      py={5}
      css={css({
        display: 'flex',
        flexDirection: 'column',
      })}
    >
      <Container>
        <SectionHeading>Sponsors</SectionHeading>
        <FlexList
          css={{
            justifyContent: 'center',
          }}
        >
          {sponsors.map((sponsor, i) => (
            <Card as="li" key={sponsor.id}>
              <Styled.a title={sponsor.name} href={sponsor.url}>
                <Styled.img
                  src={
                    images.find(({ name }) => name === sponsor.logo).publicURL
                  }
                  alt={sponsor.name}
                  css={css({
                    width:
                      i === 0 ? [360, 600, 740, 920] : [250, 414, 510, 635],
                    mb: 2,
                    mx: 'auto',
                    alignSelf: 'center',
                  })}
                />
              </Styled.a>
            </Card>
          ))}
        </FlexList>
      </Container>
    </Box>
  );
};
