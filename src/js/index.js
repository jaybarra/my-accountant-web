import React from "react";
import ReactDOM from "react-dom";

import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

import createHistory from "history/createBrowserHistory"
import {Route} from "react-router"

import {routerMiddleware, routerReducer} from "react-router-redux";
import {BrowserRouter as Router} from "react-router-dom"

import Layout from "./components/layout/Layout";

import reducers from "./reducers";
import Home from "./components/Home";
import Account from "./components/Account";
import Settings from "./components/Settings";

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(middleware)
);

const root = document.getElementById("appRoot");

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Layout/>
        </Router>
    </Provider>
    , root);