import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'

import Layout from './components/layout/layout'
import Loader from './components/loader/loader'

import theme from './lib/theme'

import Home from './components/routes/home'

const App = () => {
  const [loading, uploaded] = useState(true)

  return (
    <ThemeProvider theme={theme}>
      <Loader isLoading={loading}/>
      <Layout>
        <Router>
          <Switch>
            <Router path="/booking">artist-booking-contract</Router>
            <Route path="/">
              <Home onLoaded={value => uploaded(value)}/>
            </Route>
          </Switch>
        </Router>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
