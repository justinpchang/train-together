import React from "react";
import { Route, Switch } from "react-router-dom";

import { Main, Profile, PrivateRoute } from "./components";

import "./style/profile.css";
import "./style/feed.css";
import "./style/landing.css";
import "./style/auth.css";
import "./style/onboarding.css";
import "./style/home.css";
import './style/user.css';
import './style/class.css';
import "./style/navbar.css";

const App = () => {
  return (
    <div id="app" className="d-flex flex-column h-100">
      <Switch>
        <Route path="/" exact component={Main} />
        <PrivateRoute path="/profile" component={Profile} />
      </Switch>
    </div>
  );
};

export default App;
