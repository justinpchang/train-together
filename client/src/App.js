import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

import { Main, Profile, PrivateRoute } from "./components";

import "./style/profile.css";
import "./style/feed.css";
import "./style/landing.css";
import "./style/auth.css";
import "./style/onboarding.css";
import "./style/navbar.css";

const App = () => {
  return (
    <div id="app" className="d-flex flex-column h-100">
      <Switch>
        <Route path="/" exact component={Main} />
        <Container className="flex-grow-1 mt-5">
          <PrivateRoute path="/profile" component={Profile} />
        </Container>
      </Switch>
    </div>
  );
};

export default App;
