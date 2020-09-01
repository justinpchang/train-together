import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Home from './Home';
import Landing from './Landing';
import Onboarding from './onboarding';
import { apiGET } from '../utils';

const Main = () => {
  if (localStorage.getItem('email') !== null) {
    /*
    if (isNew) {
      return <Onboarding onSubmit={onSubmit} token={token} />;
    }
    */
    return <Home />;
  }
  return <Landing />;
};

export default Main;