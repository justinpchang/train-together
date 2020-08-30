import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

import { Main, Profile, PrivateRoute } from "./components";

import "./style/profile.css";
import './style/feed.css';

const App = () => {
  return (
    <div id="app" className="d-flex flex-column h-100">
      <Container className="flex-grow-1 mt-5">
        <Switch>
          <Route path="/" exact component={Main} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </Container>
    </div>
  );
};

export default App;
