import React from 'react';
import { withTheme } from 'emotion-theming';

const Logo = () => {
  return (
    <img
      alt="Underground JS"
      src={require('../img/logo-3d.png')}
      css={{ width: '80%' }}
    />
  );
};

export default withTheme(Logo);
