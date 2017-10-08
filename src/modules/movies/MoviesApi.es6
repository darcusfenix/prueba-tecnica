// @flow
import Request from "../../util/Request";
import * as api from "../../constants/endpoints";

export default class MoviesApi extends Request {
    constructor() {
        super();
    }

    get = async (params: {}) => {
        try {
            return await this.fetch({
                endpoint: api.ENDPOINT_GET_MOVIES,
                params
            });
        } catch (err) {
            return [];
        }
    };
}
