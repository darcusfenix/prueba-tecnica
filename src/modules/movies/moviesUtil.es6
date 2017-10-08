// @flow
import { createSelector } from "reselect";

let movies = state => state.entities.movies;

export const moviesSelector = createSelector([movies], (list: [] = []) => {
    return list.map((item, index) => {
        return {
            item,
            index
        };
    });
});
/**/
