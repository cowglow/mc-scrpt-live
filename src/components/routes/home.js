import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

import Section from "../section/section";
import EventList from "../event-list/event-list";
import Contact from "../contact/contact";

import { descText, title } from "../../data/content";
import { label, link, text } from "../../data/contact";

import { getApiUri } from "../../lib/get-api-uri";

const styles = theme => ({
  main: {
    backgroundColor: theme.palette.background.paper
  }
});

const EVENT_API = getApiUri();

const Home = ({ onLoaded }) => {
  const [eventHeader, setEventHeader] = useState("Catch me live!");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(EVENT_API)
      .then(response => response.json())
      .then(data => {
        onLoaded(false);
        setEvents(data.Events);
      });
  }, []);

  const eventHandler = data => {
    setEventHeader(data);
  };

  return (
    <Grid container>
      <Grid item sm={12} md={12} lg={4} style={{ width: "100%" }}>
        <Section headerLabel={title}>
          <Typography variant={"body1"}>{descText}</Typography>
        </Section>
      </Grid>
      <Grid item sm={12} md={12} lg={4} style={{ width: "100%" }}>
        <Section headerLabel={eventHeader}>
          <EventList bind={events} callback={eventHandler} />
        </Section>
      </Grid>
      <Grid item sm={12} md={12} lg={4} style={{ width: "100%" }}>
        <Section headerLabel={"Hit me up!"}>
          <Contact label={label} link={link} text={text} />
        </Section>
      </Grid>
    </Grid>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  onLoaded: PropTypes.func.isRequired
};

export default withStyles(styles)(Home);
