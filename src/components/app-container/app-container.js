import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "../layout/layout";
import Loader from "../loader/loader";
import Home from "../routes/home";

const AppContainer = () => {
  const [loading, uploaded] = useState(true);

  return (
    <React.Fragment>
      <Loader isLoading={loading} />
      <Layout>
        <Router>
          <Switch>
            <Router path="/booking">artist-booking-contract</Router>
            <Route path="/">
              <Home onLoaded={value => uploaded(value)} />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
};

export default AppContainer;
