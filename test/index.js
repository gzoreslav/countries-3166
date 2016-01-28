var assert = require('assert');
import countries from '../src/index.js';
    
describe('Countries data', function(){
    beforeEach(function() {
        countries.init();
    });

    it('should run chain', function(){
    	countries.init().alpha2().translate('UA').sortByName().favorites('UKR');
        assert.equal(countries.toArray()[0].code, 'UA');
        assert.equal(countries.toArray()[0].name, 'Україна');
        assert.equal(countries.toArray()[1].code, 'AU');
        assert.equal(countries.toArray()[1].name, 'Австралія');
    });


    it('should return default countries data', function(){
        assert.equal(countries.data.USA, 'United States of America');
        assert.equal(countries.data.UKR, 'Ukraine');
    });

    it('should reset data', function(){
    	countries.data.USA = "Boo";
        assert.equal(countries.init().data.USA, 'United States of America');
    });

    it('should return default countries data like object', function(){
        assert.equal(countries.values().USA, 'United States of America');
        assert.equal(countries.values().UKR, 'Ukraine');
    });

    it('should return default countries data like array', function(){
        assert.equal(countries.toArray().length, 249);
        assert.equal(countries.toArray()[0].code, 'AFG');
        assert.equal(countries.toArray()[0].name, 'Afghanistan');
    });

    it('should transform to Alpha-2 format', function(){
        assert.equal(countries.alpha2().values().UA, 'Ukraine');
        assert.equal(countries.values().US, 'United States of America');
        assert.equal(countries.toArray()[0].code, 'AF');
        assert.equal(countries.toArray()[0].name, 'Afghanistan');
        countries.init().data = {BAR: 'Foo', USA: 'United States of America'};
        countries.alpha2();
        assert.equal(countries.toArray()[0].code, 'BAR');
        assert.equal(countries.toArray()[0].name, 'Foo');
        assert.equal(countries.toArray()[1].code, 'US');
        assert.equal(countries.toArray()[1].name, 'United States of America');
    });

    it('should sort by code', function(){
        assert.equal(countries.sortByKey().toArray()[0].code, 'ABW');
        assert.equal(countries.toArray()[0].name, 'Aruba');
        assert.equal(countries.alpha2().sortByKey().toArray()[0].code, 'AD');
        assert.equal(countries.toArray()[0].name, 'Andorra');
    });

    it('should sort by country name', function(){
        assert.equal(countries.alpha2().translate('ua').sortByName().toArray()[0].code, 'AU');
        assert.equal(countries.toArray()[0].name, 'Австралія');
        assert.equal(countries.toArray()[countries.toArray().length - 1].code, 'JP');
        assert.equal(countries.toArray()[countries.toArray().length - 1].name, 'Японія');
    });

    it('should translate to', function(){
        assert.equal(countries.translate('UKR').values().UKR, 'Україна');
        countries.init();
        assert.equal(countries.translate('UA').values().UKR, 'Україна');
        countries.init();
        assert.equal(countries.alpha2().translate('ukr').values().UA, 'Україна');
        countries.init();
        assert.equal(countries.alpha2().translate('ua').values().UA, 'Україна');
        countries.init();
        assert.equal(countries.translate('de').alpha2().values().TF, 'Französische Süd- und Antarktisgebiete');
        //no lang key returns unmodified data
        countries.init();
        assert.equal(countries.translate('usa').values().USA, 'United States of America');
    });

    it('should not translate to', function(){
        assert.equal(countries.translate('boo').values().UKR, 'Ukraine');
    });

    it('should put favorite country / countries at the beginning', function(){
    	countries.favorites('ua');
        assert.equal(countries.toArray()[0].code, 'UKR');
        assert.equal(countries.toArray()[0].name, 'Ukraine');
        countries.favorites(['pol', 'zwe']);
        assert.equal(countries.toArray()[0].code, 'POL');
        assert.equal(countries.toArray()[0].name, 'Poland');
        assert.equal(countries.toArray()[1].code, 'ZWE');
        assert.equal(countries.toArray()[1].name, 'Zimbabwe');
        countries.favorites('bar');
        assert.equal(countries.toArray()[0].code, 'POL');
    });


});