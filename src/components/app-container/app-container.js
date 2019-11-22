import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loader from '../loader/loader'
import Layout from "../layout/layout";
import Home from "../routes/home/home";
import Booking from '../routes/booking/booking'

const AppContainer = () => {
  const [loading, uploaded] = useState(true);

  return (
    <React.Fragment>
      <Loader isLoading={loading} />
      <Layout>
        <Router>
          <Switch>
            <Router path="/booking">
              <Booking onLoaded={value => uploaded(value)}/>
            </Router>
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
