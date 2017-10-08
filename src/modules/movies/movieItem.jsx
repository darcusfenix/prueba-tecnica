import React from "react";
import PropTypes from "prop-types";
import { GridTile } from "material-ui/GridList";

const movieItem = props => {
    const { movie, onTouchTap } = props;

    return (
        <div className="movies-column col-sm-6 col-md-3 col-xs-12">
            <GridTile
                title={movie.title}
                cols={1}
                rows={1}
                onTouchTap={() => {
                    onTouchTap(movie.id);
                }}
                subtitle={movie.description}
            >
                <div className="movies-gallery-container">
                    <img src={movie.image_large} />
                </div>
            </GridTile>
        </div>
    );
};

movieItem.propTypes = {
    movie: PropTypes.object.isRequired,
    onTouchTap: PropTypes.func
};

export default movieItem;
