import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";

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
            <div className="ui container">
                <Header toggleSidebar={this.toggleSidebar} title={this.state.title}/>
                <SideBar/>
                <div>

                </div>
                <Footer/>
            </div>
        );
    }
}
