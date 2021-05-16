import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
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
        <BrowserRouter>
          <Switch>
            <Route path="/booking">
              <Booking onLoaded={(value:any) => updateLoadingStatus(value)}/>
            </Route>
            <Route path="/">
              <Home onLoaded={(value:any) => updateLoadingStatus(value)}/>
            </Route>
          </Switch>
        </BrowserRouter>
      </Layout>
    </React.Fragment>
  );
};

export default AppContainer;
