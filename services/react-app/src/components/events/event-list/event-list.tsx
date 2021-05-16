import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LinkIcon from "@material-ui/icons/Link";
import { getDate } from "../../../lib/get-date";

interface EventListProps {
  events: any;
  classes: any;
}

const EventList: React.FC<EventListProps> = ({ events, classes }) => {
  const handleListItemClick = (eventLink: any) => {
    setTimeout(() => {
      window.open(eventLink, "fb_link");
    }, 333);
  };

  return (
    <List className={classes}>
      {events.map((event:any, index:number) => {
        const link = event["eventLink"];
        return (
          <ListItem
            key={index}
            button
            onClick={() => handleListItemClick(link)}
          >
            <ListItemIcon>
              <LinkIcon color={"primary"} />
            </ListItemIcon>
            <ListItemText
              primary={event["eventName"]}
              secondary={getDate(event["eventDate"])}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default EventList;
