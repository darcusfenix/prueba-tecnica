// @flow
import axios from "axios";
import config from "../constants/config";
import {Log} from "../services/index";

export default class Request {
    endpoint: string;
    baseUrl: string;
    method: string;
    params: {};
    headers: {
        "Content-Type"?: string
    };
    data: {};
    instance: Function;

    constructor() {
        this.endpoint = "";
        this.method = "GET";
        this.params = { ...config.paramsApi };
        this.data = {};
        this.baseUrl = config.BASE_URL;

        this.instance = axios.create();
    }

    fetch = async (configFetch: {
        endpoint: string,
        params?: {},
        method?: string,
        headers?: {}
    }) => {
        const that = this,
            { endpoint, params } = configFetch;

        if (typeof endpoint !== "undefined") {
            this.endpoint = endpoint;
        }

        if (typeof params !== "undefined") {
            this.params = { ...params, ...this.params };
        }

        try {
            let response = await that.instance.request({
                url: that.endpoint,
                method: that.method,
                baseURL: that.baseUrl,
                headers: that.headers,
                params: that.params,
                data: that.data,
                timeout: config.timeout
            });

            return (
                response.data.response.group || response.data.response.groups
            );
        } catch (error) {
            Log.error("Ocurrió un error, intente más tarde.");

            throw new Error(error);
        }
    };
}
