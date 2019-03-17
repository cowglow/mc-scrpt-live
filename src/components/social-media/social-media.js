/**
 * Mc Scrpt Live
 *
 * @package cowglow/mc-scrpt-live
 * @licence http://opensource.org/licenses/MIT The MIT License (MIT)
 */

import React from 'react';


export default class extends React.Component {

    render() {
        return (
            <ul className={this.props.classes}>
                {
                    this.props.bind.map((item, index) => (
                        <li key={index}>
                            <a href={item.url} target="_blank">
                                <span className={"icon fa fa-" + item.name.toLowerCase()} />
                            </a>
                        </li>
                    ))
                }
            </ul>
        );
    }
}