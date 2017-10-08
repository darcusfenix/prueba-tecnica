// @flow
import { applyMiddleware, createStore } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import rootReducer from "./indexReducer";

let middleware;

if (process.env.NODE_ENV !== "production") {
    middleware = composeWithDevTools(
        applyMiddleware(thunk, reduxImmutableStateInvariant(), createLogger())
    );
} else {
    middleware = applyMiddleware(thunk);
}

const configureStore = (initialState?: {}) => {
    return createStore(rootReducer, initialState, middleware);
};

export default configureStore;
