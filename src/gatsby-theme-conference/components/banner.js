import React from "react"
import { Styled, css } from "theme-ui"
import { Box, Container } from "theme-ui/layout"
import useSiteMetadata from "gatsby-theme-conference/src/use-site-metadata"
import Button from "gatsby-theme-conference/src/components/button"

export default props => {
  const { description } = useSiteMetadata()

  return (
    <Box {...props} py={[5, 6]}>
      <Container>
        <Styled.img
          css={css({
            width: [375, 600, 740, 920, 1024],
            mb: 2,
            mx: "auto",
          })}
          src={require("../../images/logo-3d.png")}
        />
        <Styled.p
          css={css({
            textAlign: "center",
            fontSize: 3,
            mb: 5,
          })}
        >
          {description}
        </Styled.p>
        <div css={{ display: "flex", justifyContent: "space-around" }}>
          <Button href="https://www.eventbrite.com/e/undergroundjs-tickets-61081666910?aff=website">
            Buy Tickets
          </Button>
        </div>
      </Container>
    </Box>
  )
}
