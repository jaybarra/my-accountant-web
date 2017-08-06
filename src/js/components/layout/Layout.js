import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Account from "../Account"
import Settings from "../Settings"
import Home from "../Home";

import {Route, Link} from "react-router-dom";

export default class Layout extends React.Component {
    constructor() {
        super();

        this.state = {
            title: "Welcome",
            sidebarOpen: false
        };

        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    toggleSidebar() {
        $('.ui.sidebar')
            .sidebar('toggle')
        ;
    }

    render() {

        return (
            <div>
                <Header toggleSidebar={this.toggleSidebar} title={this.state.title}/>

                <div className="ui main text container">
                    <h1 className="ui header">Semantic UI Fixed Template</h1>
                    <p>This is a basic fixed menu template using fixed size containers.</p>
                    <p>A text container is used for the main container, which is useful for single column layouts</p>

                    <Link to="/account">Account</Link>
                    <Link to="/settings">Settings</Link>

                    <Route exact path="/" component={Home}/>
                    <Route path="/account" component={Account}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        );
    }
}
