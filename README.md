# countries-3166

Country codes library (ISO 3166, alpha2 and alpha3)

## Dependencies

lodash

## Installation

> npm install countries-3166

## Examples

see ./examples/index.html

https://rawgit.com/gzoreslav/countries-3166/master/examples/index.html#

> grunt example - to build examples

## Usage

> import countries from 'countries-3166';

> ### Alpha-3 (default)

> countries.values(); //returns countries data (object)
> countries.toArray(); //returns countries data (array)

> ### Alpha-2

> countries.alpha2().values(); //returns countries alpha-2 data (object)
> countries.alpha2().toArray(); //returns countries alpha-2 data (array)

> ### Translations

> countries.translate('UKR').values(); //returns translated countries data (object)
> countries.translate('UKR').alpha2().toArray(); //returns countries translated alpha-2 data (array)
> countries.translate('UA').alpha2().values(); //returns countries translated alpha-2 data (object)

> ### Sorting

> countries.sortByKey().values(); //returns sorted by key countries data (object)
> countries.translate('UKR').sortByName().toArray(); //returns sorted by name translated countries data (object)
> ##### NOTE: Object's order may displays wrong in console</span>

## Tests

TODO
