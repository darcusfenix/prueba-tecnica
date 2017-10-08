// @flow

import MovieDetails from "./MovieDetailsApi";
import { Progress } from "../../services/index";
import * as type from "../../constants/actions";

export const get = (movieId: string) => async (dispatch: Function) => {
    Progress.show();

    let filters = {
        group_id: movieId
    };

    let movie = await new MovieDetails().get(filters);

    dispatch({
        type: type.ACTION_ENTITIES_LIST,
        entity: "moviesDetails",
        value: movie.common || {}
    });

    Progress.hide();
};
