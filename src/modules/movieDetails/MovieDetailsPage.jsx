// @flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { get } from "./movieDetailsActions";
import { selectorMovieDetails } from "./movieDetailsUtil";
import MovieDetailsInfo from "./movieDetailsInfo";

@connect(store => ({
    movie: selectorMovieDetails(store)
}))
export default class MovieDetailsPage extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        params: PropTypes.object,
        movie: PropTypes.object
    };

    constructor(props: {}, context: {}) {
        super(props, context);
    }

    componentDidMount = () => {
        const { dispatch, params } = this.props;

        dispatch(get(params.movie));
    };

    componentWillUnmount = () => {};

    render = () => {
        const { movie } = this.props,
            { imageBackground } = movie;

        return (
            <div
                className="movie-details-body"
                style={{
                    backgroundImage: `url(${imageBackground})`,
                    width: "100%",
                    height: "100%"
                }}
            >
                <div className="movie-details-container">
                    <MovieDetailsInfo movie={movie} />
                </div>
            </div>
        );
    };
}
