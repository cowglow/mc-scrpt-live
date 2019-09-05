/**
 * Mc Scrpt Live
 *
 * @package cowglow/mc-scrpt-live
 * @licence http://opensource.org/licenses/MIT The MIT License (MIT)
 */

import React from 'react';

// Resources
import './event-list.styles.css';

class EventList extends React.Component {

    render() {
        const getDate = (now = Date.now()) => {
            const date = new Date(now);
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            return date.getUTCDate() + " " + months[date.getUTCMonth()] + " " + date.getUTCFullYear();
        };

        const currentTimestamp = Date.now();

        const pastEvents = this.props.bind.filter((item) => {
            const eventDate = Date.parse(item.date);
            return eventDate < currentTimestamp;
        });

        const upcomingEvents = this.props.bind.filter((item) => {
            const eventDate = Date.parse(item.date);
            return eventDate > currentTimestamp;
        });

        const eventList = (this.props.mode === 'default' || this.props.mode === undefined) ? upcomingEvents : pastEvents;

        return (
            <ul className="EventList text-justify">
                {eventList.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.link} target="fb_link">{item.name}</a>
                            <p>{getDate(item.date)}</p>
                        </li>
                    );
                })}
            </ul>
        )
    }
}

export default EventList;
