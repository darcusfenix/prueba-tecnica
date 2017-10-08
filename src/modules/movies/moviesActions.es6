// @flow

import MoviesApi from "./MoviesApi";
import { Progress } from "../../services/index";
import * as type from "../../constants/actions";

export const get = () => async (dispatch: Function) => {
    Progress.show();

    let filters = {
        quantity: 40,
        order_way: "DESC",
        order_id: 200,
        level_id: "GPS",
        from: 0,
        node_id: 9869
    };

    let movies = await new MoviesApi().get(filters);

    dispatch({
        type: type.ACTION_ENTITIES_LIST,
        entity: "movies",
        value: movies
    });

    Progress.hide();
};
