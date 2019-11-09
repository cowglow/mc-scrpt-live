import React, { useState, useEffect } from 'react'

import HeaderComponent from './components/header-component/header-component'
import { backgroundImage } from './services/background-image'
import EventList from './components/event-list/event-list'
import Contact from './components/contact/contact'

import { Title, Body } from './data/content'
import ContactData from './data/contact'

import SocialMedia from './components/social-media/social-media'
import SocialMediaData from './data/links'

import "./app.styles.css";

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
  }

  if (loading) {
    return <div className="loader">Loading....</div>;
  } else {
    return (
      <div className="app">
        <header style={backgroundImage(2)}>
          <HeaderComponent/>
        </header>

        <main>
          <section>
            <h1 className="section-header">{Title}</h1>
            <span>{Body}</span>
          </section>

          <section>
            <h1 className="section-header">{eventHeader}</h1>
            <EventList bind={events} callback={eventHandler}/>
          </section>

          <section>
            <h1 className="section-header">Hit me up!</h1>
            <Contact
              label={ContactData.label}
              link={ContactData.link}
              text={ContactData.text}
            />
          </section>
        </main>

        <footer>
          <SocialMedia bind={SocialMediaData}/>
          <h3>
            Philip Saa <nobr>aka MC SCRPT</nobr>
          </h3>
          <small>All Rights Reserved. &copy; {new Date().getFullYear()}</small>
        </footer>
      </div>
    );
  }
};

export default App;
