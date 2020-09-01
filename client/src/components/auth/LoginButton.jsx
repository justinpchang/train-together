import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
 
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
    variant="primary"
    className="btn-margin auth-button login-button"
    >
      <Link
        to="/login"
      >
        LOG IN
      </Link>
    </Button>
  );
};

export default LoginButton;