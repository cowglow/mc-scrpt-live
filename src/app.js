import React, { useState, useEffect } from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Layout from './components/layout/layout'
import EventList from './components/event-list/event-list'

import Contact from './components/contact/contact'
import Section from './components/section/section'

import { title, descText } from './data/content'

import ContactData from './data/contact'

const DEV_EVENTS_RESOURCE = 'fixture/dev_events-fixture.json'

const EVENTS_RESOURCE =
  'https://script.google.com/macros/s/AKfycbwDp2Qaqwuwkit2eIAgpCpi-oCVvVP3Y3CLdqgY4vpEtj2rWgwK/exec';
const EVENT_API =
  document.domain === 'localhost' ? DEV_EVENTS_RESOURCE : EVENTS_RESOURCE;

const App = () => {
  const [loading, isLoading] = useState(true);
  const [eventHeader, setEventHeader] = useState('Upcoming Shows')
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
    return <div className="loader">Loading....</div>;
  } else {
    return (
      <Layout>
        <Grid container>
          <Grid item xs={4}>
            <Section headerLabel={title}>
              <Typography variant={'body1'}>{descText}</Typography>
            </Section>
          </Grid>
          <Grid item xs={4}>
            <Section headerLabel={eventHeader}>
              <EventList bind={events} callback={eventHandler}/>
            </Section>
          </Grid>
          <Grid item xs={4}>
            <Section headerLabel={'Hit me up!'}>
              <Contact
                label={ContactData.label}
                link={ContactData.link}
                text={ContactData.text}
              />
            </Section>
          </Grid>
        </Grid>
      </Layout>
    );
  }
};

export default App;
