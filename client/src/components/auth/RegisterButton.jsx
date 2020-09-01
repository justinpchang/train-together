import React from 'react';
import { Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
 
const RegisterButton = () => {
  const history = useHistory();
  const goToRegister = (event) => {
    history.push('/register');
  }

  return (
    <Button
    variant="primary"
    className="btn-margin auth-button register-button"
    onClick={goToRegister}
    >
       JOIN NOW
    </Button>
  );
};

export default RegisterButton;