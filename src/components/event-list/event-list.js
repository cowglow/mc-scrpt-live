/**
 * Mc Scrpt Live
 *
 * @package cowglow/mc-scrpt-live
 * @licence http://opensource.org/licenses/MIT The MIT License (MIT)
 */

import React from 'react';
import { Media } from 'react-bootstrap';

import './event-list.styles.css';
import getDate from '../../services/get-date/get-date';

class EventList extends React.Component {
    render() {
        return (
            <div className="Schedule text-justify ">
                {
                    this.props.bind.Event.map((item) => {
                        const timestamp = Math.round((new Date()).getTime() / 1000);
                        // console.log(item.date.toString());
                        // console.log(timestamp);
                        if (item.date.toString() < timestamp) {
                            return (
                                <Media>
                                    <Media.Body>
                                        <a href={item.link}>{item.name}</a>
                                        <h5>
                                            <small>{getDate(item.date.toString())}</small>
                                        </h5>
                                    </Media.Body>
                                </Media>
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
                        }
                    )
                }
            </div>
        );
    }
}

export default EventList;