import React from "react";

export default class SideBar extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="ui sidebar inverted vertical menu">
                <a className="item">an item</a>
            </div>
        );
    }
}
