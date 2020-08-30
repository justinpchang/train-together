import React from 'react';

import {LogoutButton} from './auth';
import Feed from './feed';

const Home = () => {
  return (
    <div>
      <LogoutButton />
      <p>At home page!</p>
      <Feed />
    </div>
  );
};

export default Home;