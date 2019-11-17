import React, { useState, useEffect } from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Layout from './components/layout/layout'
import EventList from './components/event-list/event-list'
import Contact from './components/contact/contact'
import Section from './components/section/section'

import { title, descText } from './data/content'

import { label, link, text } from './data/contact'

const DEV_EVENTS_RESOURCE = 'fixture/dev_events-fixture.json'

const EVENTS_RESOURCE =
  'https://' + process.env.GAS_URL + '/' + process.env.GAS_PRODUCT + '/exec'
const EVENT_API =
  document.domain === 'localhost' ? DEV_EVENTS_RESOURCE : EVENTS_RESOURCE;

const App = () => {
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
          '-ms-flex-align': 'center',
          alignItems: 'center',
          '-ms-flex-pack': 'center',
          justifyContent: 'center'
        }}
      >
        Loading....
      </div>
    )
  } else {
    return (
      <Layout>
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
      </Layout>
    );
  }
};

export default App;
