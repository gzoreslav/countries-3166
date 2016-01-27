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

	it('should return default countries data like object a', function(){
        assert.equal(countries.values().USA, 'United States of America');
        assert.equal(countries.values().UKR, 'Ukraine');
	});

});