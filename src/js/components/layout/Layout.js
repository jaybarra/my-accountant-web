import React from "react";
import Account from "../Account"
import Settings from "../Settings"
import Home from "../Home";
import MyAccountantHeader from "./MyAccountantHeader"

import {Container} from "semantic-ui-react";

import {Link, Route} from "react-router-dom";

export default class Layout extends React.Component {

    render() {
        return (
            <Container>
                <MyAccountantHeader/>

                <Container>
                    <Link to="/account" class="ui basic button primary">Account</Link>
                    <Link to="/settings" class="ui basic button secondary">Settings</Link>

                    <Route exact path="/" component={Home}/>
                    <Route path="/account" component={Account}/>
                    <Route path="/settings" component={Settings}/>

                </Container>
            </Container>
        );
    }
}
