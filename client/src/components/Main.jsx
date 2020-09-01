import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Home from './Home';
import Landing from './Landing';
import Onboarding from './onboarding';
import { apiGET } from '../utils';

/*
  Main component. This page is never seen, but serves the onboarding, home, or landing page depending on auth status.
  This is where token is handled and passed down to other components.
*/

const Main = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [isNew, setIsNew] = React.useState(false);
  const [token, setToken] = React.useState('');

  getAccessTokenSilently().then((token) => {
    setToken(token);
  });

  const onSubmit = React.useCallback(() => {
    setIsNew(false);
  }, []);
  
  if (isAuthenticated) {
    /*
      Check if isNew by querying API for user to see if it exists
     */

    if (isNew) {
      return <Onboarding onSubmit={onSubmit} token={token} />;
    }
    return <Home token={token} />;
  }
  return <Landing />;
};

export default Main;