import React from "react";
import {Header, Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";

export default class MyAccountantHeader extends React.Component {
    render() {
        return (
            <Header>
                <Menu>
                    <Menu.Item><Link to="/">My Accountant</Link></Menu.Item>
                </Menu>
            </Header>
        );
    }
}
