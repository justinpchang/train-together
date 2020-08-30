import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

import Home from './Home';
import Landing from './Landing';

const Main = () => {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return <Home />;
  }
  return <Landing />;
};

export default Main;