/**
 * Mc Scrpt Live
 *
 * @package cowglow/mc-scrpt-live
 * @licence http://opensource.org/licenses/MIT The MIT License (MIT)
 */

import React from 'react';
import { Media } from 'react-bootstrap';

import getDate from '../../services/get-date/get-date';

class EventList extends React.Component {

    render() {
        return (
            <div className={this.props.classes}>
                <h1>{this.props.label}</h1>
                <div className="Schedule">
                    {
                        this.props.bind.map((item) => (
                                <Media>
                                    <Media.Body>
                                        <a href={item.link} target="_blank">{item.name}</a>
                                        <Media.Heading>
                                            <small>{getDate(item.date.toString())}</small>
                                        </Media.Heading>
                                    </Media.Body>
                                </Media>
                            )
                        )
                    }
                </div>
            </div>
        );
    }
}

export default EventList;