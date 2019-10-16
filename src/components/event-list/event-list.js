import React from "react";

import { getDate } from '../../services/get-date'

import "./event-list.styles.css";

const EventListControls = ({ mode, callback }) => {
  const defaultMode = 'default'
  return (
    <div className="toggle-btn-group">
      <button
        className={mode === defaultMode ? 'toggle-btn-active' : 'toggle-btn'}
        onClick={() => callback(defaultMode)}
      >
        Upcoming Shows
      </button>
      <button
        className={mode === 'archive' ? 'toggle-btn-active' : 'toggle-btn'}
        onClick={() => callback('archive')}
      >
        Previous Shows
      </button>
    </div>
  )
}

const EventListItem = ({ index, bind }) => {
  return (
    <li key={index}>
      <a className="event-list-link" href={bind.link} target="fb_link">
        {bind.name}
      </a>
      <p>{getDate(bind.date)}</p>
    </li>
  )
}

const EvenList = ({ bind }) => {
  const currentTimestamp = Date.now()

  const defaultMode = 'default'
  const [mode, setMode] = React.useState(defaultMode)

  const pastEvents = bind.filter(item => {
    const eventDate = Date.parse(item.date)
    return eventDate < currentTimestamp
  });

  const upcomingEvents = bind.filter(item => {
    const eventDate = Date.parse(item.date)
    return eventDate > currentTimestamp
  });

  const filterEvents = mode === defaultMode ? upcomingEvents : pastEvents
  const eventList = filterEvents.length <= 0 ? bind : filterEvents

  return (
    <React.Fragment>
      <EventListControls currentMode={mode} callback={mode => setMode(mode)}/>
      <ul className="event-list">
        {eventList.map((item, index) => {
          const key = index.toString()
          return (
            <EventListItem key={index} index={key} bind={item}/>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default EvenList;
