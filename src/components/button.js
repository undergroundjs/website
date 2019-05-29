import React from "react"

export default props => (
  <a href={props.href} css={props.styles}>
    { props.children }
  </a>
);
