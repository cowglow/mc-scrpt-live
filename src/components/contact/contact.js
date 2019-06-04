/**
 * Mc Scrpt Live
 *
 * @package cowglow/mc-scrpt-live
 * @licence http://opensource.org/licenses/MIT The MIT License (MIT)
 */

import React from 'react';

class Contact extends React.Component {

    render() {
        const {data, email} = this.props;
        return (
            <span>
                WIP
                <p className="text-justify">{data}</p>
                <a href={"mailto:" + email}>{email}</a>
            </span>
        );
    }
}

export default Contact;