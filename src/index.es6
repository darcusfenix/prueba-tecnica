/* @flow */
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { browserHistory, Router } from "react-router";
import configureStore from "./store/configureStore";
import "!style-loader!css-loader!flexboxgrid/css/flexboxgrid.css";
import "!style-loader!css-loader!./assets/css/main.css";
import { routesObject } from "./constants/routes";
import "babel-polyfill";

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routesObject} />
    </Provider>,
    document.getElementById("root")
);
