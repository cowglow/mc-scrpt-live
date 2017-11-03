import 'core-js/es6/map';
import React, {Component} from 'react';


export default class extends Component {

    render() {
        const listItems = this.props.bind.map((item, index) =>
            <li key={index}>
                <a href={item.uri} target="_blank"><span className={"icon fa fa-" + item.name.toLowerCase()}></span></a>
            </li>
        );

        return (
            <ul className={this.props.classes}>{listItems}</ul>
        );
    }
}