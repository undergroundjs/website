import React from 'react';
import { Link } from 'gatsby';
import { Styled, css } from 'theme-ui';
import { Box, Flex, Container } from 'theme-ui/layout';
import { Twitter, Instagram } from 'react-feather';
import useSiteMetadata from 'gatsby-theme-conference/src//use-site-metadata';
import List from 'gatsby-theme-conference/src/components/list';
import NavLink from 'gatsby-theme-conference/src/components/nav-link';
import IconLink from 'gatsby-theme-conference/src/components/icon-link';

export default (props) => {
  const { twitter, instagram } = useSiteMetadata();

  return (
    <Container>
      <Flex mx={-3} flexWrap="wrap"
        css={css({
          textAlign: 'center',
        })}
      >
        <Box width={[1, 1 / 3]}>
          <List>
            <li>
              <NavLink as={Link} to="/2019">
                2019 Archive
              </NavLink>
            </li>
          </List>
        </Box>
        <Box width={[1, 1 / 3]}>
          <List>
            <li>
              <NavLink as={Link} to="/code-of-conduct">
                Code of Conduct
              </NavLink>
            </li>
          </List>
        </Box>
        <Box width={[1, 1 / 3]} p={2}>
          {twitter && (
            <IconLink title="Follow us on Twitter" href={twitter}>
              <Twitter />
            </IconLink>
          )}
          {instagram && (
            <IconLink title="Follow us on Instagram" href={instagram}>
              <Instagram />
            </IconLink>
          )}
        </Box>
      </Flex>
      <Box>
        <Styled.p
          css={css({
            textAlign: 'center',
            fontSize: 0,
          })}
        >
          © 2019 UndergroundJS, Inc.
        </Styled.p>
      </Box>
    </Container>
  );
};
