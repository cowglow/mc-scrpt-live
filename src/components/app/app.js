import React, {useState, useEffect} from "react";

import HeaderComponent from "../header-component/header-component";
import EventList from "../event-list/event-list";
import Contact from "../contact/contact";
import SocialMedia from "../social-media/social-media";

import {backgroundImage} from "../../services/background-image";
import {
  Title,
  Body,
  ContactData,
  SocialMediaData
} from "../../assets/content-data";

import "./app.styles.css";

const DEV_ENV = document.domain === "localhost";
const EVENT_API = DEV_ENV
    ? "fixtures/event-data.json"
    : "https://script.google.com/macros/s/AKfycbwDp2Qaqwuwkit2eIAgpCpi-oCVvVP3Y3CLdqgY4vpEtj2rWgwK/exec";

const App = () => {
  const [loading, isLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [eventMode, setEventMode] = useState("default");

  const toggleEventList = () => {
    const mode = eventMode === "default" ? "archive" : "default";
    setEventMode(mode);
  };

  const eventHeader =
      eventMode === "default" ? "Upcoming Events" : "Past Events";

  useEffect(() => {
    fetch(EVENT_API)
        .then(response => response.json())
        .then(data => {
          isLoading(false);
          setEvents(data.Events);
        });
  }, []);

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
              <EventList
                  bind={events}
                  mode={eventMode}
                  toggle={toggleEventList}
              />
            </section>

            <section>
              <h1 className="section-header">Hit me up!</h1>
                <Contact    /*position: relative;*/

                  label={ContactData.label}
                  link={ContactData.link}
                  text={ContactData.text}
              />
            </section>
          </main>

          <br/>
          <footer>
            <SocialMedia bind={SocialMediaData}/>
              <h3>Philip Saa <nobr>aka MC SCRPT</nobr></h3>
              <small>All Rights Reserved. &copy; {new Date().getFullYear()}</small>
          </footer>
        </div>
    );
  }
};

export default App;
