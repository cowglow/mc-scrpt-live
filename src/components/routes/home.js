import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Container  from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

import Section from "../section/section";
import EventList from "../event-list/event-list";

import { descText, title } from "../../data/content";
import { label, link, text } from "../../data/contact";

import { getApiUri } from "../../lib/get-api-uri";

const styles = theme => ({
  main: {
    backgroundColor: theme.palette.background.paper
  },
  divider: {
    padding: theme.spacing(2)
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
        setEvents(data.Events.reverse());
      });
  }, []);

  const eventHandler = data => {
    setEventHeader(data);
  };

  return (
    <Container>
      <Grid container>
        <Grid item sm={12} md={12} lg={4} style={{ width: "100%" }}>
          <Section headerLabel={title}>
            <Typography variant={"body1"}>{descText}</Typography>
            <br/>
            <Typography variant={'body1'}>
              {text}
              <a href={link} target="_twitter" className={{}}>
                {label}
              </a>
            </Typography>
          </Section>
        </Grid>
        <Grid item sm={12} md={12} lg={8} style={{ width: "100%" }}>
          <Section headerLabel={eventHeader}>
            <EventList bind={events} callback={eventHandler} />
          </Section>
        </Grid>
      </Grid>
    </Container>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  onLoaded: PropTypes.func.isRequired
};

export default withStyles(styles)(Home);
