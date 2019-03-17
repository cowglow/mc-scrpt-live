/**
 * Mc Scrpt Live
 *
 * @package cowglow/mc-scrpt-live
 * @licence http://opensource.org/licenses/MIT The MIT License (MIT)
 */

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

// Components
import HeaderContent from '../header-content/header-content'
import EventList from '../event-list/event-list';
import SocialMedia from '../social-media/social-media';

// Services
import { backgroundImage } from "../../services/background-image";

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
            SocialMediaData: {
                SocialMedia: []
            },
            EventData: {
                Event: []
            },
            Content: {}
        }
    }

    componentDidMount() {
        fetch(API_URI, {
            method: FETCH
        })
            .then(response => response.json())
            .then(data => this.setState({
                ...data
            }));
    }

    render() {
        const SocialMedias = this.state.SocialMediaData.SocialMedia;
        const Events = this.state.EventData.Event;
        const Content = this.state.Content;

        return (
            <div className="App">
                <header style={backgroundImage(2)}>
                    <HeaderContent />
                </header>
                <Grid>
                    <Row>
                        <Col lg={4}>
                            <h1>{Content.BioTag}</h1>
                            <p className="text-justify">{Content.BioText}</p>
                        </Col>
                        <Col lg={4}>
                            <EventList bind={Events} label={Content.ScheduleTag} class="Schedule"/>
                        </Col>
                        <Col lg={4}>
                            <h1>{Content.ContactTag}</h1>
                            <p className="text-justify">{Content.ContactText}</p>
                            <a href={"mailto:" + Content.ContactEmail}>{Content.ContactEmail}</a>
                        </Col>
                    </Row>
                </Grid>
                <br/>
                <footer className="text-center">
                    <Row>
                        <Col xs={12} sm={8} md={4} smOffset={2} mdOffset={2}>
                            <SocialMedia classes="list-inline" bind={SocialMedias}/>
                            <h3>{Content.FooterTag}</h3>
                            <small className="footer">{Content.FooterText} &copy; {new Date().getFullYear()}</small>
                        </Col>
                    </Row>
                </footer>
            </div>
        );
    }
}