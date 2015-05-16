/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	argmax = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-argmax', function tests() {

	it( 'should export a function', function test() {
		expect( argmax ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided a non-array', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			function(){},
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				argmax( value );
			};
		}
	});

	it( 'should throw an error if provided an accessor argument which is not a function', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				argmax( [1,2,3], value );
			};
		}
	});

	it( 'should compute the maximum value and return the corresponding indices', function test() {
		var data, expected, actual;

		data = [ 4, 2, 8, 3, 8, 2 ];

		actual = argmax( data );
		expected = [ 2, 4 ];

		assert.deepEqual( actual, expected );
	});

	it( 'should compute the maximum value and return the corresponding indices using an accessor', function test() {
		var data, expected, actual;

		data = [
			{'x':4},
			{'x':2},
			{'x':8},
			{'x':3},
			{'x':8},
			{'x':2}
		];

		actual = argmax( data, getValue );
		expected = [ 2, 4 ];

		assert.deepEqual( actual, expected );

		function getValue( d ) {
			return d.x;
		}
	});

	it( 'should return null if provided an empty array', function test() {
		assert.isNull( argmax( [] ) );
	});

});
