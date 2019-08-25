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

        return (
            <ul className="EventList text-justify">
                {this.props.bind.map((item, index) => {
                    const timestamp = getDate();
                    const eventDate = getDate(Date.parse(item.date));
                    if (eventDate < timestamp) {
                        return (
                            <li key={index}>
                                <a href={item.link} target="fb_link">{item.name}</a>
                                <p>{eventDate}</p>
                            </li>
                        );
                    }
                })}
            </ul>
        )
    }
}

export default EventList;
