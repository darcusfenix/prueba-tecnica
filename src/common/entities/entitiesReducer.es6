// @flow
import update from "immutability-helper";
import store from "../../store/store";
import * as constant from "../../constants/actions";

export const entitiesReducer = (
    state: {} = store.entities,
    action: {
        entity: string,
        value: {},
        type: string
    }
) => {
    const { entity, value, type } = action;

    switch (type) {
        case constant.ACTION_ENTITIES_LIST:
            return update(state, {
                [entity]: {
                    $set: value
                }
            });

        default:
            return state;
    }
};
