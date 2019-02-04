import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

import EventList from './components/EventList';
import SocialMedia from './components/SocialMedia';

import ImageLogo from './assets/logo.gif';
import './App.css';

const DEV_ENV = (document.domain === 'localhost');
const API_URI = (DEV_ENV) ? "http://localhost:3000/fixtures/data.json" : "http://mc.scrpt.live/api/";
const FETCH = (DEV_ENV) ? "GET" : "POST";

class App extends Component {

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
            .then(data => this.setState({ ...data }));
    }

    render() {
        const SocialMedias = this.state.SocialMediaData.SocialMedia;
        const Events = this.state.EventData.Event;
        const Content = this.state.Content;

        return (
            <div className="App">
                <header>
                    <div className="container-fluid">
                        <img src={ImageLogo} className="App-Logo img-responsive" alt={ImageLogo}/>
                    </div>
                </header>
                <Grid fluid="true">
                    <Row>
                        <Col lg={4}>
                            <h1>{Content.BioTag}</h1>
                            <p className="text-justify">{Content.BioText}</p>
                        </Col>
                        <Col lg={4}>
                            <h1>{Content.ScheduleTag}</h1>
                            <div className="Schedule">
                                <EventList bind={Events}/>
                            </div>
                            <br/>
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
                        <Col xs={12} sm={8} md={8} smOffset={2} mdOffset={2}>
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

export default App;
