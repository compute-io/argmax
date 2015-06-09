/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	argmax = require( './../lib/accessor.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'accessor arg maximum', function tests() {

	it( 'should export a function', function test() {
		expect( argmax ).to.be.a( 'function' );
	});

	it( 'should compute the maximum and return the corresponding indices using an accessor', function test() {
		var data, expected;

		data = [
			{'x':2},
			{'x':4},
			{'x':5},
			{'x':3},
			{'x':8},
			{'x':2}
		];
		expected = [ 4 ];

		assert.deepEqual( argmax( data, getValue ), expected );

		function getValue( d ) {
			return d.x;
		}
	});

	it( 'should return null if provided an empty array', function test() {
		assert.isNull( argmax( [], getValue ) );

		function getValue( d ) {
			return d.x;
		}
	});

});
