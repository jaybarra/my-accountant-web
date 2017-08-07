import React from "react";
import ReactDOM from "react-dom";

import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

import createHistory from "history/createBrowserHistory"
import {Route} from "react-router"

import {routerMiddleware, routerReducer} from "react-router-redux";
import {BrowserRouter as Router} from "react-router-dom"

import reducers from "./reducers";
import App from "./components/App"

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
            <App/>
        </Router>
    </Provider>
    , root);