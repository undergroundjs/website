import React from 'react';
import { withTheme } from 'emotion-theming';

const Logo = () => {
  return (
    <img
      alt="Underground JS"
      src={require('../img/underground-3d-1440.png')}
      css={{ width: '80%' }}
    />
  );
};

export default withTheme(Logo);
