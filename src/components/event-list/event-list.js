import React from "react";
import PropTypes from "prop-types";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LinkIcon from "@material-ui/icons/Link";
import { getDate } from "../../lib/get-date";
import addStyling from './event-list.styles'

const EventList = ({ classes, bind, callback }) => {
  const currentTimestamp = Date.now();
  const [mode, setMode] = React.useState(0);
  const tabLabels = ["Upcoming Shows", "Previews Shows"];

  const pastEvents = bind.filter(item => {
    const eventDate = Date.parse(item.eventDate);
    return eventDate < currentTimestamp;
  });

  const upcomingEvents = bind.filter(item => {
    const eventDate = Date.parse(item.eventDate);
    return eventDate > currentTimestamp;
  });

  const filterEvents = mode === 0 ? upcomingEvents : pastEvents;
  const eventList = filterEvents.length <= 0 ? bind : filterEvents;

  const handleTabChange = (event, newValue) => {
    callback(tabLabels[newValue]);
    setMode(newValue);
  };

  const handleListItemClick = eventLink => {
    setTimeout(() => {
      window.open(eventLink, "fb_link");
    }, 800);
  };

  return (
    <React.Fragment>
      {upcomingEvents.length > 0 ? (
        <Tabs
          value={mode}
          centered={true}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label={"event list tabs"}
          className={classes.tabs}
        >
          <Tab wrapped label={tabLabels[0]} className={classes.tab} />
          <Tab wrapped label={tabLabels[1]} className={classes.tab} />
        </Tabs>
      ) : null}
      <List className={classes.list}>
        {eventList.map((item, index) => {
          const link = item.eventLink;
          return (
            <ListItem
              key={index}
              button
              onClick={() => handleListItemClick(link)}
              aria-label={`${item.eventName} event link`}
            >
              <ListItemIcon>
                <LinkIcon color={"primary"} />
              </ListItemIcon>
              <ListItemText
                primary={item.eventName}
                secondary={getDate(item.eventDate)}
              />
            </ListItem>
          );
        })}
      </List>
    </React.Fragment>
  );
};

EventList.propTypes = {
  classes: PropTypes.object.isRequired,
  bind: PropTypes.array.isRequired,
  callback: PropTypes.func.isRequired
};

export default addStyling(EventList);
