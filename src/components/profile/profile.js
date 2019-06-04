/**
 * Mc Scrpt Live
 *
 * @package cowglow/mc-scrpt-live
 * @licence http://opensource.org/licenses/MIT The MIT License (MIT)
 */

import React from 'react';

class Profile extends React.Component {

    render() {
        const {data} = this.props;
        return (
            <div>
                {data.split('.').map((text) => (<p>{text.trim()}</p>))}
            </div>
        )
    }
}

export default Profile