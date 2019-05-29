import theme from "gatsby-theme-conference/src/theme"

export default {
  ...theme,
  colors: {
    ...theme.colors,
    primary: "#f48705",
    secondary: "#f5b004",
    muted: "#f6eeff",
  },
  fontWeights: {
    body: 400,
    bold: 600,
    heading: 900,
  },
  styles: {
    ...theme.styles,
    h1: {
      ...theme.styles.h1,
      color: "primary",
    },
    h2: {
      ...theme.styles.h2,
      color: "primary",
    },
  },
}
