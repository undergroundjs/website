import React from 'react';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import Logo from './Logo';
import ExternalLink from './ExternalLink';
import { Link } from 'gatsby';
import { container, theme, globalStyles } from '../lib/styles';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <div
      css={{
        background: theme.colors.dark,
        padding: '5rem 0',
        textAlign: 'center',
        a: {
          '&:hover,&:active,&:focus': { textDecoration: 'none !important' },
        },
      }}
    >
      <Link to="/">
        <Logo color={theme.colors.white} />
      </Link>
    </div>
    {children}
    <footer css={[container, { textAlign: 'center', marginBottom: '1rem' }]}>
      <div>
        © {new Date().getFullYear()}, Built with
        {` `}
        <ExternalLink href="https://www.gatsbyjs.org">Gatsby</ExternalLink> |
        Hosted by{' '}
        <ExternalLink href="https://netlify.com">Netlify</ExternalLink>
      </div>
    </footer>
  </ThemeProvider>
);

Layout.getTheme = () => theme;

export default Layout;
