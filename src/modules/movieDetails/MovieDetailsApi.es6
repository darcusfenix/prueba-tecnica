// @flow
import Request from "../../util/Request";
import * as api from "../../constants/endpoints";

export default class MovieDetailsApi extends Request {
    constructor() {
        super();
    }

    get = async (params: {}) => {
        try {
            return await this.fetch({
                endpoint: api.ENDPOINT_GET_ONE_MOVIE,
                params
            });
        } catch (err) {
            return {};
        }
    };
}
