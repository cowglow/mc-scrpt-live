/**
 * Mc Scrpt Live
 *
 * @package cowglow/mc-scrpt-live
 * @licence http://opensource.org/licenses/MIT The MIT License (MIT)
 */

import React from 'react';

export default class extends React.Component {

    formattedBio(text) {
        let copy = [];

        text.split('.').forEach(function (sentence) {
            // TODO: sanitize string of an empty first character
            copy.push(sentence.trim());
        });

        // TODO: encode/decode html elements from string
        return copy.join('');
    }

    render() {
        const {bind} = this.props;
        const text = this.formattedBio(bind);
        if (text) {
            return (<div>{text}</div>);
        }
    }
}
