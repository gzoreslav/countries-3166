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
        lang = lang.toUpperCase();
        const transl = translation[lang.length == 2 ? lang : alpha2[lang]] || null;
        if (!transl) return this;
        this.data = _.mapValues(this.data, (value, key) => key.length === 3 ?
            transl[alpha2[key]] || value
            : transl[key] || value);
        return this;
    }

    _arrayToObject(arr) {
        return _.cloneDeep(_.mapValues(
            _.mapKeys(
                arr,
                (value) => value[0]
            ),
            (value) => value[1]
        ));
    }

    _to2Array() {
        return _.map(this.data, (value, key) => [key, value]);
    }

    _sort(i) {
        const arr = this._to2Array();
        return this._arrayToObject(
            arr.sort((a, b) => a[i].toLowerCase().localeCompare(b[i].toLowerCase()))
        );
    }

    sortByKey() {
        this.data = this._sort(0);
        return this;
    }

    sortByName() {
        this.data = this._sort(1);
        return this;
    }

    alpha2() {
        this.data = _.mapKeys(this.data, (value, key) => alpha2[key] || key);
        return this;
    }

    favorites(countries) {
        countries = _.isArray(countries) ? countries : [countries];
        const arr = this._to2Array();
        _.forEachRight(countries, (c) => {
            c = c.length === 2 ? c.toUpperCase() : alpha2[c.toUpperCase()];
            const i = _.findIndex(arr, (item) => {
                const key = item[0].length === 2 ? item[0] : alpha2[item[0]];
                return c === key;
            });
            if (i >= 0) {
                arr.unshift(arr[i]);
                arr.slice(i, 1);
            }
        });
        this.data = this._arrayToObject(arr);
        return this;
    }

}

export default new Countries();
