/**
 * Mc Scrpt Live
 *
 * @package cowglow/mc-scrpt-live
 * @licence http://opensource.org/licenses/MIT The MIT License (MIT)
 */

import React from 'react';

class Contact extends React.Component {

    render() {
        const {body, contact, label} = this.props;
        return (
            <span>
                <p className="text-justify">
                    {body} <a href={contact} target="_twitter">{label}</a>
                </p>
            </span>
        );
    }
}

export default Contact;
