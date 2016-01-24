import _ from 'lodash';
import data from './data.js';
import alpha2 from './alpha2.js';
import translation from './translation/index.js';

class Countries {

    constructor() {
        this.data = _.cloneDeep(data);
    }

    init() {
        this.data = _.cloneDeep(data);
        return this;
    }

    values() {
        return this.data;
    }

    toArray() {
        return _.map(
            this.data,
            (value, key) => {
                const item = {};
                item[key] = value;
                return item;
            });
    }

    translate(lang) {
        const transl = translation[lang.length == 2 ? lang : alpha2[lang]] || null;
        if (!transl) return this;
        this.data = _.mapValues(this.data, (value, key) => key.length === 3 ?
            transl[alpha2[key]] || value
            : transl[key] || value);
        return this;
    }

    _sort(i) {
        this.data = _.cloneDeep(_.mapValues(
            _.mapKeys(
                _.sortBy(
                    _.map(this.data, (value, key) => [key, value]),
                    item => item[i]
                ),
                (value) => value[0]
            ),
            (value) => value[1]
        ));
    }

    sortByKey() {
        this._sort(0);
        return this;
    }

    sortByName() {
        this._sort(1);
        return this;
    }

    alpha2() {
        this.data = _.mapKeys(this.data, (value, key) => alpha2[key] || key);
        return this;
    }

}

const countries = new Countries();
export const countries;
