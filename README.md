# countries-3166

[![NPM version][npm-image]][npm-url]
[![Download Count][downloads-image]][downloads-url]

Country codes library (ISO 3166, alpha2 and alpha3)

https://en.wikipedia.org/wiki/ISO_3166-1

## Installation

    $ npm install countries-3166

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

https://rawgit.com/gzoreslav/countries-3166/master/examples/index.html#

More Demos can be found in the [examples](https://github.com/gzoreslav/countries-3166/master/examples) directory.

> grunt example - to build examples

## Tests

TODO

[npm-image]: https://img.shields.io/npm/v/countries-3166.svg?style=flat-square
[npm-url]: https://npmjs.org/package/countries-3166
[downloads-image]: http://img.shields.io/npm/dm/countries-3166.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/countries-3166
