import React from "react";

import Home from './Home';
import Landing from './Landing';
import Onboarding from './onboarding';
import { checkUserEmail, createUser } from '../utils';

const Main = () => {
  const [userId, setUserId] = React.useState('');
  React.useEffect(() => {
    checkUserEmail(localStorage.getItem('email')).then((uId) => {
      setUserId(uId);
    });
  }, []);

  const handleSubmit = (user) => {
    createUser(
      user.name,
      localStorage.getItem('email'),
      user.age,
      user.interests
    ).then((res) => {
      console.log(JSON.stringify(res));
      setUserId(res.userId);;
    })
  }

  if (localStorage.getItem('email') !== null) {
    console.log(userId);
    if (userId === 'NEW') {
      return <Onboarding onSubmit={handleSubmit} />;
    }
    return <Home />;
  }
  return <Landing />;
};

export default Main;