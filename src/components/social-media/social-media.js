/**
 * Mc Scrpt Live
 *
 * @package cowglow/mc-scrpt-live
 * @licence http://opensource.org/licenses/MIT The MIT License (MIT)
 */

import React from 'react';

import Twitter from '../../assets/icons/fa-twitter.svg';
import SoundCloud from '../../assets/icons/fa-soundcloud.svg';
import MixCloud from '../../assets/icons/fa-mixcloud.svg';
import Instagram from '../../assets/icons/fa-instagram.svg';

class SocialMedia extends React.Component {
    render() {
        const SocialMedia = this.props.data;

        return (
            <ul>
                {SocialMedia.map((platform, index) => {
                    return (
                        <li key={index}>
                            <a href={platform.url} target="_blank">
                                {
                                    {
                                        'Twitter': <img src={Twitter} alt={platform.name}/>,
                                        'SoundCloud': <img src={SoundCloud} alt={platform.name}/>,
                                        'MixCloud': <img src={MixCloud} alt={platform.name}/>,
                                        'Instagram': <img src={Instagram} alt={platform.name}/>
                                    }[platform.name]
                                }
                            </a>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default SocialMedia;