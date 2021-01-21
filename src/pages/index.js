import React from 'react';
//import { Link } from 'gatsby';
import { Styled, css } from 'theme-ui';
import { Box, Container } from 'theme-ui/layout';
import Layout from 'gatsby-theme-conference/src/components/layout';
//import NavLink from 'gatsby-theme-conference/src/components/nav-link';

export default (props) => {
  return (
    <Layout>
      <Box {...props} py={[0]}>
        <Container
          css={css({
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${require('../images/banner-image.jpeg')})`,
            position: 'relative',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            minHeight: 500,
          })}
        >
          <Box py={5} />
          <Styled.h1
            css={css({
              textAlign: 'center',
              mb: 5,
              color: 'background',
              textShadow: '0px 0px 5px black',
            })}
          >
            JavaScript conference hosted in Nashville.
          </Styled.h1>
        </Container>
      </Box>
    </Layout>
  );
};
