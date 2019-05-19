/**
 * Mc Scrpt Live
 *
 * @package cowglow/mc-scrpt-live
 * @licence http://opensource.org/licenses/MIT The MIT License (MIT)
 */

import React from 'react';

import './event-list.styles.css';
import getDate from '../../services/get-date/get-date';

class EventList extends React.Component {
    render() {
        const Events = this.props.bind;

        const ArrayEvents = [1,2,3,4];

        console.log(ArrayEvents.map());
        console.log(Events.map());
        return (
            <ul className="EventLst text-justify ">
                {Events.forEach((item) => {
                        const timestamp = Math.round((new Date()).getTime() / 1000);
                        // console.log(item.date.toString());
                        // console.log(timestamp);
                        if (item.date.toString() < timestamp) {
                            return (
                                <li>
                                    <a href={item.link}>{item.name}</a>
                                    <h5>
                                        <small>{getDate(item.date.toString())}</small>
                                    </h5>
                                </li>
                            );
                        }
                        //     return (
                        //             <Media>
                        //                 <Media.Body>
                        //                     <a href={item.link} target="_blank">{item.name}</a>
                        //                     <Media.Heading>
                        //                         <small>{}</small>
                        //                     </Media.Heading>
                        //                 </Media.Body>
                        //             </Media>
                        //         );
                    })
                }
            </ul>
        );
    }
}

export default EventList;