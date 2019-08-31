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
import {Title, Body, ContactData, SocialMediaData} from '../../assets/content-data';

// Resources
import './app.styles.css';

const DEV_ENV = (document.domain === 'localhost');
const EVENT_API = (DEV_ENV) ? "fixtures/event-data.json" : "https://script.google.com/macros/s/AKfycbwDp2Qaqwuwkit2eIAgpCpi-oCVvVP3Y3CLdqgY4vpEtj2rWgwK/exec";

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
                    // events: []
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
                            <h1 className="section-header">{Title}</h1>
                            <div>{Body}</div>
                        </section>

                        <section>
                            <h1 className="section-header">Recent Events</h1>
                            <EventList bind={events}/>
                        </section>

                        <section>
                            <h1 className="section-header">Hit me up!</h1>
                            <Contact
                                label={ContactData.label}
                                link={ContactData.link}
                                text={ContactData.text}/>
                        </section>
                    </main>

                    <br/>
                    <footer>
                        <SocialMedia bind={SocialMediaData}/>
                        <h3>Philip Saa aka MC SCRPT</h3>
                        <small>All Rights Reserved. &copy; {new Date().getFullYear()}</small>
                    </footer>
                </div>
            );
        }
    }
}
