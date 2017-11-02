import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <div className="container">
                        <img src={require('./assets/logo.gif')} className="App-Logo" />
                    </div>
                </header>
                <Grid>
                    <Row className="text-justify">
                        <Col xs={4}>
                            <h3>Section Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ligula mauris, et molestie odio aliquam faucibus. Duis ornare in ipsum nec viverra. Donec ultrices, ligula vehicula rutrum posuere, ipsum nisl elementum ipsum, sit amet fermentum dolor lectus non arcu. Donec suscipit mollis molestie. Etiam mattis augue a facilisis pulvinar. Phasellus sed augue ligula. Vestibulum vel urna ut lectus aliquam hendrerit at eget magna. Fusce in congue ante, at eleifend augue. Quisque vel pellentesque magna. Ut lobortis tempor ex id sollicitudin. Praesent placerat fermentum malesuada.</p>
                        </Col>
                        <Col xs={4}>
                            <h3>Section Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ligula mauris, et molestie odio aliquam faucibus. Duis ornare in ipsum nec viverra. Donec ultrices, ligula vehicula rutrum posuere, ipsum nisl elementum ipsum, sit amet fermentum dolor lectus non arcu. Donec suscipit mollis molestie. Etiam mattis augue a facilisis pulvinar. Phasellus sed augue ligula. Vestibulum vel urna ut lectus aliquam hendrerit at eget magna. Fusce in congue ante, at eleifend augue. Quisque vel pellentesque magna. Ut lobortis tempor ex id sollicitudin. Praesent placerat fermentum malesuada.</p>
                        </Col>
                        <Col xs={4}>
                            <h3>Section Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ligula mauris, et molestie odio aliquam faucibus. Duis ornare in ipsum nec viverra. Donec ultrices, ligula vehicula rutrum posuere, ipsum nisl elementum ipsum, sit amet fermentum dolor lectus non arcu. Donec suscipit mollis molestie. Etiam mattis augue a facilisis pulvinar. Phasellus sed augue ligula. Vestibulum vel urna ut lectus aliquam hendrerit at eget magna. Fusce in congue ante, at eleifend augue. Quisque vel pellentesque magna. Ut lobortis tempor ex id sollicitudin. Praesent placerat fermentum malesuada.</p>
                        </Col>
                    </Row>
                </Grid>
                <footer>
                    <Row className="text-center">
                        <Col xs={8} xsOffset={2}>
                            <h1>Footer</h1>
                            <ul className="list-inline">
                                <li>ITEM</li>
                                <li>ITEM</li>
                                <li>ITEM</li>
                            </ul>
                            <h3>&copy; 2017</h3>
                        </Col>
                    </Row>
                </footer>
            </div>
        );
    }
}

export default App;
