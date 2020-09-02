import React from "react";

import Home from './Home';
import Landing from './Landing';
import Onboarding from './onboarding';
import {
  checkUserEmail,
  createUser,
  getUser,
} from '../utils';
import { useIsFocusVisible } from "@material-ui/core";

const Main = () => {
  const [userId, setUserId] = React.useState('');
  const [user, setUser] = React.useState({});
  const [needUser, setNeedUser] = React.useState(true);

  React.useEffect(() => {
    checkUserEmail(localStorage.getItem('email')).then((uId) => {
      setUserId(uId.replace(/^"(.*)"$/, '$1'));
    });
  }, []);

  /*
  React.useEffect(() => {
    console.log(`about to get user, user id is ${userId}`)
    getUser(userId).then((res) => {
      setUser({
        name: res.Item.name,
        following: res.Item.following,
        followers: res.Item.followers,
        workouts: res.Item.sessionsAttended,
      });
    }).catch((error) => {
      console.log(error);
    })
  }, [userId]);
  */

  const handleSubmit = (user) => {
    createUser(
      user.name,
      localStorage.getItem('email'),
      user.age,
      user.interests
    ).then((res) => {
      console.log(JSON.stringify(res));
      setUserId(res.userId.replace(/^"(.*)"$/, '$1'));
    })
  }

  if (localStorage.getItem('email') !== null) {
    if (userId === 'NEW') {
      return <Onboarding onSubmit={handleSubmit} />;
    }
    // Get user info
    console.log('grabbing user info for: ' + userId);
    if (needUser) {
      getUser(userId).then((res) => {
        setUser({
          name: res.Item.name,
          following: res.Item.following,
          followers: res.Item.followed,
          workouts: res.Item.sessionAttended,
        });
        setNeedUser(false);
      }).catch((error) => {
        console.log(error);
      })
    }
    return <Home user={user} />;
  }
  return <Landing />;
};

export default Main;