import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import './App.css';

const API_URI = "http://mc-scrpt-live/api/";

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            requestFail: false
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
        return (
            <div className="App">
                <header>
                    <div className="container">
                        <img src={require('./assets/logo.gif')} className="App-Logo" alt="" />
                    </div>
                </header>
                <Grid>
                    <Row className="text-justify">
                        <Col xs={4}>
                            <h3>{this.state.BioTag}</h3>
                            <p>{this.state.BioText}</p>
                        </Col>
                        <Col xs={4}>
                            <h3>{this.state.ScheduleTag}</h3>
                            <p>{this.state.ScheduleText}</p>
                        </Col>
                        <Col xs={4}>
                            <h3>{this.state.ContactTag}</h3>
                            <p>{this.state.ContactText}</p>
                        </Col>
                    </Row>
                </Grid>
                <footer>
                    <Row className="text-center">
                        <Col xs={8} xsOffset={2}>
                            <h1>{this.state.FooterTag}</h1>
                            <ul className="list-inline">

                            </ul>
                            <h3>{this.state.FooterText} &copy; 2017</h3>
                        </Col>
                    </Row>
                </footer>
            </div>
        );
    }
}

export default App;
