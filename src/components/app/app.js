/**
 * Mc Scrpt Live
 *
 * @package cowglow/mc-scrpt-live
 * @licence http://opensource.org/licenses/MIT The MIT License (MIT)
 */

import React from 'react';

// Components
// import HeaderComponent from '../header-component/header-component'
import EventList from '../event-list/event-list';
import Contact from '../contact/contact';
import SocialMedia from '../social-media/social-media';

// Services
// import {backgroundImage} from "../../services/background-image";
import ContentData from '../../services/contentData';

// Resources
import './app.styles.css';

// const DEV_ENV = (document.domain === 'localhost');
const EVENT_API = "https://script.google.com/macros/s/AKfycbwDp2Qaqwuwkit2eIAgpCpi-oCVvVP3Y3CLdqgY4vpEtj2rWgwK/exec";

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            events: []
        }
    }

    componentWillMount() {
        fetch(EVENT_API)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    loading: false,
                    events: data.Events
                });
            });
    }

    render() {
        const {loading, events} = this.state;

        if (loading) {
            return (<div className="Loader">Loading....</div>)
        } else {
            return (
                <div className="App">
                    {/*<header style={backgroundImage(2)}>*/}
                    {/*<HeaderComponent/>*/}
                    {/*</header>*/}

                    <main>
                        <section>
                            <h1 className="SectionHeader">Hello Junglists!</h1>
                            <div className="SectionBody">
                                I'm an American living and working in Germany. My interests range from filmmaking
                                to music theory. With a variety of experience in different multimedia disciplines,
                                including
                                MC'ing.
                                You can usually catch me grooving alongside some of the coolest DJs in and around the
                                'Mittelfranken' region.
                            </div>
                        </section>

                        <section>
                            <h1 className="SectionHeader">Recent Events</h1>
                            <EventList classname="SectionBody" bind={events}/>
                        </section>

                        <section>
                            <h1 className="SectionHeader">Hit me up!</h1>
                            <Contact classname="SectionBody"
                                     label={ContentData.ContactData.label}
                                     link={ContentData.ContactData.link}
                                     text={ContentData.ContactData.text}/>
                        </section>
                    </main>

                    <br/>
                    <footer>
                        <div xs={12} sm={8} md={4} smOffset={2} mdOffset={2}>
                            <SocialMedia className="SocialMedia" bind={ContentData.SocialMediaData}/>
                            <h3>Philip Saa aka MC SCRPT</h3>
                            <small>All Rights Reserved. &copy; {new Date().getFullYear()}</small>
                        </div>
                    </footer>
                </div>
            );
        }
    }
}
