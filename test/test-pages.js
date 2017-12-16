var expect  = require('chai').expect;
var request = require('request');

var assert = require('assert');

var calculator = require('../calculator');

var ninja = 'yamakasi';

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

// Create a test suite (group) called Math
describe('Math', function() {
    // Test One: A string explanation of what we're testing
    it('should test if 3*3 = 9', function(){
      // Our actual test: 3*3 SHOULD EQUAL 9
      assert.equal(9, 3*3);
    });
    // Test Two: A string explanation of what we're testing
    it('should test if (3-4)*8 = -8', function(){
      // Our actual test: (3-4)*8 SHOULD EQUAL -8
      assert.equal(-8, (3-4)*8);
    });
});

//describing ninja test
describe('Ninja', function() {
	//what is the ninja name
	it('ninja name should be yamakasi', function() {
		assert.equal(ninja,'yamakasi');
	});
});

//Calculator
describe('Calculator', function() {
	//what is the ninja name
	it('Sum function is working properly', function() {
		assert.equal(calculator.add(1,2),3);
	});

	it('Sqrt', function() {
		assert.equal(calculator.sqrtOfItem(9),3);
	});

	it('Multiply function', function() {
		assert.equal(calculator.multiplyItems(3,2),6);
	});
});
