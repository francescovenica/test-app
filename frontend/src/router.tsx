import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./containers/Home";
import Layout from "./containers/Layout";
import Ranking from "./containers/Ranking";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/ranking">
        <Layout>
          <Ranking />
        </Layout>
      </Route>
      <Route path="/">
        <Layout>
          <Home />
        </Layout>
      </Route>
    </Switch>
  </Router>
);
export default Routes;
