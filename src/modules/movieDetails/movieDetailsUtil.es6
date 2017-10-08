// @flow
import { createSelector } from "reselect";

let moviesDetails = store => store.entities.moviesDetails;

export const selectorMovieDetails = createSelector(
    [moviesDetails],
    (movie: {} = {}) => {
        const {
            image_background,
            image_large,
            title,
            large_description,
            date,
            duration,
            extendedcommon = {
                genres: {
                    genre: []
                },
                roles: {
                    role: []
                }
            }
        } = movie;

        let genres = extendedcommon.genres.genre.map(genere => genere.name);
        let actors = [],
            colaborators = [],
            directors = [],
            productors = [],
            writes = [];

        extendedcommon.roles.role.map(role => {
            let talents = role.talents.talent.map(
                talent => `${talent.name} ${talent.fullname}`
            );
            switch (role.id) {
                case "13617516":
                    actors = talents;
                    break;
                case "13617517":
                    directors = talents;
                    break;
                case "13965643":
                    writes = talents;
                    break;
                case "13965645":
                    productors = talents;
                    break;
                default:
                    colaborators = talents;
                    break;
            }
        });

        return {
            title,
            date,
            duration,
            genres,
            actors,
            writes,
            directors,
            productors,
            imageBackground: image_background,
            imageLarge: image_large,
            description: large_description
        };
    }
);
