// @flow
import React, { Component } from "react";
import TextField from "material-ui/TextField";
import PropTypes from "prop-types";
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import MovieItem from "./movieItem";
import { get } from "./moviesActions";
import { moviesSelector } from "./moviesUtil";

@connect(store => ({
    movies: moviesSelector(store)
}))
export default class MoviesPage extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        movies: PropTypes.array
    };

    state: { textFiltered: string } = { textFiltered: "" };

    constructor(props: {}, context: {}) {
        super(props, context);
        this.handleViewDetails = ::this.handleViewDetails;
        this.handleOnchangeFilter = ::this.handleOnchangeFilter;
    }

    componentDidMount = () => {
        const { dispatch, movies } = this.props;

        if (movies.length === 0) {
            dispatch(get());
        }
    };

    componentWillUnmount = () => {};

    handleViewDetails = (movieId: string) => {
        browserHistory.push(`movies/${movieId}`);
    };

    handleOnchangeFilter = (event: Object, newValue: string) => {
        this.setState({ textFiltered: newValue });
    };

    render = () => {
        const { movies } = this.props,
            { textFiltered } = this.state;

        let moviesFiltered = [...movies];

        if (textFiltered.length > 0) {
            moviesFiltered = moviesFiltered.filter(movie =>
                movie.title.toLowerCase().includes(textFiltered.toLowerCase())
            );
        }

        return (
            <div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-2">
                        <TextField
                            hintText="Buscar"
                            onChange={this.handleOnchangeFilter}
                            fullWidth={true}
                        />
                    </div>
                </div>
                <div className="row">
                    {moviesFiltered.map(movie => (
                        <MovieItem
                            key={`movie-grid-${movie.id}`}
                            onTouchTap={this.handleViewDetails}
                            movie={movie}
                        />
                    ))}
                </div>
            </div>
        );
    };
}
