import React from 'react';
import { Styled, css } from 'theme-ui';
import { Box, Container } from 'theme-ui/layout';
import useSiteMetadata from 'gatsby-theme-conference/src/use-site-metadata';
import Button from 'gatsby-theme-conference/src/components/button';
import NavLink from 'gatsby-theme-conference/src/components/nav-link';
import { Link } from 'gatsby';

export default (props) => {
  const { description } = useSiteMetadata();

  return (
    <Box {...props} py={[5, 0]}>
      <Container
        css={css({
          display: 'flex',
          flexDirection: 'column',
        })}
      >
        <Styled.img
          css={css({
            width: [375, 600, 740, 920],
            mb: 2,
            mx: 'auto',
            alignSelf: 'center',
          })}
          src={require('../../images/logo-3d.png')}
        />
        <Styled.p
          css={css({
            textAlign: 'center',
            fontSize: 3,
            mb: 5,
          })}
        >
          {description}
        </Styled.p>
        <div css={{ display: 'flex', justifyContent: 'space-around' }}>
          <Button href="https://www.eventbrite.com/e/undergroundjs-tickets-61081666910?aff=website">
            Buy Tickets
          </Button>
          <Button href="https://forms.gle/8W92EGiu66pwUxCM7">FAQ</Button>
        </div>
      </Container>
      <Container
        css={css({
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
        })}
      >
        <Styled.h2>
          <NavLink as={Link} to="/coc">
            Code of Conduct
          </NavLink>
        </Styled.h2>
      </Container>
    </Box>
  );
};
