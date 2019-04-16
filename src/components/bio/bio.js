/**
 * Mc Scrpt Live
 *
 * @package cowglow/mc-scrpt-live
 * @licence http://opensource.org/licenses/MIT The MIT License (MIT)
 */

import React from 'react';

export default class extends React.Component {

    formattedBio(text) {
        let message = [];

        text.split('.').forEach(function (sentence) {
            // TODO: sanitize string of an empty first character
            message.push(sentence);
        });

        // TODO: rejoin the string after they've been sanitized
        console.log('sentences', message);

        return '~working on it';
    }

    render() {

        return <span>{this.formattedBio(this.props.bind)}</span>;
    }
}
