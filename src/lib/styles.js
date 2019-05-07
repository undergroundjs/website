import { darken } from 'polished';

export const container = {
  maxWidth: '1200px',
  padding: '0 24px',
  margin: 'auto',
};

const fontFamilies = {
  primary: `'Roboto', 'Roboto Light', 'Fira Sans', 'Droid Sans', sans-serif`,
};
const colors = {
  white: 'white',
  dark: '#333',
  light: '#dadada',
  orange: '#f48705',
  darkOrange: '#6b3b02',
  yellow: '#f5b004',
  burntOrange: '#fb4900',
};

export const globalStyles = {
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  'html,body': {
    height: '100%',
    fontFamily: fontFamilies.primary,
  },
  // Gatsby's wrapper elements need a declared height for flex containers to work properly
  '#___gatsby,#___gatsby>[role="group"]': {
    height: '100%',
  },
  body: {
    color: colors.dark,
    backgroundColor: colors.white,
  },
  p: {
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
    marginInlineStart: 0,
    marginInlineEnd: 0,
    WebkitMarginBefore: '1em',
    WebkitMarginAfter: '1em',
    WebkitMarginStart: 0,
    WebkitMarginEnd: 0,
  },
  a: {
    color: colors.darkOrange,
    '&:hover,&:focus': {
      color: darken('0.2', colors.orange),
    },
  },
};

export const theme = {
  colors,
  fontFamilies,
};
