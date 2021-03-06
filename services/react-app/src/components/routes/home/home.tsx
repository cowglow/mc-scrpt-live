import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Section from '../../section/section'
import EventList from '../../events/events'
import { descText, title } from '../../../../../web-app/static/data/content.json'
import { text, linkText, linkUrl } from '../../../../../web-app/static/data/contact.json'
import { getApiUri } from '../../../lib/get-api-uri'
import addStyling from './home.styling'

const EVENT_API = getApiUri()

interface HomeProps {
  classes: any;
  onLoaded: any
}
const Home:React.FC<HomeProps> = ({ classes, onLoaded: loadComplete }) => {
  const [eventHeader, setEventHeader] = useState('Catch me live!')
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch(EVENT_API)
      .then(response => response.json())
      .then(data => {
        loadComplete(true)
        setEvents(data.Events)
      })
  })

  const eventHandler = (data:any) => {
    setEventHeader(data);
  };

  return (
    <Container>
      <Grid container>
        <Grid item sm={12} md={12} lg={5} style={{ width: '100%' }}>
          <Section label={title}>
            <Typography variant={'body1'}>{descText}</Typography>
            <br/>
            <Typography variant={'body1'}>
              {text}
              <a href={linkUrl} target="_twitter" className={classes.link}>
                {linkText}
              </a>
            </Typography>
          </Section>
        </Grid>
        <Grid item sm={12} md={12} lg={7} style={{ width: '100%' }}>
          <Section label={eventHeader}>
            <EventList bind={events} callback={eventHandler}/>
          </Section>
        </Grid>
      </Grid>
    </Container>
  );
};

export default addStyling(Home);
