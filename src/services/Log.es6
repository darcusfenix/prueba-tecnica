// @flow
/* eslint no-console: 0 */

let that;

export default class Log {
    constructor() {
        if (!that) {
            that = this;
        }

        return that;
    }

    static error = (message: string, object: mixed) => {
        console.error(message, object);
    };

    static debug = (message: string, object: mixed) => {
        console.log(message, object);
    };
}
