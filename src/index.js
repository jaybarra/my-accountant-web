import React, {Component} from "react"
import ReactDOM from "react-dom";

class Layout extends Component {
    render() {
        return (
            <h1>It works!!</h1>
        );
    }
}

const app = document.getElementById("appRoot");
ReactDOM.render(<Layout/>, app);
