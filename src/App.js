import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

import EventList from './components/EventList';
import SocialMedia from './components/SocialMedia';

import './App.css';

const API_URI = (document.domain === "localhost") ? "http://localhost:3000/fixtures/data.json" : "http://mc.scrpt.live/api/";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            SocialMedia: {
                Platform: []
            },
            MediaAssets: {},
            EventData: {
                Event: []
            },
            Content: {}
        }
    }

    componentDidMount() {
        fetch(API_URI, {
            // method: 'GET'
            method: 'POST'
        })
            .then(response => response.json())
            .then(data => this.setState({ ...data }));
    }

    render() {
        // TODO: Work on Social Media Component
        const SocialMedias = this.state.SocialMedia.Platform;
        const MediaAsset = this.state.MediaAssets;
        const Events = this.state.EventData.Event;
        const Content = this.state.Content;

        return (
            <div className="App">
                <header>
                    <div className="container">
                        {MediaAsset.LogoImage}
                        <img src={require('./assets/logo.gif')} className="App-Logo img-responsive" alt=""/>
                    </div>
                </header>
                <Grid>
                    <Row className="text-justify">
                        <Col md={4}>
                            <h1>{Content.BioTag}</h1>
                            <p>{Content.BioText}</p>
                        </Col>
                        <Col md={4}>
                            <h1>{Content.ScheduleTag}</h1>
                            <EventList bind={Events}/>
                            <br/>
                        </Col>
                        <Col md={4}>
                            <h1>{Content.ContactTag}</h1>
                            <p>{Content.ContactText}</p>
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
