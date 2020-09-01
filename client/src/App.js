import React from "react";
import { Route, Switch } from "react-router-dom";

import { Main, Profile, PrivateRoute } from "./components";
import Login from "./components/Login";

import "./style/profile.css";
import "./style/feed.css";
import "./style/landing.css";
import "./style/auth.css";
import "./style/onboarding.css";
import "./style/home.css";
import './style/user.css';
import './style/class.css';
import "./style/navbar.css";
import "./style/login.css";

const App = () => {
  return (
    <div id="app" className="d-flex flex-column h-100">
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact render={(props) => (
          <Login type='login' />
        )} />
        <Route path="/register" exact render={(props) => (
          <Login type='register' />
        )} />
        <Route path="/profile" exact render={(props) => (
          <Profile showDashboard={true} />
        )} />
        <Route path="/workouts" exact render={(props) => (
          <Profile showDashboard={false} />
        )} />
      </Switch>
    </div>
  );
};

export default App;
