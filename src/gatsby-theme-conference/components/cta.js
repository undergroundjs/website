import React from 'react';
import { Box, Container } from 'theme-ui/layout';
import Button from 'gatsby-theme-conference/src/components/button';

export default (props) => (
  <Box id="purchase" py={[5, 6]}>
    <Container>
      <Button href="https://docs.google.com/forms/d/e/1FAIpQLSeTaEpb2yzEBYIrdT6nd-2tIbe51AfYmp1sURysHVn1F9oSBw/viewform?usp=sf_link">
        Give us Feedback
      </Button>
    </Container>
  </Box>
);
