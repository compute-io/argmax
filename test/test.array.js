/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	argmax = require( './../lib/array.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'array arg maximum', function tests() {

	it( 'should export a function', function test() {
		expect( argmax ).to.be.a( 'function' );
	});

	it( 'should compute the maximum and return the corresponding indices', function test() {
		var data, expected;

		data = [ 2, 4, 5, 3, 8, 2 ];
		expected = [ 4 ];

		assert.deepEqual( argmax( data ), expected );
	});

	it( 'should return null if provided an empty array', function test() {
		assert.isNull( argmax( [] ) );
	});

});
