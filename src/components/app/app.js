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
const API_URI = (DEV_ENV) ? "http://localhost:3000/fixtures/data.json" : "http://mc.scrpt.live/api/";
const FETCH = (DEV_ENV) ? "GET" : "POST";

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Loading: true,
            Content: {
                BioTag: '',
                BioText: '',
                ContactEmail: '',
                ContactTag: '',
                ContactText: '',
                FooterTag: '',
                FooterText: '',
                ScheduleTag: ''
            },
            EventData: {
                Event: []
            },
            SocialMediaData: {
                SocialMedia: []
            },
        }
    }

    componentWillMount() {
        fetch(API_URI, {
            method: FETCH
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    Loading: false,
                    Content: {
                        BioTag: data.Content.BioTag,
                        BioText: data.Content.BioText,
                        ContactEmail: data.Content.ContactEmail,
                        ContactTag: data.Content.ContactTag,
                        ContactText: data.Content.ContactText,
                        FooterTag: data.Content.FooterTag,
                        FooterText: data.Content.FooterText,
                        ScheduleTag: data.Content.ScheduleTag,
                    },
                    EventData: data.EventData,
                    SocialMediaData: {
                        SocialMedia: data.SocialMediaData.SocialMedia
                    }
                });
            });
    }

    render() {
        const {Loading, EventData} = this.state;
        const {BioTag, BioText, ContactTag, ContactEmail, ContactText, ScheduleTag} = this.state.Content;
        // const {SocialMedia} = this.state.SocialMediaData;

        // console.log(SocialMedia);
        // console.log(EventData);

        if (Loading) {
            return (<div className="Loader">Loading....</div>)
        } else {
            return (
                <div className="App">
                    {/*<header style={backgroundImage(2)}>*/}
                    {/*<HeaderComponent/>*/}
                    {/*</header>*/}

                    <section>
                        <h1 className="SectionHeader">{BioTag}</h1>
                        <Profile className="SectionBody" bind={BioText}/>
                    </section>

                    <section>
                        <h1 className="SectionHeader">{ScheduleTag}</h1>
                        <EventList classname="SectionBody" bind={EventData}/>
                    </section>

                    <section>
                        <h1 className="SectionHeader">{ContactTag}</h1>
                        <Contact classname="SectionBody" bind={[ContactText, ContactEmail]}/>
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