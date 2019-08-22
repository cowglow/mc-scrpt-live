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
            const date = new Date(now * 1000);
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            return date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
        };

        return (
            <ul className="EventList text-justify">
                {this.props.bind.map((item) => {
                    const timestamp = Math.round((new Date()).getTime() / 1000);
                    if (item.date.toString() < timestamp) {
                        return (
                            <li>
                                <a href={item.link}>{item.name}</a>
                                <p>{getDate(item.date.toString())}</p>
                            </li>
                        );
                    }
                })}
            </ul>
        )
    }
}

export default EventList;
