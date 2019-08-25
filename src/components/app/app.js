/**
 * Mc Scrpt Live
 *
 * @package cowglow/mc-scrpt-live
 * @licence http://opensource.org/licenses/MIT The MIT License (MIT)
 */

import React from 'react';

// Components
import Profile from '../profile/profile';
import Contact from '../contact/contact';
import EventList from '../event-list/event-list';
// import HeaderComponent from '../header-component/header-component'
// import SocialMedia from '../social-media/social-media';

// Services
// import {backgroundImage} from "../../services/background-image";

// Resources
import './app.styles.css';

// TODO: move to a dotEnv file
const DEV_ENV = (document.domain === 'localhost');
// const API_URI = (DEV_ENV) ? "http://localhost:3000/fixtures/data.json" : "https://script.google.com/macros/s/AKfycbwDp2Qaqwuwkit2eIAgpCpi-oCVvVP3Y3CLdqgY4vpEtj2rWgwK/exec";
const API_URI = "https://script.google.com/macros/s/AKfycbwDp2Qaqwuwkit2eIAgpCpi-oCVvVP3Y3CLdqgY4vpEtj2rWgwK/exec";

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            content: {},
            events: [],
            social: {}
        }
    }

    componentWillMount() {
        fetch(API_URI)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    loading: false,
                    events: data.Events
                });
            });
    }

    render() {
        const {loading, content, events, social} = this.state;

        if (loading) {
            return (<div className="Loader">Loading....</div>)
        } else {
            return (
                <div className="App">
                    {/*<header style={backgroundImage(2)}>*/}
                    {/*<HeaderComponent/>*/}
                    {/*</header>*/}

                    <section>
                        {/*<h1 className="SectionHeader">{content.BioTag}</h1>*/}
                        {/*<Profile className="SectionBody" bind={content.BioText}/>*/}
                    </section>

                    <section>
                        {/*<h1 className="SectionHeader">{content.ScheduleTag}</h1>*/}
                        <EventList classname="SectionBody" bind={events}/>
                    </section>

                    <section>
                        {/*<h1 className="SectionHeader">{content.ContactTag}</h1>*/}
                        {/*<Contact classname="SectionBody" bind={[content.ContactText, content.ContactEmail]}/>*/}
                    </section>

                    <br/>
                    {/*<footer className="text-center">*/}
                    {/*    <div xs={12} sm={8} md={4} smOffset={2} mdOffset={2}>*/}
                    {/*        <SocialMedia classes="list-inline" bind={this.state.SocialMediaData}/>*/}
                    {/*        <h3>{this.state.Content.FooterTag}</h3>*/}
                    {/*        <small*/}
                    {/*            className="footer">{this.state.Content.FooterText} &copy; {new Date().getFullYear()}</small>*/}
                    {/*    </div>*/}
                    {/*</footer>*/}
                </div>
            );
        }
    }
}
