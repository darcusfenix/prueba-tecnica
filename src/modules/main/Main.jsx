// @flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { EE, event } from "../../util/index";

injectTapEventPlugin();

const theme = getMuiTheme();

export default class Main extends Component {
    state: {
        pageProgress: boolean
    } = { pageProgress: true };

    static propTypes = {
        children: PropTypes.node,
        dispatch: PropTypes.func
    };

    constructor(props: {}, context: {}) {
        super(props, context);
        EE.on(event.PROGRESS, flag => {
            this.setState({ pageProgress: flag });
        });
    }

    componentDidMount = async () => {};

    render = () => {
        const { children } = this.props,
            { pageProgress } = this.state;

        return (
            <MuiThemeProvider muiTheme={theme}>
                <div>
                    {children}
                    {pageProgress && "Cargando contenido"}
                </div>
            </MuiThemeProvider>
        );
    };
}
