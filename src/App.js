import React, { Component } from 'react';

import './App.css';

// const API_URI = (document.domain === "localhost") ? "http://mc-scrpt-live/api" : "http://mc.scrpt.live/api";
const API_URI = (document.domain === "localhost") ? "http://localhost:80/~philipsaa/GitHub/mc-scrpt-live/api/" : "http://mc.scrpt.live/api/";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            requestFail: false,
            MediaAssets: {},
            BioText: "",
            Events: {
                Event: []
            },
            SocialMedias: {
                SocialMedia: []
            }
        };
    }

    componentDidMount() {
        let resource = 'events';
        fetch(API_URI + '?xml=' + resource)
            .then(function(response){
                console.log(response.body);
            })
            .catch(error => console.error(`Fetch Error =\n`, error));
        //
        // axios.get(API_URI, {
        //     // data: {
        //     //     xml: 'events'
        //     // },
        //     // mode: 'no-cors',
        //     // headers: {
        //     //     'Access-Control-Allow-Origin': '*',
        //     //     'Content-Type': 'application/json',
        //     // },
        //     // withCredentials: true,
        //     // credentials: 'same-origin'
        // }).then(function (data) {
        //     console.log(data);
        // })
        //     .then(response => {
        //     if (!response.data) {
        //         throw Error("Data Request Failed!");
        //     }
        //     return response.data;
        // }).then((data) => {
        //     this.setState({
        //         requestFail: false,
        //         ...data
        //     });
        // }, () => {
        //     this.setState({
        //         requestFail: true
        //     })
        // })
    }

    render() {
        //     console.log('unit test bro!');
        //     console.log(this.state);
        // const LogoImage = this.state.MediaAssets.LogoImage;
        const SocialMedias = this.state.SocialMedias.SocialMedia;
        const Events = this.state.Events.Event;

        return (<blockquote>WOkring ON it</blockquote>);
        // return (
        //     <div className="App">
        //         <pre>
        //             {this.state}
        //         </pre>
        //         <header>
        //             <div className="container">
        //                 {/*{LogoImage}*/}
        //                 <img src={require('./assets/logo.gif')} className="App-Logo img-responsive" alt=""/>
        //             </div>
        //         </header>
        //         <Grid>
        //             <Row className="text-justify">
        //                 <Col md={4}>
        //                     <h1>{this.state.BioTag}</h1>
        //                     <p>{this.state.BioText}</p>
        //                 </Col>
        //                 <Col md={4}>
        //                     <h1>{this.state.ScheduleTag}</h1>
        //                     <EventList bind={Events}/>
        //                     <br/>
        //                 </Col>
        //                 <Col md={4}>
        //                     <h1><br/>{this.state.ContactTag}</h1>
        //                     <p>{this.state.ContactText}</p>
        //                     <a href={"mailto:" + this.state.ContactEmail}>{this.state.ContactEmail}</a>
        //                 </Col>
        //             </Row>
        //         </Grid>
        //         <br/>
        //         <footer className="text-center">
        //             <Row>
        //                 <Col xs={12} sm={8} md={8} smOffset={2} mdOffset={2}>
        //                     <SocialMedia classes="list-inline" bind={SocialMedias}/>
        //                     <h3>{this.state.FooterTag}</h3>
        //                     <small className="footer">{this.state.FooterText} &copy; {new Date().getFullYear()}</small>
        //                 </Col>
        //             </Row>
        //         </footer>
        //     </div>
        // );
    }
}

export default App;
