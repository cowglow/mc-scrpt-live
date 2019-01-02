import 'core-js/es6/map';
import React, {Component} from 'react';
import {Media} from 'react-bootstrap';


export default class extends Component {

    getDate(now) {
        let date = new Date(now * 1000);
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
    }

    render() {
        const listItems = this.props.bind.map((item) =>
            <Media>
                <Media.Body>
                    <a href={item.link} target="_blank">{item.name}</a>
                    <Media.Heading>
                        <small>{this.getDate(item.date.toString())}</small>
                    </Media.Heading>
                </Media.Body>
            </Media>
        );

        return (<div className={this.props.classes} Schedule>{listItems}</div>);
    }
}