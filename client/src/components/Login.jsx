import React from "react";
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export const Login = (props) => {
  const history = useHistory();
  const [info, setInfo] = React.useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const newInfo = {
      email: info.email,
      password: info.password,
    };
    newInfo[event.target.name] = event.target.value;
    setInfo(newInfo);
  }

  const handleSubmit = (event) => {
    localStorage.setItem('email', info.email);
    history.push('/');
  }

  return (
    <div class="onboarding">
      <form>
        <h1>Welcome!</h1>
        <div>
          <label htmlFor="email">
            Email
          </label>
          <input
            size="lg"
            type="email"
            name="email"
            value={info.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">
            Password
          </label>
          <input
            size="lg"
            type="password"
            name="password"
            value={info.password}
            onChange={handleChange}
          />
        </div>
        <br />
        <Button
          variant='primary'
          className='btn-margin auth-button login-button'
          onClick={handleSubmit}
        >{props.type == 'login' ? 'LOG IN' : 'JOIN NOW'}</Button>
      </form>
    </div>
  );
};

export default Login;
