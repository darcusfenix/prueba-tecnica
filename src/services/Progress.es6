// @flow
import { EE, event } from "../util/index";

let that;

export default class Progress {
    constructor() {
        if (!that) {
            that = this;
        }

        return that;
    }

    static show() {
        EE.emit(event.PROGRESS, true);
    }

    static hide() {
        EE.emit(event.PROGRESS, false);
    }
}
