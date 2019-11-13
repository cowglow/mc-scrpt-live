import React from "react";
import PropTypes from 'prop-types'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import withStyles from '@material-ui/core/styles/withStyles'
import LinkIcon from '@material-ui/icons/Link'

import { getDate } from '../../lib/get-date'
import { purple } from '@material-ui/core/colors'

// import "./event-list.styles.css";

const styles = theme => ({
  root: {
    border: 'thin solid ' + theme.palette.primary.main
  },
  list: {
    color: theme.palette.primary.main
  },
  listItem: {
    color: theme.palette.primary.main
  },
  link: {
    color: theme.palette.primary.main
  }
})

const EventList = ({ classes, bind, callback }) => {
  const currentTimestamp = Date.now()
  const [mode, setMode] = React.useState(0)
  const tabLabels = ['Upcoming Shows', 'Previews Shows']

  const pastEvents = bind.filter(item => {
    const eventDate = Date.parse(item.date)
    return eventDate < currentTimestamp
  });

  const upcomingEvents = bind.filter(item => {
    const eventDate = Date.parse(item.date)
    return eventDate > currentTimestamp
  });

  const filterEvents = mode === 0 ? upcomingEvents : pastEvents
  const eventList = filterEvents.length <= 0 ? bind : filterEvents

  const handleTabChange = (event, newValue) => {
    callback(tabLabels[newValue])
    setMode(newValue)
  };

  return (
    <React.Fragment>
      {upcomingEvents.length > 0 ? (
        <Tabs
          value={mode}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label={'event list tabs'}
          className={'toggle-btn-group'}
          classes={{
            root: classes.root
          }}
        >
          <Tab wrapped label={tabLabels[0]}/>
          <Tab wrapped label={tabLabels[1]}/>
        </Tabs>
      ) : null}
      <List className={classes.list}>
        {eventList.map((item, index) => {
          return (
            <ListItem key={index}>
              <ListItemText
                primary={item.name}
                secondary={getDate(item.date)}
              />
              <ListItemSecondaryAction>
                <a
                  className={classes.link}
                  href={item.link}
                  target="fb_link"
                  aria-label={`${item.name} event link`}
                >
                  <LinkIcon/>
                </a>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </React.Fragment>
  );
};

EventList.propTypes = {
  classeS: PropTypes.object.isRequired,
  bind: PropTypes.array.isRequired,
  callback: PropTypes.func.isRequired
};

export default withStyles(styles)(EventList)
