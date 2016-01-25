# countries-3166

[![NPM version][npm-image]][npm-url]
[![Download Count][downloads-image]][downloads-url]

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

 - 0.0.19 - fix sorting for locales, add favorites method
 - 0.0.18 - add Ukrainian language support (UA, UKR); fix minor bugs
 - 0.0.16 - first working release

## Installation

    $ npm install countries-3166
    
## How to use?

Library written to use it like chain. All methods (except _values()_ and _toArray()_) modified _this.data_ attribute and returns _this_. It allows to use chain for transforming data in what you need. These metods should be the last ones: _values()_ and _toArray()_. See usage example below:

```js
import countries from 'countries-3166';

countries.alpha2().sortByName().toArray();

//array [{AF: "Afghanistan"}, {AX: "Åland Islands"}, …]
```
    
#### data attribute

Object row data property _(by default: alpha-3, english language, no sort)_. Not recommended to use it directly. Chain methods modified this property. If you need return *data* to default state after some manipulations, use _init()_ method;

_Example:_
```js
countries.data;

//object {AFG: "Afghanistan", ALA: "Åland Islands", …}
```

### Return methods

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

### Chain methods

All these methods modified _this.data_ and returns _this_. Allowed to use in chain.

#### init()

Reset state to default raw data (alpha-3, english language, no sort).

_Returns:_
(Object): countries object

_Example:_
```js
countries.init();

/*
Returns (Object) countries
Modified countries.data to {{AFG: "Afghanistan"}, {ALA: "Åland Islands"}, …}
*/
```

#### alpha2()

Modified data to alpha-2 format

_Returns:_
(Object): countries object

_Example:_
```js
countries.alpha2().values();

//object {{AF: "Afghanistan"}, {AX: "Åland Islands"}, …}
```

#### translate(lang)

Translate data to appropriate language

_Arguments:_
lang: 2 or 3-length char of language. Examples: 'FR', 'UKR'

_Returns:_
(Object): countries object

_Example:_
```js
countries.translate('UA').values();

//object {{AFG: "Афганістан"}, {ALA: "Аландські острови"}, …}
```

#### sortByKey()

Sort data by key. If you need alpha-2 format sorted, use _alpha2()_ method before sort.

_Returns:_
(Object): countries object

_Example:_
```js
countries.sortByKey().values();

//object {ABW: "Aruba", AFG: "Afghanistan", AGO: "Angola", AIA: "Anguilla", ALA: "Åland Islands"…}
```

#### sortByName()

Sort data by country name. If you need translated format sorted, use _translate(lang)_ method before sort.

_Returns:_
(Object): countries object

_Example:_
```js
countries.translate('UKR').sortByKey().values();

//object {AUS: "Австралія", AUT: "Австрія", AZE: "Азербайжан", …}
```

#### favorites(countries)

Put your favorite countries at the beginning. If you need sorted data and your countries first, use _sort_ then _favorites_

_Arguments:_
countries: array of countries codes or string code if one country needed

_Returns:_
(Object): countries object

_Example:_
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

[npm-image]: https://img.shields.io/npm/v/countries-3166.svg?style=flat-square
[npm-url]: https://npmjs.org/package/countries-3166
[downloads-image]: http://img.shields.io/npm/dm/countries-3166.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/countries-3166
