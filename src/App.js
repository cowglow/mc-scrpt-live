import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import EventList from './components/EventList';
import SocialMedia from './components/SocialMedia';

import './App.css';

const API_URI = (document.domain === "localhost") ? "http://mc-scrpt-live/api" : "http://mc.scrpt.live/api";


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            requestFail: false,
            MediaAssets: {},
            BioText: "",
            Events: {
                Event:[]
            },
            SocialMedias: {
                SocialMedia: []
            }
        };
    }

    componentDidMount() {
        axios.post(API_URI + '/')
            .then(response => {
                if(!response.data){
                    throw Error("Data Request Failed!");
                }
                return response.data;
            })
            .then((data) => {
                this.setState({
                    requestFail: false,
                    ...data
                });
            }, () => {
                this.setState({
                    requestFail: true
                })
            })
    }

    render() {
        // const LogoImage = this.state.MediaAssets.LogoImage;
        const SocialMedias = this.state.SocialMedias.SocialMedia;
        const Events = this.state.Events.Event;

        return (
            <div className="App">
                <header>
                    <div className="container">
                        {/*{LogoImage}*/}
                        <img src={require('./assets/logo.gif')} className="App-Logo" alt="" />
                    </div>
                </header>
                <Grid>
                    <Row className="text-justify">
                        <Col md={4}>
                            <h1>{this.state.BioTag}</h1>
                            <p>{this.state.BioText}</p>
                        </Col>
                        <Col md={4}>
                            <h1>{this.state.ScheduleTag}</h1>
                            <EventList bind={Events} />
                            <br/>
                        </Col>
                        <Col md={4}>
                            <h1><br/>{this.state.ContactTag}</h1>
                            <p>{this.state.ContactText}</p>
                            <a href={"mailto:" + this.state.ContactEmail}>{this.state.ContactEmail}</a>
                        </Col>
                    </Row>
                </Grid>
                <footer className="text-center">
                    <Row>
                        <Col xs={12} sm={8} md={8} smOffset={2} mdOffset={2}>
                            <SocialMedia classes="list-inline" bind={SocialMedias} />
                            <h3>{this.state.FooterTag}</h3>
                            <small className="footer">{this.state.FooterText} &copy; {new Date().getFullYear()}</small>
                        </Col>
                    </Row>
                </footer>
            </div>
        );
    }
}

export default App;
