/**
 * Mc Scrpt Live
 *
 * @package cowglow/mc-scrpt-live
 * @licence http://opensource.org/licenses/MIT The MIT License (MIT)
 */

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// Components
import Bio from '../bio/bio';
import Contact from '../contact/contact';
import EventList from '../event-list/event-list';
import HeaderComponent from '../header-component/header-component'
import SocialMedia from '../social-media/social-media';

// Services
import { backgroundImage } from "../../services/background-image";

// Resources
import './app.styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// TODO: move to a dotEnv file
const DEV_ENV = (document.domain === 'localhost');
const API_URI = (DEV_ENV) ? "http://localhost:3000/fixtures/data.json" : "http://mc.scrpt.live/api/";
const FETCH = (DEV_ENV) ? "GET" : "POST";

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
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
        let that = this;
        fetch(API_URI, {
            method: FETCH
        })
            .then((response) => response.json())
            .then((data) => {
                that.setState({
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
        return (
            <div className="App">
                <header style={backgroundImage(2)}>
                    <HeaderComponent/>
                </header>
                <Container fluid="true">
                    <Row>
                        <Col xl={4}>
                            <h1 class="content-tag">{this.state.Content.BioTag}</h1>
                            <Bio className="text-justify" bind={this.state.Content.BioText} />
                        </Col>
                        <Col xl={4}>
                            <h1 class="content-tag">{this.state.Content.ScheduleTag}</h1>
                            <EventList bind={this.state.EventData}/>
                        </Col>
                        <Col xl={4}>
                            <h1 class="content-tag">{this.state.Content.ContactTag}</h1>
                            <Contact bind={[this.state.Content.ContactText, this.state.Content.ContactEmail]}/>
                        </Col>
                    </Row>
                </Container>

                <br/>
                <footer className="text-center">
                    <Row>
                        <Col xs={12} sm={8} md={4} smOffset={2} mdOffset={2}>
                            <SocialMedia classes="list-inline" bind={this.state.SocialMediaData}/>
                            <h3>{this.state.Content.FooterTag}</h3>
                            <small className="footer">{this.state.Content.FooterText} &copy; {new Date().getFullYear()}</small>
                        </Col>
                    </Row>
                </footer>
            </div>
        );
    }
}