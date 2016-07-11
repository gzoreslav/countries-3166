import cloneDeep from 'lodash/cloneDeep';
import map from 'lodash/map';
import mapValues from 'lodash/mapValues';
import mapKeys from 'lodash/mapKeys';
import isArray from 'lodash/isArray';
import forEachRight from 'lodash/forEachRight';
import findIndex from 'lodash/findIndex';

import data from './data.js';
import alpha2 from './alpha2.js';
import translation from './translation/index.js';

class Countries {

    constructor() {
        this.data = cloneDeep(data);
    }

    init() {
        this.data = cloneDeep(data);
        return this;
    }

    values() {
        return this.data;
    }

    toArray() {
        return map(
            this.data,
            (value, key) => {
                return {code: key, name: value};
            });
    }

    translate(lang) {
        lang = lang.toUpperCase();
        const transl = translation[lang.length == 2 ? lang : alpha2[lang]] || null;
        if (!transl) return this;
        this.data = mapValues(this.data, (value, key) => key.length === 3 ?
            transl[alpha2[key]] || value
            : transl[key] || value);
        return this;
    }

    _arrayToObject(arr) {
        return cloneDeep(mapValues(
            mapKeys(
                arr,
                (value) => value[0]
            ),
            (value) => value[1]
        ));
    }

    _to2Array() {
        return map(this.data, (value, key) => [key, value]);
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
        this.data = mapKeys(this.data, (value, key) => alpha2[key] || key);
        return this;
    }

    favorites(countries) {
        countries = isArray(countries) ? countries : [countries];
        const arr = this._to2Array();
        forEachRight(countries, (c) => {
            c = c.length === 2 ? c.toUpperCase() : alpha2[c.toUpperCase()];
            const i = findIndex(arr, (item) => {
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
