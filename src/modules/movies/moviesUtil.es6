// @flow
import { createSelector } from "reselect";

let movies = store => store.entities.movies;

export const moviesSelector = createSelector([movies], (list: [] = []) => {
    return list.map(movie => {
        const { id, title, description, image_large } = movie;

        return {
            id,
            title,
            description,
            imageLarge: image_large
        };
    });
});
