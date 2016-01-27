var assert = require('assert');
import countries from '../src/index.js';
    
describe('Countries data', function(){
    beforeEach(function() {
        countries.init();
    });

    it('should return default countries data', function(){
        assert.equal(countries.data.USA, 'United States of America');
        assert.equal(countries.data.UKR, 'Ukraine');
    });

    it('should return default countries data like object', function(){
        assert.equal(countries.values().USA, 'United States of America');
        assert.equal(countries.values().UKR, 'Ukraine');
    });

    it('should return default countries data like array', function(){
        assert.equal(countries.toArray().length, 249);
    });

    it('should transform to Alpha-2 format', function(){
        assert.equal(countries.alpha2().values().UA, 'Ukraine');
        assert.equal(countries.alpha2().values().US, 'United States of America');
    });

    it('should translate to', function(){
        assert.equal(countries.translate('UKR').values().UKR, 'Україна');
        assert.equal(countries.translate('UA').values().UKR, 'Україна');
        assert.equal(countries.translate('ukr').values().UKR, 'Україна');
        assert.equal(countries.translate('ua').values().UKR, 'Україна');
        assert.equal(countries.translate('usa').values().USA, 'США');
    });

    it('should not translate to', function(){
        assert.equal(countries.translate('boo').values().UKR, 'Ukraine');
    });

});