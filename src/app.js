import React, { useState, useEffect } from 'react'

import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

import Layout from './components/layout/layout'
import EventList from './components/event-list/event-list'
import Contact from './components/contact/contact'
import Section from './components/section/section'

import { title, descText } from './data/content'
import { label, link, text } from './data/contact'
import { getApiUri } from './lib/get-api-uri'

const EVENT_API = getApiUri()

const styles = theme => ({
  main: {
    backgroundColor: theme.palette.background.paper
  }
})

const App = ({ classes }) => {
  const [loading, isLoading] = useState(true);
  const [eventHeader, setEventHeader] = useState('Catch me live!')
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(EVENT_API)
      .then(response => response.json())
      .then(data => {
        isLoading(false)
        setEvents(data.Events)
      });
  }, []);

  const eventHandler = data => {
    setEventHeader(data)
  };

  if (loading) {
    return (
      <div
        style={{
          color: 'red',
          backgroundColor: 'black',
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        Loading....
      </div>
    );
  } else {
    return (
      <Layout>
        <Container className={classes.main}>
          <Grid container>
            <Grid item sm={12} md={12} lg={4} style={{ width: '100%' }}>
              <Section headerLabel={title}>
                <Typography variant={'body1'}>{descText}</Typography>
              </Section>
            </Grid>
            <Grid item sm={12} md={12} lg={4} style={{ width: '100%' }}>
              <Section headerLabel={eventHeader}>
                <EventList bind={events} callback={eventHandler}/>
              </Section>
            </Grid>
            <Grid item sm={12} md={12} lg={4} style={{ width: '100%' }}>
              <Section headerLabel={'Hit me up!'}>
                <Contact label={label} link={link} text={text}/>
              </Section>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    );
  }
};

export default withStyles(styles)(App)
