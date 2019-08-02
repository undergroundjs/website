import React from 'react';
import { Link } from 'gatsby';
import { Box } from 'theme-ui/layout';
import useSiteMetadata from 'gatsby-theme-conference/src/use-site-metadata';
import NavLink from 'gatsby-theme-conference/src/components/nav-link';
import Button from 'gatsby-theme-conference/src/components/button';
import DesktopOnly from 'gatsby-theme-conference/src/components/desktop-only';

export default (props) => {
  const { title } = useSiteMetadata();

  return (
    <>
      <NavLink as={Link} to="/">
        {title}
      </NavLink>
      <Box mx="auto" />
      <DesktopOnly>
        <NavLink as={Link} to="/#speakers">
          Speakers
        </NavLink>
        <NavLink as={Link} to="/#schedule">
          Schedule
        </NavLink>
        <NavLink as={Link} to="/#venue">
          Venue
        </NavLink>
        <NavLink as={Link} to="/#sponsors">
          Sponsors
        </NavLink>

        <NavLink as={Link} to="/faq">
          FAQ
        </NavLink>
      </DesktopOnly>
      <Button href="https://docs.google.com/forms/d/e/1FAIpQLSeTaEpb2yzEBYIrdT6nd-2tIbe51AfYmp1sURysHVn1F9oSBw/viewform?usp=sf_link">
        Give us Feedback
      </Button>
    </>
  );
};
