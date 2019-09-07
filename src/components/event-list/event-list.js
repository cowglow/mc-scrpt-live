import React from "react";

import {getDate} from "../../services/get-date/get-date";

// Resources
import "./event-list.styles.css";

const EvenList = ({bind, mode, toggle}) => {
    const eventModeToggle =
        mode === "default" ? "Previous Shows" : "Upcoming Shows";

    const currentTimestamp = Date.now();

    const pastEvents = bind.filter(item => {
        const eventDate = Date.parse(item.date);
        return eventDate < currentTimestamp;
    });

    const upcomingEvents = bind.filter(item => {
        const eventDate = Date.parse(item.date);
        return eventDate > currentTimestamp;
    });

    const eventList =
        mode === "default" || mode === undefined ? upcomingEvents : pastEvents;

    return (
        <React.Fragment>
            <ul className="event-list">
                {eventList.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className="event-list-link" href={item.link} target="fb_link">
                                {item.name}
                            </a>
                            <p>{getDate(item.date)}</p>
                        </li>
                    );
                })}
            </ul>
            <button className="event-list-toggle" onClick={toggle}>
                {eventModeToggle}
            </button>
        </React.Fragment>
    );
};

export default EvenList;
