import React from 'react';

import {RegisterButton, LoginButton} from './auth';

const Landing = () => {
  return (
    <div>
      <p>At landing page!</p>
      <RegisterButton />
      <LoginButton />
    </div>
  );
};

export default Landing;