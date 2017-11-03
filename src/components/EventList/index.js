import 'core-js/es6/map';
import React, {Component} from 'react';
import {Media} from 'react-bootstrap';


export default class extends Component {

    render() {
        const listItems = this.props.bind.reverse().map((item) =>
            <Media>
                <Media.Body>
                    <a href={item.link} target="_blank">{item.name}</a>
                    <Media.Heading><small>{item.date}</small></Media.Heading>
                </Media.Body>
            </Media>
        );

        return (
            <div className={this.props.classes}>{listItems}</div>
        );
    }
}