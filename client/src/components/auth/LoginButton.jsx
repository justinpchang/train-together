import React from 'react';
import { Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
 
const LoginButton = () => {
  const history = useHistory();
  const goToLogin = (event) => {
    history.push('/login');
  }

  return (
    <Button
    variant="primary"
    className="btn-margin auth-button login-button"
    onClick={goToLogin}
    >
        LOG IN
    </Button>
  );
};

export default LoginButton;