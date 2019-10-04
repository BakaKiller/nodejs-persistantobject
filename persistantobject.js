// const EventEmitter = require('EventEmitter');
const jsonfile = require('jsonfile');

class PersistantObject {
    constructor() {
        if (this.constructor === PersistantObject) {
            throw new TypeError('Abstract class PersistantObject cannot be instantiated directly');
        }
    }
    save_data() {
        let properties = Object.keys(this);
        let staticproperties = Object.getOwnPropertyNames(this.constructor);
    }
}

module.exports = PersistantObject;
