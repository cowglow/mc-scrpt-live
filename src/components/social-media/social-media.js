/**
 * Mc Scrpt Live
 *
 * @package cowglow/mc-scrpt-live
 * @licence http://opensource.org/licenses/MIT The MIT License (MIT)
 */

import React from 'react';

import TwitterIcon from '../../assets/icons/fa-twitter.svg';
import SoundCloudIcon from '../../assets/icons/fa-soundcloud.svg';
import MixCloudIcon from '../../assets/icons/fa-mixcloud.svg';
import InstagramIcon from '../../assets/icons/fa-instagram.svg';

class SocialMedia extends React.Component {
    render() {
        return (
            <ul>
                {this.props.bind.map((platform, index) => {
                    return (
                        <li key={index}>
                            <a href={platform.url} target="_blank">
                                {
                                    {
                                        'Twitter': <img src={TwitterIcon} alt={platform.name}/>,
                                        'SoundCloud': <img src={SoundCloudIcon} alt={platform.name}/>,
                                        'MixCloud': <img src={MixCloudIcon} alt={platform.name}/>,
                                        'Instagram': <img src={InstagramIcon} alt={platform.name}/>
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
