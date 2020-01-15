import React from 'react';
import { Link } from 'gatsby';
import { Box } from 'theme-ui/layout';
import useSiteMetadata from 'gatsby-theme-conference/src/use-site-metadata';
import NavLink from 'gatsby-theme-conference/src/components/nav-link';

export default (props) => {
  const { title } = useSiteMetadata();

  return (
    <>
      <NavLink as={Link} to="/">
        {title}
      </NavLink>
      <Box mx="auto" />
    </>
  );
};
