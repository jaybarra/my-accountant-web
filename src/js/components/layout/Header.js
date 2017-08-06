import React from "react";

import Title from "./Title";

export default class Header extends React.Component {
    render() {
        return (
            <div className="ui fixed inverted main menu">
                <a className="launch icon item" onClick={this.props.toggleSidebar}>
                    <i className="content icon"/>
                </a>
                <a href="#" className="header item">My Accountant</a>
                <div className="ui container">
                </div>
            </div>
        );
    }
}
