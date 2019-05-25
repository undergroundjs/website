import React from "react"
import { Box, Container } from "theme-ui/layout"
import Button from "gatsby-theme-conference/src/components/button"

export default props => (
  <Box id="purchase" py={[5, 6]}>
    <Container>
      <Button href="https://www.eventbrite.com/e/undergroundjs-tickets-61081666910?aff=website">
        Buy Tickets
      </Button>
    </Container>
  </Box>
)
