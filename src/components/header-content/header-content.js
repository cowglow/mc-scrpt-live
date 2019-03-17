/**
 * Mc Scrpt Live
 *
 * @package cowglow/mc-scrpt-live
 * @licence http://opensource.org/licenses/MIT The MIT License (MIT)
 */

import React from 'react';

// Resources
import logo from "../../assets/logo-animation.gif";
import './header-content.styles.css';

/**
 * Header Content
 *
 * Renders a DIV with an IMG inside
 */
export default class extends React.Component {

    render() {
        const logoAlt = 'A terminal style cursor blinks as it spells out the words \'MC\' and \'SCRIPT\'. With no I in script.';

        return (
            <div className="Header-Content container-fluid">
                <img src={logo} className="Header-Content__Logo img-responsive" alt={logoAlt}/>
            </div>
        );
    }
}