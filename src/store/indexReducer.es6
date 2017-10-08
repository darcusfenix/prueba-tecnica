// @flow
import { combineReducers } from "redux";
import { entitiesReducer as entities } from "../common/entities/entitiesReducer";

const rootReducer = combineReducers({
    entities
});

export default rootReducer;
