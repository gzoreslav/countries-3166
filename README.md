# countries-3166

[![NPM version][npm-image]][npm-url]
[![Download Count][downloads-image]][downloads-url]

Country codes library (ISO 3166, alpha2 and alpha3)

https://en.wikipedia.org/wiki/ISO_3166-1

## Installation

    $ npm install countries-3166
    
## How to use?

Library written to use it like chain. All methods modified _this.data_ attribute and returns _this_. It allows to use chain for transforming data in what you need. These metods should be the last ones: _values()_ and _toArray()_. See usage example below:

```js
import countries from 'countries-3166';

countries.alpha2().sortByName().toArray();

//array [{AF: "Afghanistan"}, {AX: "Åland Islands"}, …]
```
    
#### data attribute

Object row data property _(by default: alpha-3, english language, no sort)_. Not recommended to use it directly. Methods below modified this property. If you need return *data* to default state after some manipulations, use _init()_ method;

_Example:_
```js
countries.data;

//object {AFG: "Afghanistan", ALA: "Åland Islands", …}
```

### Methods

#### values()

Returns data object for using. Should be the last method in the chain;

_Returns:_
(Object): countries.data (by default: alpha-3, english language, no sort)

_Example:_
```js
countries.values();

//object {AFG: "Afghanistan", ALA: "Åland Islands", …}
```

#### toArray()

Returns data arrayt for using. Should be the last method in the chain;

_Returns:_
(Array): countries.data (by default: alpha-3, english language, no sort)

_Example:_
```js
countries.toArray();

//array [{AFG: "Afghanistan"}, {ALA: "Åland Islands"}, …]
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

/* Set default data */

countries.init(); //reset countris data to default state
```

Check [example page](https://rawgit.com/gzoreslav/countries-3166/master/examples/index.html)

More Demos can be found in the [examples](https://github.com/gzoreslav/countries-3166/tree/master/examples) directory.

> grunt example - to build examples

## Tests

TODO

[npm-image]: https://img.shields.io/npm/v/countries-3166.svg?style=flat-square
[npm-url]: https://npmjs.org/package/countries-3166
[downloads-image]: http://img.shields.io/npm/dm/countries-3166.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/countries-3166
