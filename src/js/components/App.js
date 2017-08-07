import React from "react";

import Layout from "./layout/Layout";

/**
 * General application container
 */
export default class App extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return <Layout></Layout>
    }
}