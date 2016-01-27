# countries-3166

[![NPM version][npm-image]][npm-url]
[![Download Count][downloads-image]][downloads-url]

[![Build Status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][daviddm-url]][daviddm-image]

Country codes library ([ISO 3166, alpha2 and alpha3](https://en.wikipedia.org/wiki/ISO_3166-1)). All data were get from [Wikipedia](https://en.wikipedia.org/wiki/ISO_3166-1).

Benefits:
 - usefull "chain" using _countries.alpha2().translate('UA').sortByName().toArray()_;
 - output like object or array
 - alpha-2 transformation
 - sorting by code or country name
 - translation
 - favorite countries

Supported languages:
 - english (default)
 - ukrainian (ua, ukr)

## Changelog

 - 0.0.21 - modified _toArray_ method to be more useful; add tests
 - 0.0.19 - fix sorting for locales, add _favorites_ method
 - 0.0.18 - add Ukrainian language translations (UA, UKR); fix minor bugs
 - 0.0.16 - first working release

## Installation

    $ npm install countries-3166
 
## How to use?

Library written to use it like chain. All methods (except _values()_ and _toArray()_) modified _this.data_ attribute and returns _this_. It allows to use chain for transforming data in what you need. These metods should be the last ones: _values()_ and _toArray()_. See usage example below:

```js
import countries from 'countries-3166';

/*
Modified data to alpha-2 format, then sort them by country name,
and returns data array
*/
countries.alpha2().sortByName().toArray();

//array [{code: "AF", name: "Afghanistan"}, {code: "AX", name: "Åland Islands"}, …]
```
    
#### data attribute

Object row data property _(by default: alpha-3, english language, no sort)_. Not recommended to use it directly. Chain methods modified this property. If you need return *data* to default state after some manipulations, use _init()_ method;

```js
countries.data;

//object {AFG: "Afghanistan", ALA: "Åland Islands", …}
```

### Return methods

#### values()

Returns data object for using. Should be the last method in the chain;

**Returns:** (Object): countries.data (by default: alpha-3, english language, no sort)

```js
countries.values();

//object {AFG: "Afghanistan", ALA: "Åland Islands", …}
```

#### toArray()

Returns data arrayt for using. Should be the last method in the chain;

**Returns:** (Array): countries.data (by default: alpha-3, english language, no sort)

```js
countries.toArray();

//array [{code: "AFG", name: "Afghanistan"}, {code: "ALA", name: "Åland Islands"}, …]
```

### Chain methods

All these methods modified _this.data_ and returns _this_. Allowed to use in chain.

#### init()

Reset state to default raw data (alpha-3, english language, no sort).

**Returns:** (Object): countries object

```js
countries.init();

/*
Returns (Object) countries
Modified countries.data to {{AFG: "Afghanistan"}, {ALA: "Åland Islands"}, …}
*/
```

#### alpha2()

Modified data to alpha-2 format

**Returns:** (Object): countries object

```js
countries.alpha2().values();

//object {AF: "Afghanistan", AX: "Åland Islands", …}
```

#### translate(lang_code)

Translate data to appropriate language

**Arguments:** lang_code: 2 or 3-length language code. Examples: 'FR', 'UKR'

**Returns:** (Object): countries object

```js
countries.translate('UA').values();

//object {AFG: "Афганістан", ALA: "Аландські острови", …}
```

#### sortByKey()

Sort data by key. If you need alpha-2 format sorted, use _alpha2()_ method before sort.

**Returns:** (Object): countries object

```js
countries.sortByKey().values();

//object {ABW: "Aruba", AFG: "Afghanistan", AGO: "Angola", AIA: "Anguilla", …}
```

#### sortByName()

Sort data by country name. If you need translated format sorted, use _translate(lang)_ method before sort.

**Returns:** (Object): countries object

```js
countries.translate('UKR').sortByKey().values();

//object {AUS: "Австралія", AUT: "Австрія", AZE: "Азербайжан", …}
```

#### favorites(countries)

Put your favorite countries at the beginning. Usually uses after sort.

**Arguments:** countries: array of countries codes or string code if one country needed

**Returns:** (Object): countries object

```js
countries.favorites(['UA', 'FR']).values();

//object {UKR: "Ukraine", FRA: "France", AFG: "Afghanistan", …}
```

## Examples

```js
import countries from 'countries-3166';

/* Alpha-3 (default) */

countries.values(); //returns countries data (object)
countries.toArray(); //returns countries data (array)

/* Alpha-2 */

countries.alpha2().values(); //returns countries alpha-2 data (object)
countries.alpha2().toArray(); //returns countries alpha-2 data (array)

/* Translations */

countries.translate('UKR').values(); //returns translated countries data (object)
countries.translate('UKR').alpha2().toArray(); //returns countries translated alpha-2 data (array)
countries.translate('UA').alpha2().values(); //returns countries translated alpha-2 data (object)

/* Sorting */

countries.sortByKey().values(); //returns sorted by key countries data (object)
countries.translate('UKR').sortByName().toArray(); //returns sorted by name translated countries data (object)
//NOTE: Object's order may displays wrong in console

/* Favorite Countries */

countries.translate('UKR').sortByName().favorites('UKR').values(); //returns sorted by countries data with Ukraine country at the first place (object)

/* Set default data */

countries.init(); //reset countris data to default state
```

Check [example page](https://rawgit.com/gzoreslav/countries-3166/master/examples/index.html)

More Demos can be found in the [examples](https://github.com/gzoreslav/countries-3166/tree/master/examples) directory.

_Build examples:_

    $ grunt example

## Tests

TODO

## Welcome

Package is in development state. Feel free to open pull request and/or propouse new features, bug-fixing, etc. It's under MIT license.

[npm-image]: https://img.shields.io/npm/v/countries-3166.svg?style=flat-square
[npm-url]: https://npmjs.org/package/countries-3166
[downloads-image]: http://img.shields.io/npm/dm/countries-3166.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/countries-3166
[travis-url]: https://travis-ci.org/gzoreslav/countries-3166
[travis-image]: https://travis-ci.org/gzoreslav/countries-3166.svg?branch=master
[daviddm-url]: https://david-dm.org/gzoreslav/countries-3166.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/gzoreslav/countries-3166
[coveralls-image]: https://coveralls.io/repos/github/gzoreslav/countries-3166/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/gzoreslav/countries-3166?branch=master
