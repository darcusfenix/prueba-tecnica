import React from "react";
import PropTypes from "prop-types";

const movieDetailsInfo = props => {
    const {
        imageLarge,
        title,
        description,
        date,
        genres,
        actors,
        writes,
        directors,
        productors,
        duration
    } = props.movie;

    return (
        <div className="row">
            <div className="col-md-4">
                <img src={imageLarge} />
            </div>
            <div className="col-md-8">
                <div className="text-center">
                    <h1 className="movie-details-title">{title}</h1>
                </div>
                <div className="movie-details-info text-left">
                    <p>{description}</p>
                </div>
                <div className="movie-details-info text-left">
                    <ul>
                        <li>Fecha de lanzamiento: {date}</li>
                        <li>Duración: {duration}</li>
                        <li>
                            Generos:
                            {genres.map(genere => ` ${genere} `)}
                        </li>
                        <li>
                            Actores:
                            {actors.map(actor => ` ${actor} `)}
                        </li>
                        <li>
                            Escritores:
                            {writes.map(writer => ` ${writer} `)}
                        </li>
                        <li>
                            Directores:
                            {directors.map(director => ` ${director} `)}
                        </li>
                        <li>
                            Productores:
                            {productors.map(productor => ` ${productor} `)}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

movieDetailsInfo.propTypes = {
    movie: PropTypes.object
};

export default movieDetailsInfo;
