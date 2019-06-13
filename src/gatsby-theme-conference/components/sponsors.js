import React from 'react';
import { Styled, css } from 'theme-ui';
import { Box, Container } from 'theme-ui/layout';
import SectionHeading from 'gatsby-theme-conference/src/components/section-heading';
import FlexList from 'gatsby-theme-conference/src/components/flex-list';
import Card from 'gatsby-theme-conference/src/components/card';
import { useStaticQuery, graphql } from 'gatsby';

const IMAGESCALE = 0.8044;
const platinumTierImageSizes = [360, 600, 740, 920];
const imageScaler = (i, repeat) =>
  repeat === 1 ? i * IMAGESCALE : imageScaler(i * IMAGESCALE, repeat - 1);

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
          {sponsors.map((sponsor) => {
            const breakPointImageScale = ((tier) => {
              switch (tier) {
                case 'platinum':
                  return platinumTierImageSizes;
                case 'gold':
                  return platinumTierImageSizes.map((i) => imageScaler(i, 1));
                case 'silver':
                  return platinumTierImageSizes.map((i) => imageScaler(i, 2));
                case 'community':
                  return platinumTierImageSizes.map((i) => imageScaler(i, 3));
              }
            })(sponsor.tier);
            return (
              <Card
                as="li"
                key={sponsor.id}
                css={css({ display: 'flex', justifyContent: 'center' })}
              >
                <Styled.a title={sponsor.name} href={sponsor.url}>
                  <Styled.img
                    src={
                      images.find(({ name }) => name === sponsor.logo).publicURL
                    }
                    alt={sponsor.name}
                    css={css({
                      width: breakPointImageScale,
                    })}
                  />
                </Styled.a>
              </Card>
            );
          })}
        </FlexList>
      </Container>
    </Box>
  );
};
