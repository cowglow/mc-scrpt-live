import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Loader from '../loader/loader'
import Layout from '../layout/layout'
import Home from '../routes/home/home'
import Booking from '../routes/booking/booking'

const AppContainer = () => {
  const [loaded, updateLoadingStatus] = useState(false)

  return (
    <React.Fragment>
      <Loader isLoading={loaded}/>
      <Layout>
        <Router>
          <Switch>
            <Router path="/booking">
              <Booking onLoaded={value => updateLoadingStatus(value)}/>
            </Router>
            <Route path="/">
              <Home onLoaded={value => updateLoadingStatus(value)}/>
            </Route>
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
};

export default AppContainer;
